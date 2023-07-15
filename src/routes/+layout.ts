export function load({ url }): { url: string } {
  return {
    url: url.pathname,
  }
}