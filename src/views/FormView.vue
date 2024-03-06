<script setup>
import axios from 'axios';

import { ref, reactive, computed } from 'vue';
import { useRoute,useRouter } from 'vue-router';

const route = useRoute()

const movie = reactive({
    id: 0,
    title: '',
    description: '',
    year: 0, 
    imgUrl: ''
})

const isEditing = computed(() => {
    return !!route.params.id
})

if(isEditing.value) {
    axios.get(`http://localhost:8080/movies/${route.params.id}`)
        .then(response => {
            const movieData = response.data
            movie.id = movieData.id
            movie.title = movieData.title
            movie.description = movieData.description
            movie.year = movieData.year
            movie.imgUrl = movieData.imgUrl
        })
        .catch(error => {
            console.log(error)
        })
} else {
    movie.id = 0,
    movie.title =  '',
    movie.description = '',
    movie.year = 0, 
    movie.imgUrl = ''
}


const loading = ref(false)

const rules = reactive({
    title: [
        v => !!v || 'Título é obrigatório'
    ],
    year: [
        v  => {
        if (!isNaN(parseInt(v))) return true;
        return 'Ano não é válido';
        },
    ],
    description: [
    v => !!v || 'Descrição é obrigatória'
    ]
    
})

const router = useRouter()

function saveMovie() {
    loading.value = true

    if(isEditing.value) {
        axios.put(`http://localhost:8080/movies/${route.params.id}`, {
        title: movie.title,
        description: movie.description,
        year: movie.year,
        imgUrl: movie.imgUrl
    })
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
        axios.post(`http://localhost:8080/movies`, {
        title: movie.title,
        description: movie.description,
        year: movie.year,
        imgUrl: movie.imgUrl
        })
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
    
}

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
                                    v-model="movie.title"
                                    label="Título"
                                    :rules="rules.title"
                                    required
                                >

                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    v-model.number="movie.year"
                                    label="Ano"
                                    :rules="rules.year"
                                    required
                                >

                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    v-model="movie.imgUrl"
                                    label="Link do Poster"
                                    required
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea label="Descrição" v-model="movie.description" :rules="rules.description"></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-btn v-if="isEditing" class="mr-2" :to="{ name: 'movie', params: { id: movie.id } }">
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

