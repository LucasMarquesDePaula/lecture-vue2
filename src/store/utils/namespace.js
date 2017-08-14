function mapValues(obj, f) {
  const res = {}
  Object.keys(obj).forEach((key) => {
    res[key] = f(obj[key], key)
  })
  return res
}

export default (module, types) => {
  const obj = {}

  mapValues(types, (names, type) => {
    obj[type] = {}

    types[type].forEach((name) => {

      const key = `${module}/${name}`;
      obj[type][name] = key
    })
  })
  return obj
}
