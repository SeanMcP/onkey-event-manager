import validate, { isValid, areValidFunctions, areValidKeys } from './validate';

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

const keyActionMap = {
    ArrowDown: () => null,
    Backspace: () => null
};

// test('It is a defined function', () => {
//     expect(onKey).not.toBe(undefined);
//     expect(typeof onKey).toBe('function');
// });

// test('It returns a defined function', () => {
//     const output = onKey(keyActionMap);
//     expect(output).not.toBe(undefined);
//     expect(typeof output).toBe('function');
// });

test('It errors with empty object', () => {
    function emptyObject() {
        isValid({});
    }
    expect(emptyObject).toThrowError();
});

test('It errors with invalid key', () => {
    function invalidKey() {
        areValidKeys({
            Enter: () => null,
            Bananas: () => null
        });
    }
    expect(invalidKey).toThrow(Error);
});

test('It errors with invalid function', () => {
    function invalidFunction() {
        areValidFunctions({
            Shift: () => null,
            Enter: 'string'
        });
    }
    expect(invalidFunction).toThrow(Error);
});
