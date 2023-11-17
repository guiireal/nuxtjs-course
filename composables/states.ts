import type { Video } from "~/interfaces";

export const useFavorites = () => useState<Video[]>("favorites", () => []);
