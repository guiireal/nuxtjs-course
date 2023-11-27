import { Video } from "~/interfaces";

export default defineEventHandler(() => {
  const videos: Video[] = [
    {
      id: 1,
      title: "01 - Introdução e Instalação",
      url: "https://www.youtube.com/embed/WahQ5AoXpuU?si=F2FrXqWjB1dtJvGw",
      created_at: "2023-10-15",
    },
    {
      id: 2,
      title: "02 - Configuração",
      url: "https://www.youtube.com/embed/JbbB84bnPog?si=mKtXqUkTKCuNHqjJ",
      created_at: "2023-10-20",
    },
    {
      id: 3,
      title: "03 - Pages",
      url: "https://www.youtube.com/embed/S99sVicr8NI?si=jR8Y0QLVVLoQA7mX",
      created_at: "2023-10-10",
    },
    {
      id: 4,
      title: "04 - Components",
      url: "https://www.youtube.com/embed/cCHWanw49l8?si=i7569DvWVVtto-Ja",
      created_at: "2023-10-05",
    },
  ];

  return {
    videos,
  };
});
