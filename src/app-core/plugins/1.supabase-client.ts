import type { Database } from "~/common/models/database.types";

/**
 * Export nuxt supabase client
 */
export default defineNuxtPlugin(() => {
  const supabase = useSupabaseClient<Database>();

  return {
    provide: {
      supabaseClient: supabase,
    },
  };
});

export type SupabaseClient = ReturnType<typeof useSupabaseClient<Database>>;
//export type Note = Database["public"]["Tables"]["notes"]["Row"];
