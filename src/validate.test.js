import { isValid, areValidFunctions, areValidKeys } from './validate'

const params = {
  valid: {
    key: 'ArrowDown',
    function: () => null
  },
  invalid: {
    key: 'Bananas',
    function: ''
  }
}

// 0.0.0--prerelease.0

test('It errors with empty object', () => {
  function emptyObject() {
    isValid({})
  }
  expect(emptyObject).toThrowError()
})

test('It errors with invalid key', () => {
  function invalidKey() {
    areValidKeys({
      [params.valid.key]: params.valid.function,
      [params.invalid.key]: params.valid.function
    })
  }
  expect(invalidKey).toThrow(Error)
})

test('It errors with invalid function', () => {
  function invalidFunction() {
    areValidFunctions({
      [params.valid.key]: params.valid.function,
      [params.valid.key]: params.invalid.function
    })
  }
  expect(invalidFunction).toThrow(Error)
})

// 0.0.0--prerelease.1

test('It returns with invalid key and skipKeyValidation option', () => {
  function invalidKey() {
    areValidKeys(
      {
        [params.invalid.key]: params.valid.function
      },
      {
        skipKeyValidation: true
      }
    )
  }
  expect(invalidKey).not.toThrow(Error)
})
