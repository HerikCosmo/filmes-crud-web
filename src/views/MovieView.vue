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
    <main>
        <h1>{{ movie.title  }}</h1>
        <p>{{ movie.year }}</p>
        <p>{{ movie.description  }}</p>
        <img width="256px" :src="movie.imgUrl" />
    </main>
</template>