<script lang="ts" setup>
import DefaultLayoutWithVerticalNav from "./components/DefaultLayoutWithVerticalNav.vue";
</script>

<template>
  <DefaultLayoutWithVerticalNav>
    <slot />
  </DefaultLayoutWithVerticalNav>
</template>

<style lang="scss">
// As we are using `layouts` plugin we need its styles to be imported
@use "@layouts/styles/default-layout";
</style>
