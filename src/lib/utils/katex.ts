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
export const sin = '\\sin'
export const cos = '\\cos'
export const theta = '\\theta'
export const left = '\\left('
export const right = '\\right)'
export const textrm = '\\textrm'

export function frac(numerator: string, denominator: string): string {
  return `\\frac{${numerator}}{${denominator}}`
}

export function wrap(...terms: string[]) {
  return left + terms.join('') + right
}

export function sum(expression: string, start?: string, limit?: string) {
  return `\\displaystyle\\sum_{${start ?? ''}}^{${limit ?? ''}}{${expression}}`
}