<template>
  <div>Você está no vídeo de número {{ id }}</div>
  <VideoDetail />
  <VideoControllerPlay />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "show",
  middleware: ["video", "auth"],
});

const route = useRoute();

const id = computed(() => route.params.id);
</script>
