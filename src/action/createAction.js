export function createAction(type, payloadCreator = a => a, metaCreator) {
  return function(...args) {
    let action = {
      type,
      payload: payloadCreator(...args)
    }
    if (typeof metaCreator === 'function') {
      action.meta = metaCreator(...args)
    }
    return action
  }
}
