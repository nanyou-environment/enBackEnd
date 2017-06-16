import PropTypes from 'prop-types'

function getPrototype(type, isRequired) {
  switch(type) {
  case 'number':
    if (isRequired) return PropTypes.number.isRequired
    return PropTypes.number
  case 'array':
    if (isRequired) return PropTypes.array.isRequired
    return PropTypes.array
  default:
    if (isRequired) return PropTypes.string.isRequired
    return PropTypes.string
  }
}
export function props(arr) {
  const propstypes = {}
  for (let i = 0; i< arr.length; i++) {
    let value
    if (arr[i].isRequired) {
      value = getPrototype(arr[i].type, arr[i].isRequired)
    } else {
      value = getPrototype(arr[i.type])
    }
    propstypes[arr[i].key] = value
  }
}
