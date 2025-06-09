import { titleCase } from './text'

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
      name: titleCase(['problems', 'questions', 'practical', 'flashcards'].includes(parts.at(-2) ?? '') ? [parts.at(-3), parts.at(-2)].join(': ') : parts.at(-2) ?? 'Home'),
      link: path,
      body: content.length ? content : 'IGCSE Kit',
    })
  }
  return items
}

export function matches(item: SearchResult, query: string): boolean {
  if (query.startsWith(':')) {
    const expression = query.slice(1)
    const regex = new RegExp(expression)
    console.log(regex)
    return regex.test(item.name) || regex.test(item.body)
  }
  return item.body.toLowerCase().includes(query.toLowerCase()) || item.name.toLowerCase().includes(query.toLowerCase())
}

export function seek(glob: Record<string, string>, url: string) {
  const items = {}
  const subcats = ['problems', 'questions', 'flashcards']

  for (const subcat of subcats) {
    items[subcat] = false
  }

  for (const [key, value] of Object.entries(glob)) {
    const path = key.replace('./', '').replace('+page.svelte', '')
    if (!('/igcse/' + path).startsWith(url)) continue
    const parts = path.split('/')
    if (subcats.includes(parts.at(-2) ?? '')) items[parts.at(-2) ?? ''] = path
  }

  return items
}