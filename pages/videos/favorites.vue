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
        <button @click="deleteFavorite(favorite.id)">Remover favorito</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const favorites = useFavorites();

const deleteFavorite = (id: number) => {
  const filteredFavorites = favorites.value.filter(
    (favorite) => favorite.id !== id
  );

  favorites.value = filteredFavorites;
};
</script>
