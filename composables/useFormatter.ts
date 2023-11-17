export default function useFormatter() {
  const diffInDays = ref(0);

  const pastDays = (date: Date) => {
    const currentDate = new Date().getTime();
    const diffInMilliSeconds = currentDate - date.getTime();

    diffInDays.value = Math.floor(diffInMilliSeconds / (1000 * 60 * 60 * 24));
  };

  return {
    pastDays,
    diffInDays,
  };
}
