import type { SupabaseClient } from "~/app-core/plugins/1.supabase-client";

export class AuthRepository {
  constructor(private client: SupabaseClient) {}

  async createNewUser(userInfo: {
    userId: string;
    email: string;
    name: string;
  }) {
    return await this.client.from("users").insert({
      id: userInfo.userId,
      email: userInfo.email,
      name: userInfo.name,
      created_at: new Date().toISOString(),
    });
  }

  getUserById(userId: string) {
    return this.client.from("users").select().eq("id", userId).single();
  }

  // TODO: should I also encapusulate auth supabase methods? or is unnecessary?
  //   async signUp(email: string, password: string) {
  //     return await this.client.auth.signUp({
  //       email,
  //       password,
  //       options: {
  //         emailRedirectTo: `${siteUrl}/confirm`,
  //       },
  //     });
  //   }

  //   async signOut() {
  //     return await this.client.auth.signOut();
  //   }
}
