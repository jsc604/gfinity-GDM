<template>
  <div class="table-container">
    <table class="table mt-12 mb-24">
      <thead>
        <tr class="table__header">
          <th class="table__header--name">Name<SortIcon class="ml-1" /></th>
          <th class="table__header--stat">OVR<SortIcon class="ml-1" /></th>
          <th class="table__header--stat">POS<SortIcon class="ml-1" /></th>
          <th class="table__header--stat">Type<SortIcon class="ml-1" /></th>
          <th class="table__header--stat">PAC<SortIcon class="ml-1" /></th>
          <th class="table__header--stat">SHO<SortIcon class="ml-1" /></th>
          <th class="table__header--stat">PAS<SortIcon class="ml-1" /></th>
          <th class="table__header--stat">DRI<SortIcon class="ml-1" /></th>
          <th class="table__header--stat">DEF<SortIcon class="ml-1" /></th>
          <th class="table__header--stat">PHY<SortIcon class="ml-1" /></th>
          <th class="table__header--stat">WR<SortIcon class="ml-1" /></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="player in players" :key="player._id" class="table__cell bg-[#101010]">
          <td class="table__cell--name">
            <NuxtLink :to="`/players/${player.slug.current}`">
              {{ player.name }}
            </NuxtLink>
          </td>
          <td class="table__cell--stat">
            <div class="overall">{{ player.rating }}</div>
          </td>
          <td class="table__cell--stat">
            <div class="position">
              {{ player.position }}
            </div>
          </td>
          <td class="table__cell--stat">
            <div class="position">
              {{ player.cardType }}
            </div>
          </td>
          <td class="table__cell--stat">
            <div class="stat">
              {{ player.statistics.pace.average }}
            </div>
          </td>
          <td class="table__cell--stat">
            <div class="stat">
              {{ player.statistics.shooting.average }}
            </div>
          </td>
          <td class="table__cell--stat">
            <div class="stat">
              {{ player.statistics.passing.average }}
            </div>
          </td>
          <td class="table__cell--stat">
            <div class="stat">
              {{ player.statistics.dribbling.average }}
            </div>
          </td>
          <td class="table__cell--stat">
            <div class="stat">
              {{ player.statistics.defense.average }}
            </div>
          </td>
          <td class="table__cell--stat">
            <div class="stat">
              {{ player.statistics.physical.average }}
            </div>
          </td>
          <td class="table__cell--stat">
            <div class="position">
              {{ player.workRatesAttacking.charAt(0) }} \ {{ player.workRatesDefensive.charAt(0) }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getPlayers } from '../../sanity-client/sanity';
import SortIcon from '../../assets/icons/SortIcon';

export default {
  components: {
    SortIcon,
  },
  async asyncData() {
    try {
      const players = await getPlayers();
      return { players };
    } catch (error) {
      console.error('Error fetching players:', error);
      return { players: [] };
    }
  },
};
</script>

