import onKey from './onKey'

export default function(keyMap, options = {}) {
  if (!options.hasOwnProperty('skipKeyValidation')) {
    options.skipKeyValidation = true
  }
  onKey(keyMap, options)
}
