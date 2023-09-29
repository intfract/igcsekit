export function getLastFolder(text: string): string {
  const last = text.split('/').at(-1)
  if (last) return last
  return text.split('/').at(-2) ?? ''
}

export function titleCase(text: string): string {
  let words = text.replace('_', ' ').split(' ')
  return words.map(word =>  word.length ? word[0].toUpperCase() + word.substring(1) : '').join(' ')
}