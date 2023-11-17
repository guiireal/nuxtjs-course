export default defineNuxtRouteMiddleware((to, from) => {
  const id = +to.params.id;

  if (isNaN(id) || id < 1) {
    return navigateTo("/videos");
  }
});
