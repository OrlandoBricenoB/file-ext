const isEmptyObject = object => {
  if (!object) return true

  return !Object.keys(object).length
}

module.exports = isEmptyObject