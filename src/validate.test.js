import validate from './validate'

const KEY = 'ArrowDown',
  VALID_FUNCTION = () => null,
  INVALID_FUNCTION = ''

test('validate succeeds with valid key map', () => {
  function wrapper() {
    validate({ [KEY]: VALID_FUNCTION })
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

test('validate errors with invalid function', () => {
  function wrapper() {
    validate({ [KEY]: INVALID_FUNCTION })
  }
  expect(wrapper).toThrowError()
})
