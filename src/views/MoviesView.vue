<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue' 

const movies = ref([])

onBeforeMount(() => {
  axios.get('http://localhost:8080/movies')
  .then(response => {
    movies.value = response.data
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
  })
})
</script>

<template>
  <main>
    <ul>
      <li v-for="movie in movies"> 
      <h3>
        <RouterLink 
          :to="{ name: 'movie', params: { id: movie.id } }"
        >
          {{ movie.title }}
        </RouterLink>
      </h3>
      <img width="128px" :src="movie.imgUrl" />
      </li>
    </ul>
  </main>
</template>
