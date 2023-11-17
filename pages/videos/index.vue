<template>
  <div>Vídeos</div>
  <NuxtLink to="/videos/favorites">Favoritos</NuxtLink>
  <div class="videos">
    <div v-for="video in videos" :key="video.id">
      <h2>{{ video.title }}</h2>
      <p v-date-hour="'dd/mm/aaaa'">{{ video.created_at }}</p>
      <iframe
        width="550"
        height="400"
        :src="video.url"
        title="YouTube video player"
        frameborder="0"
      />
      <div>
        <button @click="addFavorite(video)">Adicionar favorito</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Video } from "~/interfaces";

const videos: Video[] = [
  {
    id: 1,
    title: "01 - Introdução e Instalação",
    url: "https://www.youtube.com/embed/WahQ5AoXpuU?si=F2FrXqWjB1dtJvGw",
    created_at: "2023-10-15",
  },
  {
    id: 2,
    title: "02 - Configuração",
    url: "https://www.youtube.com/embed/JbbB84bnPog?si=mKtXqUkTKCuNHqjJ",
    created_at: "2023-10-20",
  },
  {
    id: 3,
    title: "03 - Pages",
    url: "https://www.youtube.com/embed/S99sVicr8NI?si=jR8Y0QLVVLoQA7mX",
    created_at: "2023-10-10",
  },
  {
    id: 4,
    title: "04 - Components",
    url: "https://www.youtube.com/embed/cCHWanw49l8?si=i7569DvWVVtto-Ja",
    created_at: "2023-10-05",
  },
];
const { $toast } = useNuxtApp();

onMounted(() => {
  $toast.success("Vídeos carregados com sucesso!");
});

const { addFavorite } = useVideoStore();
</script>

<style scoped>
.videos {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.videos button {
  display: inline-block;
}
</style>
