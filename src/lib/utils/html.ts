export function tag(name: string, innerHTML: string, attributes?: Record<string, string>): string {
  return `<${name}${attributes ? Object.keys(attributes).forEach(k => `${k}="${attributes[k]}"`) : ''}>${innerHTML}</${name}>`
}

export function p(innerHTML: string, attributes?) {
  return tag('p', innerHTML, attributes)
}

export function b(innerHTML: string, attributes?) {
  return tag('b', innerHTML, attributes)
}

export function sup(innerHTML: string, attributes?) {
  return tag('sup', innerHTML, attributes)
}

export function sub(innerHTML: string, attributes?) {
  return tag('sub', innerHTML, attributes)
}

export function join(...tags: string[]): string {
  return tags.join('')
}