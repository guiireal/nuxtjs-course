<template>
  <h1>Componentes - Nuxt 3</h1>
  <p>Autor: Pablo Codes</p>
  <p>{{ diffInDays }} dias atrás</p>
</template>

<script setup lang="ts">
const { diffInDays, pastDays } = useFormatter();

const videoDate = new Date(2023, 9, 2);

pastDays(videoDate);
</script>
