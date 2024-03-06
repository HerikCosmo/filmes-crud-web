<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue' 

const movies = ref([])

const movieId = ref(0)
const movieTitle = ref('')

const dialog = ref(false)

onBeforeMount(() => {
  populateMovies()
})

function populateMovies() {
  axios.get('http://localhost:8080/movies')
  .then(response => {
    movies.value = response.data
  })
  .catch(error => {
    console.log(error)
  })
}

function deleteModal(id, title) {
  dialog.value = true
  movieId.value = id
  movieTitle.value = title
}

function deleteMovie(id) {
  axios.delete(`http://localhost:8080/movies/${id}`)
    .then(() => {
      populateMovies()
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      dialog.value = false
    })
}
</script>

<template>
  <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="4" lg="3" v-for="movie in movies">
            <v-card>
              <v-img :src="movie.imgUrl" cover></v-img>
              <v-card-text class="text-h6">{{ movie.title }}</v-card-text>
              <v-card-actions>
                <v-btn :to="{ name: 'movie', params: { id: movie.id } }">Ver Detalhes</v-btn>
                <v-btn color="red-lighten-1" @click="deleteModal(movie.id, movie.title)">Apagar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-dialog v-model="dialog" max-width="400">
      <v-card title="Apagar filme">
        <v-card-text>Deseja apagar filme "{{ movieTitle }}"?</v-card-text>
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="dialog = false">
            Cancelar
          </v-btn>

          <v-btn color="red" @click="deleteMovie(movieId)">
            Sim
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>
