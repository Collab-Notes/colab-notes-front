export function useAuthObservers() {
  const user = useSupabaseUser();
  // const redirectInfo = useSupabaseCookieRedirect();

  /**
   * Redirection logic when user login/logout
   */
  watch(
    user,
    async (newUser) => {
      if (newUser) {
        // Get redirect path, and clear it from the cookie
        // const path = redirectInfo.pluck();
        // Redirect to the saved path, or fallback to home
        // return navigateTo(path || "/");
      }
    },
    { immediate: true },
  );
}
