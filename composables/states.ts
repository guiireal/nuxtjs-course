import type { Video } from "~/interfaces";

export function useFavorites() {
  return useState<Video[]>("favorites", () => []);
}
