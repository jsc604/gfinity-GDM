<template>
  <div>
    <SortIcon class="ml-1" v-if="sortColumn !== column" />
    <UpArrowIcon class="ml-1" v-if="sortColumn === column && !isAscending" />
    <DownArrowIcon class="ml-1" v-if="sortColumn === column && isAscending" />
  </div>
</template>

<script>
import SortIcon from '~/assets/icons/SortIcon.vue';
import UpArrowIcon from '~/assets/icons/UpArrowIcon.vue';
import DownArrowIcon from '~/assets/icons/DownArrowIcon.vue';

export default {
  components: {
    SortIcon,
    DownArrowIcon,
    UpArrowIcon,
  },
  props: {
    column: String,
    sortColumn: String,
    isAscending: Boolean,
  },
}
</script>
