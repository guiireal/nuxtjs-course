import { EventHandlerRequest, H3Event } from "h3";
import { Video } from "~/interfaces";
import { postgresClient } from "../utils";

const client = postgresClient();

export async function index() {
  const videos = await client.query<Video[]>("SELECT * FROM videos");

  return videos.rows;
}

export async function show(event: H3Event<EventHandlerRequest>) {
  const id = event.context.params?.id as string;
  const video = await client.query<Video>(
    "SELECT * FROM videos WHERE id = $1",
    [id]
  );

  return video.rows[0];
}

export async function store(event: H3Event<EventHandlerRequest>) {
  try {
    const { title, url } = await readBody<Video>(event);

    const video = await client.query<Video>(
      "INSERT INTO videos (title, url, created_at) VALUES ($1, $2, CURRENT_DATE) RETURNING *",
      [title, url]
    );

    return video.rows[0];
  } catch (error) {
    throw createError({
      status: 500,
      name: "Erro ao criar o vídeo!",
    });
  }
}

export async function update(event: H3Event<EventHandlerRequest>) {
  try {
    const id = event.context.params?.id as string;
    const { title, url } = await readBody<Video>(event);

    const video = await client.query<Video>(
      "UPDATE videos SET title = $1, url = $2 WHERE id = $3 RETURNING *",
      [title, url, id]
    );

    return video.rows[0];
  } catch (error) {
    throw createError({
      status: 500,
      name: "Erro ao atualizar o vídeo!",
    });
  }
}

export async function destroy(event: H3Event<EventHandlerRequest>) {
  try {
    const id = event.context.params?.id as string;

    await client.query("DELETE FROM videos WHERE id = $1", [id]);

    return { message: "Vídeo deletado com sucesso!" };
  } catch (error) {
    throw createError({
      status: 500,
      name: "Erro ao excluir o vídeo!",
    });
  }
}
