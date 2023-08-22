import fs from 'fs'
import glob from 'glob'

glob('src/**/*.svelte', (err, files) => {
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8')
    fs.writeFileSync(file, content.replaceAll('\t', '  '))
  })
})