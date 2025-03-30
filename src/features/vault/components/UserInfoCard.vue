<script setup lang="ts">
import { getAvatarUrl } from "~/common/utils/getAvatarUrl";

defineProps<{
  name: string;
  email: string;
}>();
</script>

<template>
  <VCard
    class="mb-5 pa-4"
    variant="outlined"
    color="primary"
    border="opacity-50 sm"
    rounded="lg"
  >
    <VRow no-gutters>
      <VCol cols="auto">
        <VAvatar size="64" :image="getAvatarUrl(name)"></VAvatar>
      </VCol>
      <VCol class="d-flex flex-column justify-center ml-4">
        <div class="text-h6">{{ name || "User Name" }}</div>
        <div class="text-subtitle-2 text-medium-emphasis">
          {{ email || "email@example.com" }}
        </div>
      </VCol>
    </VRow>
  </VCard>
</template>
