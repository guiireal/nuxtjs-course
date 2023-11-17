export default defineNuxtRouteMiddleware((to) => {
  const id = +to.params.id;

  if (isNaN(id) || id < 1) {
    return navigateTo("/videos");
  }
});
