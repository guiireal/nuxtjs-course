import type { Video } from "~/interfaces";

export const useVideoStore = defineStore(
  "videos",
  () => {
    const favorites = ref<Video[]>([]);

    const addFavorite = (video: Video) => {
      const hasFavorite = favorites.value.some((item) => item.id === video.id);

      if (!hasFavorite) {
        favorites.value.push(video);
      }
    };

    const deleteFavorite = (video: number) => {
      const filteredFavorites = favorites.value.filter(
        (item) => item.id !== video
      );

      favorites.value = filteredFavorites;
    };

    return {
      favorites,
      addFavorite,
      deleteFavorite,
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
