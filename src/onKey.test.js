import onKey from './onKey';

const params = {
    valid: {
        key: 'ArrowDown',
        callback: () => null
    },
    invalid: {
        key: 'Bananas',
        callback: ''
    }
};

const mockEvent = {
    key: 'Backspace'
};

test('It is a defined function', () => {
    expect(onKey).not.toBe(undefined);
    expect(typeof onKey).toBe('function');
});

test('It returns a defined function', () => {
    const output = onKey(params.valid.key, params.valid.callback);
    expect(output).not.toBe(undefined);
    expect(typeof output).toBe('function');
});

test('It errors with missing params', () => {
    function noParams() {
        onKey()
    }
    expect(noParams).toThrowError();
});

test('It errors with missing param', () => {
    function missingParam() {
        onKey(params.valid.key)
    }
    expect(missingParam).toThrow(Error);
});

test('It errors with invalid key', () => {
    function invalidKey() {
        onKey(params.invalid.key, params.valid.callback)
    }
    expect(invalidKey).toThrow(Error);
});

test('It calls callback when keys match', () => {
    const mockFunction = jest.fn();
    const output = onKey(mockEvent.key, mockFunction);
    output(mockEvent);
    expect(mockFunction).toBeCalled();
});

test('It does not call callback when keys do not match', () => {
    const mockFunction = jest.fn();
    const output = onKey(params.valid.key, mockFunction);
    output(mockEvent);
    expect(mockFunction).not.toBeCalled();
});