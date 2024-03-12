<script setup>
import { onBeforeMount, ref } from 'vue' 
import { getMovies, deleteMovie } from '@/services/movieService';

const movies = ref([])

const dialog = ref(false)

onBeforeMount(() => {
  populateMovies()
})

async function populateMovies() {
  movies.value = await getMovies()
}

const movieId = ref(0)
const movieTitle = ref('')

function deleteModal(id, title) {
  dialog.value = true
  movieId.value = id
  movieTitle.value = title
}

async function deleteMovieModal(id) {
  await deleteMovie(id)

  populateMovies()

  dialog.value = false
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

          <v-btn color="red" @click="deleteMovieModal(movieId)">
            Sim
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>
