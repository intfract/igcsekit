export function titleCase(text: string) {
  let words = text.replace('_', ' ').split(' ')
  return words.map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
}