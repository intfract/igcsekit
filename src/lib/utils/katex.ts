export function wrap(...items: string[]) {
  return `\\(${items.join(' ')}\\)`
}

export const times = '\\times'
export const div = '\\div'

export function frac(numerator: string, denominator: string) {
  return `frac{${numerator}}{${denominator}}`
}