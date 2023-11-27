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

const videos = ref<Video[]>([]);

onMounted(async () => {
  videos.value = await $fetch("/api/v1/videos");
});

const { addFavorite } = useVideoStore();
</script>
