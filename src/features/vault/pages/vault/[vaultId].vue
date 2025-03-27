<script setup lang="ts">
const authStore = useAuthStore();
const currentVaultStore = useCurrentVaultStore();

const { vaultId } = useRoute().params;
const { userData: user } = storeToRefs(authStore);

currentVaultStore.setCurrentVault(vaultId as string);

const vault = currentVaultStore.currentVault;

if (!vault) {
  showError({
    statusCode: 404,
    message: "Vault not found",
  });
}
</script>

<template>
  <section v-if="user && vault">
    <header>
      <h2 class="text-center">Bienvenido {{ user.name }}</h2>
      <hr />
      <section class="flex">
        <h1>{{ vault.name }}</h1>
        <div class="ml-auto flex gap-4 text-lg font-semibold">
          <span>{{ vault.notes.length }} notas</span>
          <span>{{ vault.collaborators.length }} colaboradores</span>
        </div>
      </section>
    </header>
    <main></main>
  </section>
  <p v-else>Loading...</p>
</template>
