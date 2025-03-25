import type { Vault } from "./vault.interface";

export interface UserData {
  id: string;
  name: string;
  email: string;
  vaults: Vault[];
}

export interface Collaborator {
  id: string;
  name: string;
  email: string;
  role: string;
}
