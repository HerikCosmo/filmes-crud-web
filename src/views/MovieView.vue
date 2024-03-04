<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const movie = ref({})
const route = useRoute()
onBeforeMount(() => {
    axios.get(`http://localhost:8080/movies/${route.params.id}`)
        .then(response => {
            movie.value = response.data
        })
        .catch(error => {
            console.log(error)
        })
})
</script>

<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="4">
                    <v-img :src="movie.imgUrl"></v-img>
                </v-col>
                <v-col cols="8">
                    <h1 class="text-h2 font-weight-bold">{{ movie.title }}</h1>
                    <p class="text-subtitle-1 mt-3">({{ movie.year }})</p>
                    <p class="text-justify py-3">{{ movie.description }}</p>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
