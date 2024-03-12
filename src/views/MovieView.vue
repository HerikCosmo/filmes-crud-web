<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getMovie } from '@/services/movieService';

const movie = ref({})
const route = useRoute()

onBeforeMount(async () => {
    movie.value = await getMovie(route.params.id)
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
                    <RouterLink :to="{ name: 'form_edit_movie', params: { id: movie.id } }">
                    <v-btn>Atualizar filme</v-btn>
                </RouterLink>   
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
