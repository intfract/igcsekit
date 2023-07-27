export function listLinks(url: string, modules) {
  let links: string[] = []

  for (const key of Object.keys(modules)) {
    links.push(key.replace('.', url).replace('/+page.svelte', ''))
  }

  return links
}