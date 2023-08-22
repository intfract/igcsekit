export function tag(name: string, innerHTML: string, attributes?: Record<string, string>): string {
  return `<${name}${attributes ? Object.keys(attributes).map(k => ` ${k}="${attributes[k]}"`) : ''}>${innerHTML}</${name}>`
}

export function p(innerHTML: string, attributes?: Record<string, string> | undefined): string {
  return tag('p', innerHTML, attributes)
}

export function b(innerHTML: string, attributes?: Record<string, string> | undefined): string {
  return tag('b', innerHTML, attributes)
}

export function sup(innerHTML: string, attributes?: Record<string, string> | undefined): string {
  return tag('sup', innerHTML, attributes)
}

export function sub(innerHTML: string, attributes?: Record<string, string> | undefined): string {
  return tag('sub', innerHTML, attributes)
}

export function h(level: number, innerHTML: string, attributes?: Record<string, string> | undefined): string {
  level = Math.floor(level)
  if (level > 6) throw new Error('max heading level is 6')
  return tag(`h${level}`, innerHTML, attributes)
}

export function join(...tags: string[]): string {
  return tags.join('')
}