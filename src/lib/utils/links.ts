import { titleCase } from './text'

export type Link = {
  name: string,
  url: string,
  sub?: Link[],
}

export function listLinks(url: string, modules: Record<string, () => Promise<unknown>>): Link[] {
  let links: Link[] = []
  let temp: string[] = []

  for (const key of Object.keys(modules)) {
    const path = key.replace('.', url).replace('/+page.svelte', '')
    const parts = path.split('/')

    const link = {
      name: titleCase(parts.at(-1) ?? ''),
      url: path,
    }

    if (temp.length && parts.length > temp.length) {
      // create sub link
    } else {
      temp = parts
      links.push(link)
    }
  }

  return links
}