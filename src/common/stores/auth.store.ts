import type { UserData } from "../models/user.interface";

export const useAuthStore = defineStore("auth", () => {
  const userData = ref<UserData | null>({
    id: "uuid-789",
    name: "Charlie",
    email: "charlie@example.com",
    vaults: [
      {
        id: "vault-123",
        name: "Work Notes",
        notes: [
          {
            id: "note-1",
            title: "Meeting Notes",
            created_at: "2024-03-08T15:00:00Z",
          },
        ],
        collaborators: [
          {
            id: "user-1",
            name: "Alice",
            email: "alice@example.com",
            role: "admin",
          },
          {
            id: "user-2",
            name: "Bob",
            email: "bob@example.com",
            role: "collaborator",
          },
        ],
      },
    ],
  });

  return { userData };
});
