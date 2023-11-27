<template>
  <h1 class="text-4xl text-center">{{ $t("title") }}</h1>
  <div
    class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4"
  >
    <UCard v-for="video in videos" :key="video.id">
      <template #header>
        {{ video.title }}
      </template>

      <iframe
        class="h-48 w-full"
        :src="video.url"
        title="YouTube video player"
        frameborder="0"
      />

      <template #footer>
        <div class="flex justify-between">
          <UButton @click="addFavorite(video)">
            {{ $t("textButtonAddFavorite") }}
          </UButton>
          <NuxtLink
            :to="{
              name: 'videos-id',
              params: { id: video.id.toString() },
            }"
          >
            <UButton label="Ver vídeo" color="gray">
              <template #trailing>
                <UIcon name="i-heroicons-arrow-right-20-solid" />
              </template>
            </UButton>
          </NuxtLink>
        </div>
      </template>
    </UCard>
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
