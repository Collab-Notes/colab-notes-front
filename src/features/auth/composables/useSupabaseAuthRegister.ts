import type { AsyncDataRequestStatus } from "nuxt/app";

/**
 * provides authentication actions for user registration, login, and logout
 */
export function useSupabaseAuthRegister() {
  const supabase = useSupabaseClient();

  const error = ref<string | null>(null);
  const status = ref<AsyncDataRequestStatus>("idle");

  const register = async (email: string, password: string) => {
    if (status.value === "pending") return;

    status.value = "pending";

    const siteUrl = useGetSiteUrl();

    const { error: supabaseError, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${siteUrl}/confirm`,
      },
    });

    // TODO: create register in db
    // await authRepository.createNewUser(result.user.uid, email);

    if (supabaseError) {
      status.value = "error";
      error.value = parseSupabaseAuthError(supabaseError);
    } else if (data?.user) {
      status.value = "success";
      await supabase.from("users").insert({
        email,
        owner_id: data.user.id,
        created_at: new Date(),
      });
    }
  };

  return {
    register,
    error,
    status,
  };
}
