<template>
  <div class="p-6 sm:pt-16">

    <div v-for="player in player" class="card">
      <img :src="urlFor(player.cardImage)" alt="Player Image" class="card__image" />
      <div class="card__stats">
        <PlayerStats heading="PAC" :stats="player.statistics.pace" />
        <PlayerStats heading="SHO" :stats="player.statistics.shooting" />
        <PlayerStats heading="PAS" :stats="player.statistics.passing" />
        <PlayerStats heading="DRI" :stats="player.statistics.dribbling" />
        <PlayerStats heading="DEF" :stats="player.statistics.defense" />
        <PlayerStats heading="PHY" :stats="player.statistics.physical" />
      </div>
    </div>

    <div v-for="player in player" class="bio">
      <div class="bio__heading">
        <h1 class="bio__heading--name">{{ player.name }}</h1>
        <NuxtLink to="/players" class="bio__heading--redirect">View all cards</NuxtLink>
      </div>
      <ul class="bio__list">
        <PlayerBioItem title="Club" :detail="player.club" />
        <PlayerBioItem title="League" :detail="player.league" />
        <PlayerBioItem title="Nation" :detail="player.nation" />
        <PlayerBioItem title="Strong Foot" :detail="player.strongFoot" />
        <PlayerBioItem title="Age" :detail="player.age" />
        <PlayerBioItem title="Height" :detail="player.height" />
        <PlayerBioItem title="Workrates" :detail="player.workRatesAttacking + ' / ' + player.workRatesDefensive" />
      </ul>
    </div>

  </div>
</template>

<script>
import { client, getPlayer } from '../../../sanity-client/sanity';
import imageUrlBuilder from '@sanity/image-url';
import PlayerStats from '../../../components/PlayerStats.vue';
import PlayerBioItem from '../../../components/PlayerBioItem.vue';

const builder = imageUrlBuilder(client);

export default {
  components: {
    PlayerStats,
    PlayerBioItem,
  },
  async asyncData({ params }) {
    try {
      const player = await getPlayer(params.slug);
      return { player };
    } catch (error) {
      console.error('Error fetching player:', error);
      return { player: [] };
    }
  },
  methods: {
    urlFor(source) {
      return builder.image(source);
    },
  },
};
</script>

