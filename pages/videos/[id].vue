<template>
  <div>Você está no vídeo de número {{ id }}</div>
  <VideoDetail />
  <VideoControllerPlay />
</template>

<script setup>
const route = useRoute();

const id = computed(() => route.params.id);
</script>
