const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const srcDir = 'D:/Fotos Casadiangel/vinhos'
const outDir = path.join(__dirname, '..', 'src', 'assets', 'img', 'vinhos')

fs.mkdirSync(outDir, { recursive: true })

const files = fs.readdirSync(srcDir).filter(f => /\.(jpe?g|png)$/i.test(f))

async function run() {
  let totalBefore = 0
  let totalAfter = 0
  for (const file of files) {
    const inPath = path.join(srcDir, file)
    const before = fs.statSync(inPath).size
    totalBefore += before

    const safeName = file
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9.\-]/g, '')
    const outPath = path.join(outDir, safeName.replace(/\.(jpe?g|png)$/i, '.jpg'))

    await sharp(inPath)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(outPath)

    const after = fs.statSync(outPath).size
    totalAfter += after
    console.log(`${file} -> ${path.basename(outPath)}  ${(before/1024/1024).toFixed(1)}MB -> ${(after/1024).toFixed(0)}KB`)
  }
  console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(1)}MB -> ${(totalAfter/1024/1024).toFixed(1)}MB`)
}

run()
