import validate from './validate'

function onKey(keyActionMap) {
  validate(keyActionMap)
  return event => {
    const { key } = event
    if (keyActionMap.hasOwnProperty(key)) {
      keyActionMap[key](event)
    }
  }
}

export default onKey
