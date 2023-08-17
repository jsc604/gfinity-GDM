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
  const name = player.split("-");
  const formattedName = name.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1)
  );

  const firstName = formattedName[0];
  const lastName = formattedName[1];

  const fetchedPlayer = await client.fetch(
    `*[_type == "fifaCard" && name == "${firstName} ${lastName}" ]`
  );
  return fetchedPlayer;
}
