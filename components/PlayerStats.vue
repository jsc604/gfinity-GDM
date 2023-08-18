<template>
  <div class="stats">
    <div class="stats__heading">{{ heading }} <span>{{ stats.average }}</span></div>
    <div v-for="(value, key) in stats" v-if="key !== 'average'" :key="key" class="stats__item">
      {{ formatCamelCaseToTitleCase(key) }} <span>{{ value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    stats: Object,
  },
  methods: {
    formatCamelCaseToTitleCase(input) {
      const formatted = input.replace(/([A-Z])/g, ' $1');
      return formatted.charAt(0).toUpperCase() + formatted.slice(1).trim();
    }
  },
};
</script>
