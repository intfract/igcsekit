import { tag } from './html'

export class Compiler {
  i: number = 0
  end: boolean = false
  code: string
  char: string
  variables: string[] = []

  digits: string = '.0123456789'
  letters: string = 'qwertyuiopasdfghjklzxcvbnm'
  assignment: string[] = ['declare', 'constant']
  keywords: string[] = ['input', 'output']
  blocks: string[] = ['while', 'for', 'until', 'if']
  symbols: string = ':<=>+-*/&|!^←'
  operators: string[] = ['<-', '->', '=', '<', '>', '<>', '<=', '=>', ':', '+', '-', '*', '/', '&&', '||', '!', '←']
  formatting: string = ' \t'
  separator: string = ','
  quotes: string = '"'
  brackets: string = '()[]{}'

  maps: Record<string, Record<string, string>> = {
    js: {
      '<-': '=',
      '←': '=',
      '=': '===',
      '<>': '!==',
      ':': '= new ',
      '^': '**',
      'else': '}else{',
      'do': '){',
      'repeat': 'do{',
      'until': '}while(!',
      'to': '-1;',
      'then': '){',
      'next': '}',
      'declare': 'let',
      'constant': 'const',
      'TRUE': 'true',
      'FALSE': 'false',
      'OR': '||',
      'AND': '&&',
      'NOT': '!',
      'STRING': 'String',
      'ARRAY': 'Array',
      'INFINITY': 'Infinity',
    },
  }

  js: string = ''

  constructor(code: string) {
    this.code = code
    this.char = this.code[this.i]
  }

  move() {
    this.i++
    if (this.i < this.code.length) return this.char = this.code[this.i]
    this.end = true
  }

  substitute(term: string, language: string) {
    if (Object.keys(this.maps[language]).includes(term)) {
      this[language] += this.maps[language][term]
    } else {
      this[language] += term
    }
  }

  isLetter(char: string): boolean {
    return this.letters.includes(char.toLowerCase())
  }

  extractNumber(): string {
    let s = ''
    let dp = 0
    while (!this.end && this.digits.includes(this.char)) {
      if (this.char === '.') dp++
      if (dp > 1) throw new Error('too many decimal points in number')
      s += this.char
      this.move()
    }
    return s
  }

  extractWord(): string {
    let s = ''
    while (!this.end && this.isLetter(this.char)) {
      s += this.char
      this.move()
    }
    return s
  }

  extractQuote(quote: string): string {
    let s = ''
    while (!this.end && this.char !== quote) {
      s += this.char
      this.move()
    }
    return s
  }

  extractOperator(): string {
    let s = ''
    while (!this.end && this.symbols.includes(this.char)) {
      s += this.char
      this.move()
    }
    return s
  }

  skipBlanks() {
    while (!this.end && this.formatting.includes(this.char)) {
      this.move()
    }
  }

  compile(): string {
    let temp: string = ''
    let indent: number = 0
    while (!this.end) {
      if (this.brackets.includes(this.char)) {
        if ('()[]'.includes(this.char)) {
          this.js += this.char
        } else {
          this.js += this.char
          if (this.char === '{') {
            indent++
          }
        }
        this.move()
        continue
      }
      if (this.formatting.includes(this.char)) {
        this.skipBlanks()
        continue
      }
      if (this.digits.includes(this.char)) {
        const number = this.extractNumber()
        this.js += number
      }
      if (this.isLetter(this.char)) {
        const word = this.extractWord()
        const wordL = word.toLowerCase()
        if (this.assignment.includes(wordL)) {
          this.js += this.maps.js[wordL] + ' '
        } else if (this.blocks.includes(wordL)) {
          this.js += Object.keys(this.maps.js).includes(wordL) ? this.maps.js[wordL] : wordL
          this.js += '('
          if (wordL === 'for') {
            this.move()
            if (this.isLetter(this.char)) {
              const x = this.extractWord()
              const xL = x.toLowerCase()
              if (this.assignment.includes(xL) || this.blocks.includes(xL) || this.keywords.includes(xL)) throw new Error('reserved word used for variable name')
              this.js += x
              temp = x
            }
          } else if (wordL === 'until') {
            temp = '))'
          }
        } else if (this.keywords.includes(wordL)) {
          if (wordL === 'input') {
            this.move()
            if (this.isLetter(this.char)) {
              const x = this.extractWord()
              const xL = x.toLowerCase()
              if (this.assignment.includes(xL) || this.blocks.includes(xL) || this.keywords.includes(xL)) throw new Error('reserved word used for variable name')
              this.js += `${x} = await input()`
            }
          } else if (wordL === 'output') {
            this.js += 'output('
            temp = ')'
          }
        } else if (Object.keys(this.maps.js).includes(wordL)) {
          this.js += this.maps.js[wordL]
          if (wordL === 'to') {
            this.js += `${temp}++<`
            temp = ';){'
          }
        } else if (wordL.startsWith('end')) {
          this.js += '}'
        } else {
          this.js += Object.keys(this.maps.js).includes(word) ? this.maps.js[word] : word
        }
        continue
      }
      if (this.symbols.includes(this.char)) {
        const operator = this.extractOperator()
        if (!this.operators.includes(operator)) throw new Error(`"${operator}" is an invalid operator`)
        if (Object.keys(this.maps.js).includes(operator)) {
          const op = this.maps.js[operator]
          this.js += op
          if (operator === ':') temp = '()'
        } else {
          this.js += operator
        }
        continue
      }
      if (this.quotes.includes(this.char)) {
        const quote = this.char
        this.move()
        const text = this.extractQuote(quote)
        this.js += quote + text + quote
        this.move()
        continue
      }
      if (this.separator.includes(this.char)) {
        this.js += ','
        this.move()
        continue
      }
      if (this.char === '\n') {
        this.js += temp + ';'
        temp = ''
        this.move()
        continue
      }
    }
    this.js += temp
    return `try{${this.js};return false}catch($e){return $e}`
  }

  style() {
    const keywords = [...this.assignment, ...this.keywords, ...this.blocks]
    let html = ''
    const lines = this.code.split('\n')
    const styledLines: string[] = []
    for (const line of lines) {
      let styledLine = ''
      const words = line.split(' ')
      for (const word of words) {
        styledLine += ' '
        const trimmed = word.toLowerCase().trim()
        if (keywords.includes(trimmed) || trimmed.startsWith('end') || (trimmed && this.isLetter(trimmed[0]) && Object.keys(this.maps.js).includes(trimmed))) {
          styledLine += tag('span', word, { class: 'keyword' })
          continue
        }
        styledLine += word
      }
      styledLines.push(styledLine.substring(1))
    }
    html = styledLines.join('\n')
    return html
  }
}