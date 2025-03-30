<script setup lang="ts">
import logo from "@images/logo.svg?raw";
</script>

<template>
  <NuxtLink to="/" class="d-flex align-center gap-3">
    <!-- eslint-disable vue/no-v-html -->
    <div class="d-flex" v-html="logo" />
    <h2 class="font-weight-medium text-2xl text-uppercase">Colab Notes</h2>
  </NuxtLink>
</template>
