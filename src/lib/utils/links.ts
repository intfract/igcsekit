import { titleCase } from './text'

export type Link = {
  name: string,
  url: string,
  sub: Link[],
}

export function listLinks(url: string, modules: Record<string, () => Promise<unknown>>): Link[] {
  let links: Link[] = []
  let temp: string[] = []
  let markers: number[] = []

  let i: number = 0
  let j: number = 0
  const keys = Object.keys(modules)

  while (i < keys.length) {
    const key = keys[i]
    const path = key.replace('.', url).replace('/+page.svelte', '')
    const parts = path.split('/')

    const link = {
      name: titleCase(parts.at(-1) ?? ''),
      url: path,
      sub: [],
    }

    if (temp.length && parts.length > temp.length) {
      console.log(links, markers)
      links[markers.at(-1) ?? 0].sub.push(link)
    } else {
      markers.push(j)
      temp = parts
      links.push(link)
      j++
    }

    i++
  }
  
  return links
}