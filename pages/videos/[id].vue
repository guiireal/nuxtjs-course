<template>
  <div>Você está no vídeo de número {{ id }}</div>
  <VideoDetail />
  <VideoControllerPlay />
</template>

<script setup>
definePageMeta({
  layout: "show",
});

const route = useRoute();

const id = computed(() => route.params.id);
</script>
