<script setup>
</script>

<template>
  <v-app theme="dark">
    <RouterLink :to="{ name: 'movies'}">
      <v-app-bar color="indigo" flat class="border-b" title="CRUD Filmes">
        <template #append>
          <v-btn variant="outlined" :to="{ name: 'new_movie'}">Adicionar novo filme</v-btn>
        </template>
      </v-app-bar>
    </RouterLink>
    <RouterView></RouterView>
  </v-app>
</template>

<style scoped>

</style>
