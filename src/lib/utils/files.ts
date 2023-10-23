import { titleCase } from "./text"

export type SearchResult = {
  name: string,
  link: string,
  body: string,
}

export function getContentFrom(html: string): string {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  const nodes = doc.querySelectorAll('script, style')
  nodes.forEach(node => {
    node.remove()
  })
  return doc.body.textContent?.replaceAll(/{.+}/g, '').replaceAll(/(\n|\t)/g, ' ').replaceAll(/ +/g, ' ').trim() ?? ''
}

export function listFiles(glob: Record<string, string>): SearchResult[] {
  const items: SearchResult[] = []
  for (const [key, value] of Object.entries(glob)) {
    const path = key.replace('./', '').replace('+page.svelte', '')
    const parts = path.split('/')
    const content = getContentFrom(value)
    items.push({
      name: titleCase(['problems', 'questions', 'practical'].includes(parts.at(-2) ?? '') ? [parts.at(-3), parts.at(-2)].join(': ') : parts.at(-2) ?? 'Home'),
      link: path,
      body: content.length ? content : 'IGCSE Kit',
    })
  }
  return items
}

export function matches(item: SearchResult, query: string): boolean {
  return item.body.toLowerCase().includes(query.toLowerCase()) || item.name.toLowerCase().includes(query.toLowerCase())
}