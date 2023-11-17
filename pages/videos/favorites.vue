<template>
  <div>Vídeos favoritos</div>
  <div class="videos">
    <div v-for="favorite in favorites" :key="favorite.id">
      <h2>{{ favorite.title }}</h2>
      <iframe
        width="550"
        height="400"
        :src="favorite.url"
        title="YouTube video player"
        frameborder="0"
      />
      <div>
        <button @click="deletefavorite(favorite.id)">Remover favorito</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const videoStore = useVideoStore();
const { favorites } = storeToRefs(videoStore);

const { $toast } = useNuxtApp();

const deletefavorite = (id: number) => {
  videoStore.deleteFavorite(id);
  $toast.error("Removido com sucesso!");
};
</script>
