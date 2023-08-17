<template>
  <div class="p-6 sm:pt-16">
    <div v-for="player in player" :key="player._id" class="bg-[#161616] rounded-xl flex flex-col sm:flex-row">
      <img :src="urlFor(player.cardImage)" alt="Post Image" class="w-[182px] h-auto object-contain mb-auto mx-auto" />

      <div class="grid grid-cols-3 lg:grid-cols-6 sm:w-full mx-2 sm:mx-8 gap-4">

        <div class="col-span-1 flex flex-col space-y-4 my-4 w-full">
          <div class="border-y-2 flex justify-between">PAC <span>{{ player.statistics.pace.average }}</span></div>
          <div v-for="(value, key) in player.statistics.pace" v-if="key !== 'average'" :key="key"
            class="text-xs flex justify-between">
            {{ formatCamelCaseToTitleCase(key) }} <span>{{ value }}</span>
          </div>
        </div>

        <div class="col-span-1 flex flex-col space-y-4 my-4 w-full">
          <div class="border-y-2 flex justify-between">SHO <span>{{ player.statistics.shooting.average }}</span></div>
          <div v-for="(value, key) in player.statistics.shooting" v-if="key !== 'average'" :key="key"
            class="text-xs flex justify-between">
            {{ formatCamelCaseToTitleCase(key) }} <span>{{ value }}</span>
          </div>
        </div>

        <div class="col-span-1 flex flex-col space-y-4 my-4 w-full">
          <div class="border-y-2 flex justify-between">PAS <span>{{ player.statistics.passing.average }}</span></div>
          <div v-for="(value, key) in player.statistics.passing" v-if="key !== 'average'" :key="key"
            class="text-xs flex justify-between">
            {{ formatCamelCaseToTitleCase(key) }} <span>{{ value }}</span>
          </div>
        </div>

        <div class="col-span-1 flex flex-col space-y-4 my-4 w-full">
          <div class="border-y-2 flex justify-between">DRI <span>{{ player.statistics.dribbling.average }}</span></div>
          <div v-for="(value, key) in player.statistics.dribbling" v-if="key !== 'average'" :key="key"
            class="text-xs flex justify-between">
            {{ formatCamelCaseToTitleCase(key) }} <span>{{ value }}</span>
          </div>
        </div>

        <div class="col-span-1 flex flex-col space-y-4 my-4 w-full">
          <div class="border-y-2 flex justify-between">DEF <span>{{ player.statistics.defense.average }}</span></div>
          <div v-for="(value, key) in player.statistics.defense" v-if="key !== 'average'" :key="key"
            class="text-xs flex justify-between">
            {{ formatCamelCaseToTitleCase(key) }} <span>{{ value }}</span>
          </div>
        </div>

        <div class="col-span-1 flex flex-col space-y-4 my-4 w-full">
          <div class="border-y-2 flex justify-between">PHY <span>{{ player.statistics.physical.average }}</span></div>
          <div v-for="(value, key) in player.statistics.physical" v-if="key !== 'average'" :key="key"
            class="text-xs flex justify-between">
            {{ formatCamelCaseToTitleCase(key) }} <span>{{ value }}</span>
          </div>
        </div>

      </div>
    </div>

    <div v-for="player in player" :key="player._id" class="my-4">
      <div class="flex gap-2 sm:items-end flex-col sm:flex-row">
        <h1 class="text-3xl">{{ player.name }}</h1>
        <NuxtLink to="/players" class="text-[#848282] text-sm underline decoration-dotted">View all cards</NuxtLink>
      </div>

      <ul class="flex flex-col sm:flex-row mt-8 justify-between">
        <li class="flex justify-between max-sm:border-b sm:border-l border-[#848282] sm:px-4 max-sm:py-4 sm:flex-col sm:space-y-4">
          <div class="text-[#848282]">Club</div>
          <div class="font-light">{{ player.club }}</div>
        </li>
        <li class="flex justify-between max-sm:border-b sm:border-l border-[#848282] sm:px-4 max-sm:py-4 sm:flex-col sm:space-y-4">
          <div class="text-[#848282]">League</div>
          <div class="font-light">{{ player.league }}</div>
        </li>
        <li class="flex justify-between max-sm:border-b sm:border-l border-[#848282] sm:px-4 max-sm:py-4 sm:flex-col sm:space-y-4">
          <div class="text-[#848282]">Nation</div>
          <div class="font-light">{{ player.nation }}</div>
        </li>
        <li class="flex justify-between max-sm:border-b sm:border-l border-[#848282] sm:px-4 max-sm:py-4 sm:flex-col sm:space-y-4">
          <div class="text-[#848282]">Strong Foot</div>
          <div class="font-light">{{ formatCamelCaseToTitleCase(player.strongFoot) }}</div>
        </li>
        <li class="flex justify-between max-sm:border-b sm:border-l border-[#848282] sm:px-4 max-sm:py-4 sm:flex-col sm:space-y-4">
          <div class="text-[#848282]">Age</div>
          <div class="font-light">{{ player.age }}</div>
        </li>
        <li class="flex justify-between max-sm:border-b sm:border-l border-[#848282] sm:px-4 max-sm:py-4 sm:flex-col sm:space-y-4">
          <div class="text-[#848282]">Height</div>
          <div class="font-light">{{ player.height }}</div>
        </li>
        <li class="flex justify-between max-sm:border-b sm:border-l border-[#848282] sm:px-4 max-sm:py-4 sm:flex-col sm:space-y-4">
          <div class="text-[#848282]">Workrates</div>
          <div class="font-light">{{ player.workRatesAttacking }} / {{ player.workRatesDefensive }}</div>
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

