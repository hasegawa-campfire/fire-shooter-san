// @ts-nocheck
import { readdir, writeFile } from 'fs/promises'
import { join, parse } from 'path'
import sharp from 'sharp'

function camelCase(name) {
  return name.replace(/[^a-z]([a-z])/g, (_, c) => c.toUpperCase())
}

function insertNode(parent, node) {
  if (parent.child1 && parent.child2) {
    return insertNode(parent.child1, node) || insertNode(parent.child2, node)
  } else if (parent.w >= node.w && parent.h >= node.h) {
    node.x = parent.x
    node.y = parent.y
    const x2 = parent.x + node.w
    const y2 = parent.y + node.h
    const dw = parent.w - node.w
    const dh = parent.h - node.h
    if (dw > dh) {
      parent.child1 = { x: parent.x, y: y2, w: node.w, h: dh }
      parent.child2 = { x: x2, y: parent.y, w: dw, h: parent.h }
    } else {
      parent.child1 = { x: x2, y: parent.y, w: dw, h: node.h }
      parent.child2 = { x: parent.x, y: y2, w: parent.w, h: dh }
    }
    return node
  }
}

async function findFiles(path, callback) {
  const files = {}
  for (const dir of await readdir(path, { withFileTypes: true })) {
    const file = dir.isDirectory()
      ? await findFiles(join(path, dir.name), callback)
      : await callback(join(path, dir.name))
    if (file) {
      files[camelCase(parse(dir.name).name)] = file
    }
  }
  if (Object.keys(files).length) {
    return files
  }
}

function findArray(value, callback) {
  if (Array.isArray(value)) {
    return callback(value)
  }
  if (value && typeof value === 'object' && value.constructor === Object) {
    for (const key in value) {
      value[key] = findArray(value[key], callback)
    }
  }
  return value
}

const width = 512
const height = 512

const rootNode = { x: 1, y: 1, w: width - 1, h: height - 1 }
const images = []

const tree = await findFiles('src/image', async (path) => {
  if (/\.png$/.test(path)) {
    const { width, height } = await sharp(path).metadata()
    const { x, y } = insertNode(rootNode, { w: width + 1, h: height + 1 })
    images.push({ input: path, left: x, top: y })

    try {
      const mod = await import(path.replace(/(.*)\.png$/, './$1.mjs'))
      const rect = mod.default([width, height])
      return findArray(rect, ([mx, my, ...rest]) => [x + mx, y + my, ...rest])
    } catch (err) {
      if (err.code !== 'ERR_MODULE_NOT_FOUND') {
        throw err
      }
    }

    return [x, y, width, height]
  }
})

await sharp({ create: { width, height, channels: 4, background: '#0000' } })
  .composite(images)
  .toFile('src/assets/image.png')

await writeFile('src/image.js', `export default ${JSON.stringify(tree)}`)
