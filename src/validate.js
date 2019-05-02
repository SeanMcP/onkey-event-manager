import KEY from 'all-keyboardevent-keys'

export function isObject(input) {
  return typeof input === 'object' && input !== null
}

export function areValidKeys(keyActionMap, options) {
  if (options && options.skipKeyValidation) {
    return
  }
  for (const key in keyActionMap) {
    if (!KEY.hasOwnProperty(key)) {
      throw Error(
        `'${key}' is not a valid KeyboardEvent key (To override this check, pass the 'skipKeyValidation' option: https://www.npmjs.com/package/onkey-event-manager#options)`
      )
    }
  }
}

export function areValidFunctions(keyActionMap) {
  for (const key in keyActionMap) {
    if (typeof keyActionMap[key] !== 'function') {
      throw Error(`The value for '${key}' must be a function`)
    }
  }
}

export function areValidParams(keyActionMap, options) {
  if (!isObject(keyActionMap)) {
    throw Error(
      `The first argument passed to 'onKey' must be an object of valid KeyboardEvent keys and callback functions`
    )
  }
  if (typeof options !== 'undefined' && !isObject(options)) {
    throw Error(
      `The second argument passed to 'onKey' must be an object of valid options`
    )
  }
}

export default function() {
  areValidParams(...arguments)
  areValidKeys(...arguments)
  areValidFunctions(...arguments)
}
