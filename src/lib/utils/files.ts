import { titleCase } from "./text"

type SearchResult = {
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
  return doc.textContent ?? ''
}

export function listResults(glob: Record<string, string>) {
  const results: SearchResult[] = []
  for (const [key, value] of Object.entries(glob)) {
    const path = key.replace('./', '').replace('+page.svelte', '')
    results.push({
      name: titleCase(path.split('/').at(-2) ?? 'Home'),
      link: path,
      body: getContentFrom(value),
    })
  }
  return results
}