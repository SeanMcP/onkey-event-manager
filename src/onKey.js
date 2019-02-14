import validate from './validate'

function onKey(keyActionMap, options) {
  validate(keyActionMap, options)
  return event => {
    const { key } = event
    if (keyActionMap[key]) {
      keyActionMap[key](event)
    }
  }
}

export default onKey
