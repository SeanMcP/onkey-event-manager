import validate from './validate'

const params = {
  valid: {
    key: 'ArrowDown',
    function: () => null,
    options: { skipKeyValidation: true }
  },
  invalid: {
    key: 'Bananas',
    function: ''
  }
}

test('validate succeeds with valid key map', () => {
  function wrapper() {
    validate({ [params.valid.key]: params.valid.function })
  }
  expect(wrapper).not.toThrowError()
})

test('validate succeeds with invalid key AND skipKeyValidation', () => {
  function wrapper() {
    validate(
      { [params.invalid.key]: params.valid.function },
      params.valid.options
    )
  }
  expect(wrapper).not.toThrowError()
})

test('validate errors with invalid key map', () => {
  function wrapper() {
    validate(null)
  }
  expect(wrapper).toThrowError()
})

test('validate errors with invalid options', () => {
  function wrapper() {
    validate({}, null)
  }
  expect(wrapper).toThrowError()
})

test('validate errors with invalid key', () => {
  function wrapper() {
    validate({ [params.invalid.key]: params.valid.function })
  }
  expect(wrapper).toThrowError()
})

test('validate errors with invalid function', () => {
  function wrapper() {
    validate({ [params.valid.key]: params.invalid.function })
  }
  expect(wrapper).toThrowError()
})
