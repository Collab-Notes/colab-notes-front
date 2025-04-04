import type { AsyncDataRequestStatus } from "nuxt/app";
import { AuthRepository } from "../repository/auth.repository";

/**
 * provides authentication actions for user registration, login, and logout
 */
export function useSupabaseAuthRegister() {
  const { $supabaseClient } = useNuxtApp();
  const authRepo = new AuthRepository($supabaseClient);

  const error = ref<string | null>(null);
  const status = ref<AsyncDataRequestStatus>("idle");

  const register = async (newUser: {
    email: string;
    password: string;
    name: string;
  }) => {
    if (status.value === "pending") return;

    status.value = "pending";

    const siteUrl = useGetSiteUrl();

    // TODO: for simplicity, email verification is not un-activated
    const { error: supabaseError, data } = await $supabaseClient.auth.signUp({
      email: newUser.email,
      password: newUser.password,
      options: {
        emailRedirectTo: `${siteUrl}/confirm`,
      },
    });

    if (supabaseError) {
      status.value = "error";
      error.value = parseSupabaseAuthError(supabaseError);
      return;
    }

    if (!data?.user) return;

    try {
      await authRepo.createNewUser({
        userId: data.user.id,
        email: newUser.email,
        name: newUser.name,
      });
      await navigateTo("/");
      status.value = "success";
    } catch {
      status.value = "error";
      error.value = "Error inesperado creando el usuario";
    }
  };

  return {
    register,
    error,
    status,
  };
}
