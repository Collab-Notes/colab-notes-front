/**
 * Returns the base URL of the current site (protocol + host)
 */
export function useGetSiteUrl() {
  const requestUrl = useRequestURL();
  const siteUrl = `${requestUrl.protocol}//${requestUrl.host}`;

  return siteUrl;
}
