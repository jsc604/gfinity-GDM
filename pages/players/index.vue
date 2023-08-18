<template>
  <div class="table-container">
    <table class="table mt-12 mb-24">
      <thead>
        <tr class="table__header">
          <th class="table__header--name" @click="sortByName('name')">
            Name
            <SortIcon class="ml-1" />
          </th>
          <th class="table__header--stat" @click="sortByNumber('rating')">
            OVR
            <SortIcon class="ml-1" />
          </th>
          <th class="table__header--stat" @click="sortByName('position')">
            POS
            <SortIcon class="ml-1" />
          </th>
          <th class="table__header--stat" @click="sortByName('cardType')">
            Type
            <SortIcon class="ml-1" />
          </th>
          <th class="table__header--stat" @click="sortByNumber('pace')">
            PAC
            <SortIcon class="ml-1" />
          </th>
          <th class="table__header--stat" @click="sortByNumber('shooting')">
            SHO
            <SortIcon class="ml-1" />
          </th>
          <th class="table__header--stat" @click="sortByNumber('passing')">
            PAS
            <SortIcon class="ml-1" />
          </th>
          <th class="table__header--stat" @click="sortByNumber('dribbling')">
            DRI
            <SortIcon class="ml-1" />
          </th>
          <th class="table__header--stat" @click="sortByNumber('defense')">
            DEF
            <SortIcon class="ml-1" />
          </th>
          <th class="table__header--stat" @click="sortByNumber('physical')">
            PHY
            <SortIcon class="ml-1" />
          </th>
          <th class="table__header--stat" @click="sortByTwoKeys('workRatesAttacking', 'workRatesDefensive')">
            WR
            <SortIcon class="ml-1" />
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="player in players" :key="player._id" class="table__cell bg-[#101010]">
          <TableCell dataType="link" :to="`/players/${player.slug.current}`" :content="player.name" />
          <TableCell dataType="overall" :content="player.rating" />
          <TableCell dataType="position" :content="player.position" />
          <TableCell dataType="position" :content="player.cardType" />
          <TableCell dataType="stat" :content="player.statistics.pace.average" />
          <TableCell dataType="stat" :content="player.statistics.shooting.average" />
          <TableCell dataType="stat" :content="player.statistics.passing.average" />
          <TableCell dataType="stat" :content="player.statistics.dribbling.average" />
          <TableCell dataType="stat" :content="player.statistics.defense.average" />
          <TableCell dataType="stat" :content="player.statistics.physical.average" />
          <TableCell dataType="position"
            :content="player.workRatesAttacking.charAt(0) + ' / ' + player.workRatesDefensive.charAt(0)" />
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
import { getPlayers } from '../../sanity-client/sanity';
import SortIcon from '../../assets/icons/SortIcon';
import { sortByName } from '../../helpers/sortByName.ts';
import { sortByNumber } from '../../helpers/sortByNumber.ts';
import { sortByTwoKeys } from '../../helpers/sortByTwoKeys.ts';

export default {
  components: {
    SortIcon,
  },
  data() {
    return {
      players: [],
      isAscending: true,
    };
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
  methods: {
    sortByName(key) {
      this.players = sortByName(this.players, this.isAscending, key);
      this.isAscending = !this.isAscending;
    },
    sortByNumber(key) {
      this.players = sortByNumber(this.players, this.isAscending, key);
      this.isAscending = !this.isAscending;
    },
    sortByTwoKeys(key1, key2) {
      this.players = sortByTwoKeys(this.players, this.isAscending, key1, key2);
      this.isAscending = !this.isAscending;
    },
  },
};
</script>

