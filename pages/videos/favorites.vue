<template>
  <h1 class="text-4xl text-center mb-4">{{ $t("titleFavorites") }}</h1>
  <div>
    <div
      class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4"
    >
      <UCard v-for="video in favorites" :key="video.id">
        {{ video.title }}

        <iframe
          class="h-48 w-full"
          :src="video.url"
          title="YouTube video player"
          frameborder="0"
        />
        <UButton @click="deleteFavorite(video.id)"> Remover Favorito </UButton>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
const videoStore = useVideoStore();
const { favorites } = storeToRefs(videoStore);

const { $toast } = useNuxtApp();

const deleteFavorite = (id: number) => {
  videoStore.deleteFavorite(id);
  $toast.error("Removido com sucesso!");
};
</script>
