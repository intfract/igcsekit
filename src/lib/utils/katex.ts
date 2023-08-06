import katex from 'katex'

export function math(tex: string): string {
  return katex.renderToString(tex, {
    displayMode: false,
    throwOnError: false,
  })
}

export const end = '\\\\'
export const times = '\\times'
export const div = '\\div'
export const lambda = '\\lambda'

export function frac(numerator: string, denominator: string): string {
  return `\\frac{${numerator}}{${denominator}}`
}