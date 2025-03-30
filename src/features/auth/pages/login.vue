<script setup lang="ts">
import { useTheme } from "vuetify";

import authV1MaskDark from "@images/pages/auth-v1-mask-dark.png";
import authV1MaskLight from "@images/pages/auth-v1-mask-light.png";
import authV1Tree2 from "@images/pages/auth-v1-tree-2.png";
import authV1Tree from "@images/pages/auth-v1-tree.png";

definePageMeta({
  layout: "blank",
  public: true,
  /**  require by middleware to not showing this page if user is authenticated @see "@/middleware/01.auth.global.ts" */
  unauthenticatedOnly: true,
});

useHead({
  title: "Iniciar sesión",
  meta: [
    {
      name: "description",
      content: "Página de autenticación",
    },
  ],
});

const vuetifyTheme = useTheme();

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === "light"
    ? authV1MaskLight
    : authV1MaskDark;
});

definePageMeta({ layout: "blank" });
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->

  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard class="auth-card pa-4 pt-7" max-width="448">
      <VCardItem class="justify-center">
        <ColabNotesLogo1 />
      </VCardItem>

      <VCardText class="pt-2">
        <h4 class="text-h4 mb-1">Bienvenido! 👋🏻</h4>
        <p class="mb-0">Inicia sesión con tu cuenta para continuar</p>
      </VCardText>

      <VCardText>
        <LoginForm />
      </VCardText>
    </VCard>

    <VImg
      class="auth-footer-start-tree d-none d-md-block"
      :src="authV1Tree"
      :width="250"
    />

    <VImg
      :src="authV1Tree2"
      class="auth-footer-end-tree d-none d-md-block"
      :width="350"
    />

    <!-- bg img -->
    <VImg class="auth-footer-mask d-none d-md-block" :src="authThemeMask" />
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth";
</style>
