import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "21fy9g0s",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});

export async function getPlayers() {
  const posts = await client.fetch('*[_type == "fifaCard"]');
  return posts;
}

export async function getPlayer(player: string) {
  const fetchedPlayer = await client.fetch(
    `*[_type == "fifaCard" && slug.current == "${player}" ]`
  );
  return fetchedPlayer;
}
