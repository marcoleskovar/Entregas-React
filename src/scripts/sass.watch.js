import { exec } from 'child_process'
import fs from 'fs'

//* Se ejecuta con el comando: $ node src/scripts/sass.watch.js

const sassCompiler = () => {
  exec(`sass src/style/scss/main.scss src/style/css/main.css --style=expanded --no-source-map`, (error, stdout, stderr) => {
    if (error) return console.log(`ERROR AL COMPILAR_1: ${error}`)
    else if (stderr) return console.log(`ERROR AL COMPILAR_2: ${stderr}`)
  })
  console.log('COMPILING...')
}

sassCompiler ()

fs.watch(`src/style/scss/`, async (eventType, filename) => {
  if (filename && filename.endsWith('.scss')) {
    sassCompiler();
  }
})