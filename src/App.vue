<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

</script>

<template>
  <v-app theme="dark">
    <RouterLink :to="{ name: 'movies'}">
      <v-app-bar color="indigo" flat class="border-b" title="CRUD Filmes">
        <template #append>
          <v-btn v-if="route.name !== 'form_edit_movie'" variant="outlined" :to="{ name: 'form_movie'}">Adicionar novo filme</v-btn>
        </template>
      </v-app-bar>
    </RouterLink>
    <RouterView></RouterView>
  </v-app>
</template>

<style scoped>

</style>
