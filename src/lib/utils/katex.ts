import katex from 'katex'

export function math(tex: string) {
  return katex.renderToString(tex, {
    displayMode: false,
    throwOnError: false,
  })
}

export const times = '\\times'
export const div = '\\div'

export function frac(numerator: string, denominator: string) {
  return `frac{${numerator}}{${denominator}}`
}