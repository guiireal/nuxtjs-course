<template>
  <div>Você está no vídeo de número {{ id }}</div>
</template>

<script setup lang="ts">
const route = useRoute();

const id = computed(() => route.params.id);
</script>
