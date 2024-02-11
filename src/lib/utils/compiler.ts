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
  keywords: string[] = ['input', 'output', 'call', 'return', 'openfile', 'readfile', 'writefile', 'closefile', 'read', 'write', 'otherwise']
  blocks: string[] = ['while', 'for', 'until', 'if', 'procedure', 'function', 'case']
  symbols: string = ':<=>+-*/&|!^←'
  operators: string[] = ['<-', '->', '=', '<', '>', '<>', '<=', '>=', ':', '+', '-', '*', '/', '&&', '||', '!', '←']
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
      'case': 'switch',
      'otherwise': 'default:',
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
      'CHAR': 'String',
      'ARRAY': 'Array',
      'INFINITY': 'Infinity',
      'procedure': 'function',
      'INTEGER': 'Number',
      'REAL': 'Number',
      'OF': '',
    },
  }

  js: string = ''

  constructor(code: string) {
    this.code = code
    this.char = this.code[this.i]
  }

  reset() {
    this.i = 0
    this.end = false
    this.char = this.code[this.i]
  }

  move() {
    this.i++
    if (this.i < this.code.length) this.char = this.code[this.i]
    else this.end = true
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
    this.reset()
    this.js = ''
    let temp = ''
    let next = ''
    let indent = 0
    while (!this.end) {
      if (this.brackets.includes(this.char)) {
        if ('()[]'.includes(this.char)) {
          this.js += this.char
        } else {
          this.js += this.char
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
          indent++
          this.js += Object.keys(this.maps.js).includes(wordL) ? this.maps.js[wordL] : wordL
          if (['procedure', 'function'].includes(wordL)) {
            this.move()
            if (this.isLetter(this.char)) {
              const x = this.extractWord()
              const xL = x.toLowerCase()
              if (this.assignment.includes(xL) || this.blocks.includes(xL) || this.keywords.includes(xL)) throw new Error('reserved word used for procedure name')
              this.js += ' ' + x
              if (wordL === 'procedure') {
                this.js += '('
                temp = '){'
              } else temp = '{'
            }
          } else this.js += '('
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
          } else if (wordL === 'case') {
            next = 'case '
            temp = '){'
          }
          continue
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
            temp = ')' + temp
          } else if (wordL === 'call') {
            temp = '()'
          } else if (wordL === 'otherwise') {
            this.js = this.js.substring(0, this.js.length - 5)
            this.js += this.maps.js[wordL]
            next = ''
          } else this.js += wordL + ' '
        } else if (Object.keys(this.maps.js).includes(wordL)) {
          this.js += this.maps.js[wordL]
          if (wordL === 'to') {
            this.js += `${temp}++<`
            temp = ';){'
          }
        } else if (wordL.startsWith('end')) {
          this.js += '}'
          indent--
        } else {
          this.js += Object.keys(this.maps.js).includes(word) ? this.maps.js[word] : word
        }
        continue
      }
      if (this.symbols.includes(this.char)) {
        const operator = this.extractOperator()
        if (!this.operators.includes(operator)) throw new Error(`"${operator}" is an invalid operator`)
        if (operator === ':') {
          if (indent) {
            this.js += operator
            temp = ';break'
            console.log(temp)
          } else {
            this.js += this.maps.js[operator]
            temp = '()'
          }
          continue
        }
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
      if (this.separator.includes(this.char)) {
        this.js += ','
        this.move()
        continue
      }
      if (this.char === '\n') {
        console.log(temp)
        this.js += temp
        temp = ''
        if (this.js.at(-1) !== '{') this.js += ';'
        this.move()
        this.js += next
        next = next === 'case ' ? 'case ' : ''
        continue
      }
      console.log(this.char)
    }
    this.js += temp
    return `function LENGTH(string){return string.length}function UCASE(string){return string.toUpperCase()}function LCASE(string){return string.toLowerCase()}function SUBSTRING(string,start,length){return string.substr(start-1,length)}function ROUND(number){return Math.round(number)}function RANDOM(){return Math.random()}try{${this.js};return false}catch($e){return $e}`
  }

  style() {
    if (!this.code.length) return ''
    const keywords = [...this.assignment, ...this.keywords, ...this.blocks]
    let html = ''
    this.reset()
    while (!this.end) {
      if (this.brackets.includes(this.char)) {
        html += tag('span', this.char, { class: 'bracket' })
      } else if (this.isLetter(this.char)) {
        const word = this.extractWord()
        const wordL = word.toLowerCase()
        if (keywords.includes(wordL) || wordL.startsWith('end') || Object.keys(this.maps.js).includes(word) || Object.keys(this.maps.js).includes(wordL)) html += tag('span', word, { class: 'keyword' })
        else html += word
        this.i--
      } else if (this.symbols.includes(this.char)) {
        const operator = this.extractOperator()
        if (this.operators.includes(operator)) html += tag('span', operator, { class: 'operator' })
        this.i--
      } else if (this.quotes.includes(this.char)) {
        const quote = this.char
        this.move()
        const text = this.extractQuote(quote)
        html += tag('span', quote + text + (this.char === quote && !this.end ? quote : ''), { class: 'string' })
      } else {
        html += this.char
      }
      this.move()
    }
    return html
  }
}