import PropTypes from 'prop-types'

function getPrototype(type, isRequire) {
  switch(type) {
  case 'number':
    if (isRequire) return PropTypes.number.isRequire
    return PropTypes.number
  case 'array':
    if (isRequire) return PropTypes.array.isRequire
    return PropTypes.array
  default:
    if (isRequire) return PropTypes.string.isRequire
    return PropTypes.string
  }
}
export function props(arr) {
  const propstypes = {}
  for (let i = 0; i< arr.length; i++) {
    let value
    if (arr[i].isRequire) {
      value = getPrototype(arr[i].type, arr[i].isRequire)
    } else {
      value = getPrototype(arr[i.type])
    }
    propstypes[arr[i].key] = value
  }
}
