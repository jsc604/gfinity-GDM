<template>
  <header class="header">
    <div class="header__container">
      <nav class="header__nav">
        <button class="header__button">
          <MenuIcon />
        </button>
      </nav>
      <NuxtLink to="/" class="header__logo p-5">
        <img src="../assets/icons/RS-logo.png" alt="Logo" class="header__logo" />
      </NuxtLink>
    </div>
  </header>
</template>

<script>
import MenuIcon from '~/assets/icons/MenuIcon.vue';

export default {
  components: {
    MenuIcon,
  },
}
</script>
