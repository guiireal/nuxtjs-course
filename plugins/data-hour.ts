export default defineNuxtPlugin(({ vueApp }) => {
  const formatDate = (date: Date, type: string = "") => {
    switch (type) {
      case "dd/mm/aaaa":
        return date.toLocaleDateString("pt-BR");
      case "hh:mm":
        return date.toLocaleTimeString("pt-BR");
      default:
        return date.toLocaleString("pt-BR");
    }
  };

  vueApp.directive("date-hour", {
    mounted(el, binding) {
      const formattedDate = new Date(el.innerText);
      el.innerHTML = formatDate(formattedDate, binding.value);
    },
  });
});
