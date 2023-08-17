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
  </div>
</template>

<script>
import { client, getPlayer } from '../../../sanity-client/sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export default {
  async asyncData({ params }) {
    try {
      const player = await getPlayer(params.name);
      console.log('player: ', player);
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

