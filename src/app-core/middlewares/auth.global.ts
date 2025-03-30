/**
 * Middleware to handle authentication and route access control.
 */
export default defineNuxtRouteMiddleware(async (_to) => {
  // const user = useSupabaseUser();
  // // NOTE: this kind of conditions to.path !== "/" prevents infinite redirection loop
  // // 1. Redirect to home if user is already authenticated and is trying to access unauthenticated-only routes
  // if (to.meta.unauthenticatedOnly && user.value && to.path !== "/") {
  //   return navigateTo("/");
  // }
  // // 2. Redirect to login if user is not authenticated and is trying to access authenticated-only routes
  // if (!user.value && !to.meta.public && to.path !== "/auth/login") {
  //   return navigateTo({
  //     path: "/auth/login",
  //     query: {
  //       redirect: to.fullPath,
  //     },
  //   });
  // }
});
