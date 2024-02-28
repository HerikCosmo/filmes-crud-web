<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const movie = reactive({
    title: "",
    description: "",
    year: 0,
    imgUrl: ""
})

const router = useRouter()

function newMovie() {
    
    axios.post('http://localhost:8080/movies', {
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
}



</script>

<template>
    <form @submit.prevent="newMovie">
        <label for="title">Título</label><br>
        <input v-model="movie.title" type="text" name="title"><br>
        <label for="description">Descrição</label><br>
        <textarea v-model="movie.description" name="description"></textarea><br>
        <label for="year">Ano</label><br>
        <input v-model.number="movie.year" type="number" name="year"><br>
        <label for="img_url">URL do Poster</label><br>
        <input v-model="movie.imgUrl" type="text" name="img_url"><br>
        <button>Enviar</button>
    </form>
</template>