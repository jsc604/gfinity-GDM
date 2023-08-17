<template>
  <div class="p-6 sm:pt-16">
    <div v-for="player in player" :key="player._id" class="card">
      <img :src="urlFor(player.cardImage)" alt="Player Image" class="card__image" />

      <div class="card__stats">

        <div class="stats">
          <div class="stats__heading">PAC <span>{{ player.statistics.pace.average }}</span></div>
          <div v-for="(value, key) in player.statistics.pace" v-if="key !== 'average'" :key="key" class="stats__item">
            {{ formatCamelCaseToTitleCase(key) }} <span>{{ value }}</span>
          </div>
        </div>

        <div class="stats">
          <div class="stats__heading">SHO <span>{{ player.statistics.shooting.average }}</span></div>
          <div v-for="(value, key) in player.statistics.shooting" v-if="key !== 'average'" :key="key" class="stats__item">
            {{ formatCamelCaseToTitleCase(key) }} <span>{{ value }}</span>
          </div>
        </div>

        <div class="stats">
          <div class="stats__heading">PAS <span>{{ player.statistics.passing.average }}</span></div>
          <div v-for="(value, key) in player.statistics.passing" v-if="key !== 'average'" :key="key" class="stats__item">
            {{ formatCamelCaseToTitleCase(key) }} <span>{{ value }}</span>
          </div>
        </div>

        <div class="stats">
          <div class="stats__heading">DRI <span>{{ player.statistics.dribbling.average }}</span></div>
          <div v-for="(value, key) in player.statistics.dribbling" v-if="key !== 'average'" :key="key"
            class="stats__item">
            {{ formatCamelCaseToTitleCase(key) }} <span>{{ value }}</span>
          </div>
        </div>

        <div class="stats">
          <div class="stats__heading">DEF <span>{{ player.statistics.defense.average }}</span></div>
          <div v-for="(value, key) in player.statistics.defense" v-if="key !== 'average'" :key="key" class="stats__item">
            {{ formatCamelCaseToTitleCase(key) }} <span>{{ value }}</span>
          </div>
        </div>

        <div class="stats">
          <div class="stats__heading">PHY <span>{{ player.statistics.physical.average }}</span></div>
          <div v-for="(value, key) in player.statistics.physical" v-if="key !== 'average'" :key="key" class="stats__item">
            {{ formatCamelCaseToTitleCase(key) }} <span>{{ value }}</span>
          </div>
        </div>

      </div>
    </div>

    <div v-for="player in player" :key="player._id" class="bio">
      <div class="bio__heading">
        <h1 class="bio__heading--name">{{ player.name }}</h1>
        <NuxtLink to="/players" class="bio__heading--redirect">View all cards</NuxtLink>
      </div>

      <ul class="bio__list">
        <li class="bio__item">
          <div class="bio__item--title">Club</div>
          <div class="bio__item--detail">{{ player.club }}</div>
        </li>
        <li class="bio__item">
          <div class="bio__item--title">League</div>
          <div class="bio__item--detail">{{ player.league }}</div>
        </li>
        <li class="bio__item">
          <div class="bio__item--title">Nation</div>
          <div class="bio__item--detail">{{ player.nation }}</div>
        </li>
        <li class="bio__item">
          <div class="bio__item--title">Strong Foot</div>
          <div class="bio__item--detail">{{ formatCamelCaseToTitleCase(player.strongFoot) }}</div>
        </li>
        <li class="bio__item">
          <div class="bio__item--title">Age</div>
          <div class="bio__item--detail">{{ player.age }}</div>
        </li>
        <li class="bio__item">
          <div class="bio__item--title">Height</div>
          <div class="bio__item--detail">{{ player.height }}</div>
        </li>
        <li class="bio__item">
          <div class="bio__item--title">Workrates</div>
          <div class="bio__item--detail">{{ player.workRatesAttacking }} / {{ player.workRatesDefensive }}</div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import { client, getPlayer } from '../../../sanity-client/sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export default {
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
    formatCamelCaseToTitleCase(input) {
      const formatted = input.replace(/([A-Z])/g, ' $1');
      return formatted.charAt(0).toUpperCase() + formatted.slice(1).trim();
    }
  },
};
</script>

