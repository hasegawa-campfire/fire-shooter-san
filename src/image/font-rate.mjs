const s = '0123456789*+'

export default ([w, h]) => ({
  normal: Object.fromEntries(
    Array.from(s).map((c, i) => {
      return [c, [i * 6, 0, 5, 7]]
    })
  ),
  flash: Object.fromEntries(
    Array.from(s).map((c, i) => {
      return [c, [i * 6, 8, 5, 7]]
    })
  ),
})
