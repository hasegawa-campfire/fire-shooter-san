export default ([w, h]) => ({
  t: [90, 0, 8, 9],
  ...Array.from({ length: 10 }).map((_, i) => {
    return [i * 9, 0, 8, 9]
  }),
})
