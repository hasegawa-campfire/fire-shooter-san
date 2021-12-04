const keys = ['normal', 'flash']
const nums = Array.from({ length: 10 })

export default ([iw, ih]) => {
  const obj = {}
  const h = ih / keys.length

  keys.forEach((key, i) => {
    const y = h * i

    obj[key] = {
      y: [60, y, 7, 7],
      h: [68, y, 7, 7],
      '.': [76, y, 1, 7],
      ',': [78, y, 1, 8],
      ...nums.map((_, i) => {
        return [i * 6, y, 5, 7]
      }),
    }
  })

  return obj
}
