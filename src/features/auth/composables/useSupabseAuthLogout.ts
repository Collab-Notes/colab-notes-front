/**
 * provides authentication actions for user registration, login, and logout
 */
export function useSupabaseAuthLogout() {
  const supabase = useSupabaseClient();

  const logout = async () => {
    await supabase.auth.signOut();
    await navigateTo("/auth/login");
  };

  return {
    logout,
  };
}
