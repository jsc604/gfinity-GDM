<template>
  <td :class="cellClass">
    <div v-if="dataType === 'link'">
      <NuxtLink :to="to">
        {{ content }}
      </NuxtLink>
    </div>
    <div v-else>
      <div :class="dataType">
        {{ content }}
      </div>
    </div>
  </td>
</template>

<script>
export default {
  props: {
    dataType: String,
    to: String,
    content: [String, Number]
  },
  computed: {
    cellClass() {
      if (this.dataType === 'link') {
        return "table__cell--name";
      }
      return "table__cell--stat";
    }
  },
};
</script>
