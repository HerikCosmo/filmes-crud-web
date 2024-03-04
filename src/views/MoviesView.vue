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
  <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="4" lg="3" v-for="movie in movies">
            <v-card>
              <v-img :src="movie.imgUrl" cover></v-img>
              <v-card-text>{{ movie.title }}</v-card-text>
              <v-card-actions>
                <v-btn :to="{ name: 'movie', params: { id: movie.id } }">Ver Detalhes</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          
        </v-row>
      </v-container>
    </v-main>
</template>
