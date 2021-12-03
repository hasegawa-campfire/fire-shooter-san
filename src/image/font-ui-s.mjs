const s = '0123456789AEILPRSTUY./'

export default ([w, h]) => ({
  ...Object.fromEntries(
    Array.from(s).map((c, i) => {
      return [c, [i * 4, 0, 3, h]]
    })
  ),
})
