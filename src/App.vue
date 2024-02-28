<script setup>
const movies = [
  {
    "id": 1,
    "title": "American Fiction",
    "description": "Thelonious “Monk” Ellisons writing career has stalled because his work isnt deemed “Black enough.” Monk, a writer and English professor, writes a satirical novel under a pseudonym, aiming to expose the publishing worlds hypocrisies. The books immediate success forces him to get deeper enmeshed in his assumed identity and challenges his closely-held worldviews.",
    "year": 2023,
    "imgUrl": "https://cinema10.com.br/upload/featuredImage.php?url=https%3A%2F%2Fcinema10.com.br%2Fupload%2Ffilmes%2Ffilmes_17249_american-fiction-poster.jpg"
  },
  {
    "id": 2,
    "title": "Anatomy of a Fall",
    "description": "A woman is suspected of her husbands murder, and their blind son faces a moral dilemma as the sole witness.",
    "year": 2023,
    "imgUrl": "https://play-lh.googleusercontent.com/c4MgFggzoHZSNbC9NYomtadxjz0g39lB5E7xy-vbQ1ZKPL3DrEQXvlthkOr9MsUYHxMocMNOYILJgVGblV7Q"
  },
  {
    "id": 3,
    "title": "Oppenheimer",
    "description": "The story of J. Robert Oppenheimers role in the development of the atomic bomb during World War II.",
    "year": 2023,
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UX1000_.jpg"
  },
  {
    "id": 4,
    "title": "Perfect Days",
    "description": "Hirayama seems utterly content with his simple life as a cleaner of toilets in Tokyo. Outside of his very structured everyday routine he enjoys his passion for music and for books. And he loves trees and takes photos of them. A series of unexpected encounters gradually reveal more of his past.",
    "year": 2023,
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BYjI2Njc4MGQtYzYwNC00MDQ1LTkyMzQtODY0NDk4NzZjNGMyXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_FMjpg_UX1000_.jpg"
  }
]
</script>

<template>
  <!-- <h1>CRUD - FILMES</h1> -->
  <!-- <RouterLink to="about">about</RouterLink><br> -->
  <!-- <RouterLink :to="{ name: 'movies' }">movies</RouterLink><br> -->
  <!-- <RouterLink :to="{ name: 'new_movie'}">add new movie</RouterLink> -->
  <!-- <RouterView></RouterView> -->
  
  <v-app theme="dark">
    <v-app-bar color="indigo" flat class="border-b" title="CRUD Filmes"></v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="4" lg="3" v-for="movie in movies">
            <v-card>
              <v-img :src="movie.imgUrl" cover></v-img>
              <v-card-text>{{ movie.title }}</v-card-text>
              <v-card-actions>
                <RouterLink 
                  :to="{ name: 'movie', params: { id: movie.id } }"
                >
                <v-btn>Ver Detalhes</v-btn>
              </RouterLink>
              </v-card-actions>
            </v-card>
          </v-col>
          
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
