<script setup lang="ts">
import { getNaturalDateObject } from "~/common/utils/formatteDate";
import UserInfoCard from "../../components/UserInfoCard.vue";

const authStore = useAuthStore();
const currentVaultStore = useCurrentVaultStore();

const { vaultId } = useRoute().params as { vaultId: string };
const { userData: user } = storeToRefs(authStore);

// Set current vault
currentVaultStore.setCurrentVault(vaultId as string);

const vault = currentVaultStore.currentVault;

// Handle vault not found
if (!vault) {
  showError({
    statusCode: 404,
    message: "Vault not found",
  });
}
</script>

<template>
  <VContainer v-if="user && vault">
    <VRow>
      <VCol>
        <h2 class="text-h3 text-center mb-5">
          Bienvenido <strong>{{ user.name }}</strong>
        </h2>
      </VCol>
    </VRow>

    <VCard class="mt-4 py-3">
      <VCardTitle class="text-h5">
        {{ vault.name }}
        <div class="float-right">
          <VChip class="mr-2">{{ vault.notes.length }} notas</VChip>
          <VChip>{{ vault.collaborators.length }} colaboradores</VChip>
        </div>
      </VCardTitle>
    </VCard>
    <VCard class="mt-4">
      <VCardText>
        <div>
          <VTextField
            label="Buscar notas"
            prepend-inner-icon="ri-search-line"
            variant="outlined"
            class="my-4"
          ></VTextField>
        </div>
        <VList
          v-if="vault.notes.length > 0"
          class="pa-0 border-t-thin py-3"
          density="compact"
        >
          <NoteInfoCard
            v-for="(note, index) in vault.notes"
            :key="index"
            :title="note.title || `Nota ${index + 1}`"
            :creted-at="getNaturalDateObject(note.created_at)"
          />
        </VList>
        <VBtn color="primary" variant="text" class="float-right mb-4"
          >Ver más</VBtn
        >
      </VCardText>
    </VCard>
    <VCard class="mt-4">
      <VCardText>
        <div>
          <VTextField
            label="Buscar colaboradores"
            prepend-inner-icon="ri-search-line"
            variant="outlined"
            class="my-4"
          ></VTextField>
        </div>
        <VList
          v-if="vault.collaborators.length > 0"
          class="pa-0 mt-5 border-t-thin py-3"
          density="compact"
        >
          <UserInfoCard
            v-for="(collaborator, index) in vault.collaborators"
            :key="index"
            :name="collaborator.name"
            :email="collaborator.email"
          />
        </VList>
      </VCardText>
    </VCard>
  </VContainer>
</template>
