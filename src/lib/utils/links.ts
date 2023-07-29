import { titleCase } from './text'
import { tag } from './html'

export type Link = {
  name: string,
  url: string,
  sub: Link[],
}

function cleanPaths(paths: string[]): string[] {
  return paths.map(path => path.replace('./', '').replace('/+page.svelte', ''))
}

export function createLinkTree(paths: string[], url: string) {
  paths = cleanPaths(paths)
  const pathTree = {}

  paths.forEach((path) => {
    const parts = path.split('/')
    let currentLevel = pathTree
    parts.forEach(part => {
      currentLevel[part] = currentLevel[part] || {}
      currentLevel = currentLevel[part]
    })
  })

  console.log(pathTree)

  function buildHTMLList(node: { [x: string]: any }, acc: string[]) {
    let html = '<ul>'

    for (const key in node) {
      if (Object.prototype.hasOwnProperty.call(node, key)) {
        const path = acc.concat(key)
        html += tag('li', tag('a', titleCase(key), { href: path.join('/') }) + buildHTMLList(node[key], path))
      }
    }

    html += '</ul>'
    return html
  }

  return buildHTMLList(pathTree, [...url.split('/')])
}