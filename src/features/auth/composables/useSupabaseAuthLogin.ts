import type { AsyncDataRequestStatus } from "nuxt/app";

/**
 * provides authentication actions for user registration, login, and logout
 */
export function useSupabaseAuthLogin() {
  const supabase = useSupabaseClient();

  const error = ref<string | null>(null);
  const status = ref<AsyncDataRequestStatus>("idle");

  const login = async (email: string, password: string) => {
    if (status.value === "pending") return;

    status.value = "pending";

    const { error: supabaseError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    //supabase.from("users").select("*").eq("email", email).then((response) => {

    if (supabaseError) {
      status.value = "error";
      error.value = parseSupabaseAuthError(supabaseError);
    } else {
      status.value = "success";
    }
  };

  return {
    login,
    error,
    status,
  };
}
