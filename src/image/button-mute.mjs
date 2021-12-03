const n = 2

export default ([w, h]) => ({
  ...Array.from({ length: n }).map((_, i) => {
    return [(w / n) * i, 0, w / n, h]
  }),
})
