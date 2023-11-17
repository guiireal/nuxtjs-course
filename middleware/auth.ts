export default defineNuxtRouteMiddleware((to, from) => {
  const logged = false;

  if (to.path !== "/login" && !logged) {
    return navigateTo("/login");
  }
});
