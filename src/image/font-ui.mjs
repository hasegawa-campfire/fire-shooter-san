export default ([w, h]) => ({
  y: [60, 0, 7, 7],
  h: [68, 0, 7, 7],
  '.': [76, 0, 1, 7],
  ',': [78, 0, 1, 8],
  ...Array.from({ length: 10 }).map((_, i) => {
    return [i * 6, 0, 5, 7]
  }),
})
