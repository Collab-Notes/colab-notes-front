<script setup lang="ts">
import type { NaturalDateObjectType } from "~/common/utils/formatteDate";

defineProps<{
  title: string;
  cretedAt: NaturalDateObjectType;
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
      <VCol class="d-flex justify-between">
        <span class="text-h6">{{ title || "User Name" }}</span>
        <time
          :datetime="cretedAt.iso"
          class="text-subtitle-2 text-medium-emphasis"
          >{{ cretedAt.formatted }}</time
        >
      </VCol>
    </VRow>
  </VCard>
</template>
