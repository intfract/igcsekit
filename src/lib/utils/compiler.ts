export function compile(pseudocode: string): Function[] {
  const tasks: Function[] = []
  let cursor: number = 0
  let end: boolean = false
  return tasks
}

export class Compiler {
  tasks: Function[] = []
  i: number = 0
  end: boolean = false
  code: string
  char: string

  digits: string = '.0123456789'
  letters: string = 'qwertyuiopasdfghjklzxcvbnm'
  assignment: string[] = ['declare']
  blocks: string[] = ['while', 'if']
  symbols: string = ':<=>+-*/&|!^'
  operators: string[] = ['<-', '->', '=', '<', '>', '<=', '=>', ':', '+', '-', '*', '/', '&&', '||', '!']
  formatting: string = ' \t'
  separator: string = ','
  quotes: string = '"'
  brackets: string = '()[]{}'

  maps: Record<string, Record<string, string>> = {
    js: {
      '<-': '=',
      '=': '==',
      '^': '**',
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

  compile(): Function[] {
    let temp: string
    let indent: number = 0
    let counter: number = 1 << 8
    while (!this.end && counter) {
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
        if (this.assignment.includes(word)) {
          this.js += ' '
        } else {
          if (this.blocks.includes(word)) {
            this.js += ' '
          }
        }
        temp = word
        continue
      }
      if (this.symbols.includes(this.char)) {
        const operator = this.extractOperator()
        if (!this.operators.includes(operator)) throw new Error(`"${operator}" is an invalid operator`)
        if (Object.keys(this.maps.js).includes(operator)) {
          const op = this.maps.js[operator]
          this.js += op
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
      counter--
    }
    console.log(this.js)
    return this.tasks
  }
}