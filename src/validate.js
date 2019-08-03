import isObject from 'isobject'

export function areValidFunctions(keyActionMap) {
  for (const key in keyActionMap) {
    if (typeof keyActionMap[key] !== 'function') {
      throw TypeError(`The value for '${key}' must be a function`)
    }
  }
}

export function areValidParams(keyActionMap, options) {
  if (!isObject(keyActionMap)) {
    throw TypeError(
      `The first argument passed to 'onKey' must be an object of valid KeyboardEvent keys and callback functions`
    )
  }
  if (typeof options !== 'undefined' && !isObject(options)) {
    throw TypeError(
      `The second argument passed to 'onKey' must be an object of valid options`
    )
  }
}

export default function() {
  areValidParams(...arguments)
  areValidFunctions(...arguments)
}
