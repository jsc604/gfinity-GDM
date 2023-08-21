<template>
  <div class="table-container">
    <table class="table mt-12 mb-24">
      <thead>
        <tr class="table__header">
          <th class="table__header--name" @click="sortByName('name')">
            Name
            <TableHeaderIcon column="name" :sortColumn="sortColumn" :isAscending="isAscending" />
          </th>
          <th class="table__header--stat" @click="sortByNumber('rating')">
            OVR
            <TableHeaderIcon column="rating" :sortColumn="sortColumn" :isAscending="isAscending" />
          </th>
          <th class="table__header--stat" @click="sortByName('position')">
            POS
            <TableHeaderIcon column="position" :sortColumn="sortColumn" :isAscending="isAscending" />
          </th>
          <th class="table__header--stat" @click="sortByName('cardType')">
            Type
            <TableHeaderIcon column="cardType" :sortColumn="sortColumn" :isAscending="isAscending" />
          </th>
          <th class="table__header--stat" @click="sortByNumber('pace')">
            PAC
            <TableHeaderIcon column="pace" :sortColumn="sortColumn" :isAscending="isAscending" />
          </th>
          <th class="table__header--stat" @click="sortByNumber('shooting')">
            SHO
            <TableHeaderIcon column="shooting" :sortColumn="sortColumn" :isAscending="isAscending" />
          </th>
          <th class="table__header--stat" @click="sortByNumber('passing')">
            PAS
            <TableHeaderIcon column="passing" :sortColumn="sortColumn" :isAscending="isAscending" />
          </th>
          <th class="table__header--stat" @click="sortByNumber('dribbling')">
            DRI
            <TableHeaderIcon column="dribbling" :sortColumn="sortColumn" :isAscending="isAscending" />
          </th>
          <th class="table__header--stat" @click="sortByNumber('defense')">
            DEF
            <TableHeaderIcon column="defense" :sortColumn="sortColumn" :isAscending="isAscending" />
          </th>
          <th class="table__header--stat" @click="sortByNumber('physical')">
            PHY
            <TableHeaderIcon column="physical" :sortColumn="sortColumn" :isAscending="isAscending" />
          </th>
          <th class="table__header--stat" @click="sortByTwoKeys('workRatesAttacking', 'workRatesDefensive')">
            WR
            <TableHeaderIcon column="workRates" :sortColumn="sortColumn" :isAscending="isAscending" />
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
import { sortByName } from '../../helpers/sortByName.ts';
import { sortByNumber } from '../../helpers/sortByNumber.ts';
import { sortByTwoKeys } from '../../helpers/sortByTwoKeys.ts';

export default {
  data() {
    return {
      players: [],
      isAscending: true,
      sortColumn: '',
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
      this.sortColumn = key;
    },
    sortByNumber(key) {
      this.players = sortByNumber(this.players, this.isAscending, key);
      this.isAscending = !this.isAscending;
      this.sortColumn = key;
    },
    sortByTwoKeys(key1, key2) {
      this.players = sortByTwoKeys(this.players, this.isAscending, key1, key2);
      this.isAscending = !this.isAscending;
      this.sortColumn = 'workRates';
    },
  },
};
</script>

