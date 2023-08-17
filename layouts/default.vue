<template>
  <div>
    <Header />
    <div class="max-w-[1024px] mx-auto bg-black">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';

export default {
  components: {
    Header,
  },
}
</script>
