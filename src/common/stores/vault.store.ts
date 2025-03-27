import type { Vault } from "../models/vault.interface";

export const useCurrentVaultStore = defineStore("vault", () => {
  const authStore = useAuthStore();

  const currentVault = ref<Vault | null>(null);

  /**
   * Sets the current vault by its ID.
   *
   * @param vaultId - The unique identifier of the vault to set as the current vault.
   * @throws Will throw an error if the vault with the specified ID is not found.
   */
  const setCurrentVault = (vaultId: string) => {
    const vault = getVaultById(vaultId);
    if (vault) {
      currentVault.value = vault;
      return;
    }

    throw createError("Vault not found");
  };

  /**
   * Retrieves a vault by its unique identifier.
   *
   * @param vaultId - The unique identifier of the vault to retrieve.
   * @returns The vault object if found, or `undefined` if no vault with the given ID exists.
   */
  const getVaultById = (vaultId: string): Vault | undefined => {
    return authStore.userData?.vaults.find((vault) => vault.id === vaultId);
  };

  return { currentVault, setCurrentVault, getVaultById };
});
