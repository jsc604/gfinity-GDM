<template>
  <li class="bio__item">
    <div class="bio__item--title">{{ title }}</div>
    <div class="bio__item--detail">{{ formattedDetail }}</div>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
    detail: String,
  },
  computed: {
    formattedDetail() {
      if (this.title === 'Strong Foot') {
        return this.formatCamelCaseToTitleCase(this.detail);
      }
      return this.detail;
    }
  },
  methods: {
    formatCamelCaseToTitleCase(input) {
      const formatted = input.replace(/([A-Z])/g, ' $1');
      return formatted.charAt(0).toUpperCase() + formatted.slice(1).trim();
    }
  },
};
</script>
