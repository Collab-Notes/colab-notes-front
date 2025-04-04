import type { AsyncDataRequestStatus } from "nuxt/app";
// import { AuthRepository } from "../repository/auth.repository";

/**
 * provides authentication actions for user registration, login, and logout
 */
export function useSupabaseAuthLogin() {
  const supabase = useSupabaseClient();
  // const { $supabaseClient } = useNuxtApp();
  // const authRepo = new AuthRepository($supabaseClient);

  const error = ref<string | null>(null);
  const status = ref<AsyncDataRequestStatus>("idle");

  const login = async (email: string, password: string) => {
    if (status.value === "pending") return;

    status.value = "pending";

    const { error: supabaseError, data } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (data?.user) {
      // TODO: implement store to save user data
      // const userData = authRepo.getUserById(data.user.id);
      await navigateTo("/");
    }

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
