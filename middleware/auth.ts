export default defineNuxtRouteMiddleware((to) => {
  const logged = true;

  if (to.path !== "/login" && !logged) {
    return navigateTo("/login");
  }
});
