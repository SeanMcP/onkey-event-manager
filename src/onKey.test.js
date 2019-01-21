import onKey from './onKey'

const mockEvent = {
  key: 'Shift'
}

const keyActionMap = {
  ArrowDown: () => null,
  Backspace: () => null
}

test('It is a defined function', () => {
  expect(onKey).not.toBe(undefined)
  expect(typeof onKey).toBe('function')
})

test('It returns a defined function', () => {
  const output = onKey(keyActionMap)
  expect(output).not.toBe(undefined)
  expect(typeof output).toBe('function')
})

test('It calls callback when keys match', () => {
  const mockFunction = jest.fn()
  const output = onKey({
    ...keyActionMap,
    [mockEvent.key]: mockFunction
  })
  output(mockEvent)
  expect(mockFunction).toBeCalled()
})

test('It does not call callback when keys do not match', () => {
  const mockFunction = jest.fn()
  const output = onKey({
    ...keyActionMap,
    Control: mockFunction
  })
  output(mockEvent)
  expect(mockFunction).not.toBeCalled()
})
