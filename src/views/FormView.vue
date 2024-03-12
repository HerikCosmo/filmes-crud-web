<script setup>
import axios from 'axios';

import { ref, reactive, computed } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        title(value) {
            if(!!value) return true

            return 'Título é obrigatório'
        },
        year(value) {
            if (!isNaN(parseInt(value))) return true;

            return 'Ano não é válido';
        },
        description(value) {
            if(!!value) return true

            return 'Descrição é obrigatória'
        }
    }
})

const route = useRoute()

const movieId = ref(0)
const title = useField('title')
const year = useField('year')
const description = useField('description')
const imgUrl = useField('imgUrl')

const isEditing = computed(() => {
    return !!route.params.id
})

if(isEditing.value) {
    axios.get(`http://localhost:8080/movies/${route.params.id}`)
        .then(response => {
            const movieData = response.data
            movieId.value = movieData.id
            title.value.value = movieData.title
            description.value.value = movieData.description
            year.value.value = movieData.year
            imgUrl.value.value = movieData.imgUrl
        })
        .catch(error => {
            console.log(error)
        })
}

const loading = ref(false)

const router = useRouter()

const saveMovie = handleSubmit(values => {
    loading.value = true

    if(isEditing.value) {
        axios.put(`http://localhost:8080/movies/${movieId.value}`, values)
    .then(response => {
        router.push({ name: 'movies'})

    })
    .catch(error =>{
        console.log(error)
    })
    .finally(() =>  {
        loading.value = false
    })
    } else {
        axios.post(`http://localhost:8080/movies`, values)
        .then(response => {
            router.push({ name: 'movies'})

        })
        .catch(error =>{
            console.log(error)
        })
        .finally(() =>  {
            loading.value = false
        })
    }

})


</script>

<template>
    <v-main>
        <v-container>
            <v-row>
                <h1 class="text-h2 my-3">{{ isEditing ? 'Atualizar' : 'Cadastrar' }} Filme</h1>
                
            </v-row>
                <v-form @submit.prevent="saveMovie">
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    v-model="title.value.value"
                                    :error-messages="title.errorMessage.value"
                                    label="Título"
                                    required
                                >

                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    v-model.number="year.value.value"
                                    :error-messages="year.errorMessage.value"                                
                                    label="Ano"
                                    required
                                >

                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    v-model.number="imgUrl.value.value"
                                    :error-messages="imgUrl.errorMessage.value"
                                    label="Link do Poster"
                                    required
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea label="Descrição" v-model="description.value.value" :error-messages="description.errorMessage.value"></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-btn v-if="isEditing" class="mr-2" :to="{ name: 'movie', params: { id: movieId.value } }">
                                    Voltar
                                </v-btn>
                                <v-btn v-else class="mr-2" :to="{ name: 'movies'}">
                                    Voltar
                                </v-btn>
                                <v-btn
                                    color="green-lighten-2"    
                                    :loading="loading"
                                    type="submit"
                                >
                                 {{ isEditing ? 'Atualizar' : 'Cadastrar' }}
                            </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
            </v-form>
        </v-container>
    </v-main>
</template>

