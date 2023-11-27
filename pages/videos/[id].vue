<template>
  <div>
    <UButton
      icon="i-heroicons-pencil-square"
      size="sm"
      color="primary"
      variant="solid"
      label="Editar"
      :trailing="false"
      @click="openModal"
    />

    <UModal v-model="isOpen">
      <div class="p-4">
        <UForm
          :validate="validate"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormGroup label="Título" name="title">
            <UInput v-model="state.title" />
          </UFormGroup>

          <UFormGroup label="URL" name="url">
            <UInput v-model="state.url" type="url" />
          </UFormGroup>

          <UButton type="submit">Enviar</UButton>
        </UForm>
      </div>
    </UModal>
  </div>

  <UCard class="w-[800px] justify-center">
    <template #header>
      {{ video.title }}
    </template>

    <iframe
      class="h-[500px] w-full"
      :src="video.url"
      title="YouTube video player"
      frameborder="0"
    />
  </UCard>
  <UButton
    icon="i-heroicons-pencil-square"
    size="sm"
    variant="solid"
    label="Deletar"
    :trailing="false"
    @click="destroyVideo"
  />
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import type { Video } from "~/interfaces";

const isOpen = ref(false);

const route = useRoute();
const video = ref<Video>({} as Video);

onMounted(async () => {
  video.value = await $fetch(`/api/v1/videos/${route.params.id}`);
});

const router = useRouter();
const { $toast } = useNuxtApp();

const state = reactive({
  id: 0,
  title: "",
  url: "",
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.title) errors.push({ path: "title", message: "Required" });
  if (!state.url) errors.push({ path: "url", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  try {
    await $fetch(`/api/v1/videos/${route.params.id}`, {
      method: "PUT",
      body: state,
    });
    router.push("/videos");
    $toast.success("Vídeo atualizado com sucesso!");
    isOpen.value = false;
  } catch (error) {
    $toast.error("Erro ao atualizado o vídeo");
  }
}

const openModal = () => {
  state.title = video.value.title;
  state.url = video.value.url;
  state.id = video.value.id;
  isOpen.value = true;
};

const destroyVideo = async () => {
  try {
    await $fetch(`/api/v1/videos/${route.params.id}`, {
      method: "DELETE",
    });
    router.push("/videos");
    $toast.success("Vídeo deletado com sucesso!");
  } catch (error) {
    $toast.error("Erro ao deletado o vídeo");
  }
};
</script>

<style lang="scss" scoped></style>
