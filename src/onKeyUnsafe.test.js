import onKeyUnsafe from './onKeyUnsafe'

test('onKeyUnsafe does not error with invalid key', () => {
  function wrapper() {
    onKeyUnsafe({ invalid: () => {} })
  }
  expect(wrapper).not.toThrowError()
})

test('onKeyUnsafe errors when passed skipKeyValidation: false', () => {
  function wrapper() {
    onKeyUnsafe({ invalid: () => {} }, { skipKeyValidation: false })
  }
  expect(wrapper).toThrowError()
})
