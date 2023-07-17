export function load({ url }): 
{
  pathname: string,
  hostname: string,
} 
{
  return {
    pathname: url.pathname,
    hostname: url.hostname,
  }
}