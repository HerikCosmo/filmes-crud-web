<script setup>

</script>

<template>
  <h1>CRUD - FILMES</h1>
  <RouterLink to="about">about</RouterLink><br>
  <RouterLink :to="{ name: 'movies' }">movies</RouterLink><br>
  <RouterLink :to="{ name: 'new_movie'}">add new movie</RouterLink>
  <RouterView></RouterView>

</template>

<style scoped>

</style>
