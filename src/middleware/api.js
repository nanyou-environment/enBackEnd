import { isFSA } from 'flux-standard-action'

function isPromise(val) {
  return val && typeof val.then === 'function'
}

const PENDING = '@@pending'

function pendingActionType(desc) {
  return `${PENDING}/${desc}`
}

function checkPendingActionType(action) {
  return action.meta && action.meta.pending !== undefined
}

export default function promiseMiddleware({ dispatch }) {
  return next => (action) => {
    if (!isFSA(action)) {
      return isPromise(action)
        ? action.then(dispatch)
        : next(action)
    }

    function actionWith(data, meta) {
      // eslint-disable-next-line eqeqeq
      const preMeta = action.meta != undefined ? action.meta : {}
      if (meta) {
        const nextMeta = Object.assign({}, preMeta, meta)
        return Object.assign({}, action, data, { meta: nextMeta })
      }

      return Object.assign({}, action, data)
    }

    const pending = action.meta && action.meta.pending

    let pendingMeta = {}

    // eslint-disable-next-line eqeqeq
    if (pending != undefined) {
      next(actionWith({ type: pendingActionType(pending) },
        { pending: { desc: pending, status: true } }
      ))

      pendingMeta = { pending: { desc: pending, status: false } }
    }

    return isPromise(action.payload)
      ? action.payload.then(
          (result) => {
            if (result.code !== 200) {
              return next(actionWith({ payload: result, fail: true }, pendingMeta))
            }

            return next(actionWith({ payload: result }, pendingMeta))
            // dispatch({ ...action, payload: result }),
          },
          (error) => {
            dispatch({ ...action, payload: error, error: true })
            return Promise.reject(error)
          }
        ).catch((erro) => {
          window.console.log(erro)
        })
      : next(action)
  }
}

export {
  checkPendingActionType
}
