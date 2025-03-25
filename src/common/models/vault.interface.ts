import type { Note } from "./note.interface";
import type { Collaborator } from "./user.interface";

export interface Vault {
  id: string;
  name: string;
  notes: Note[];
  collaborators: Collaborator[];
}
