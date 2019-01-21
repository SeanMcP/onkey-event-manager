import KEY from './key'

export function isValid(keyActionMap) {
    if (!Object.keys(keyActionMap).length)
        throw Error(
            `'onKey' requires two parameters: a valid KeyboardEvent key and a callback function`
        );
}

export function areValidKeys(keyActionMap, options) {
    if (options && options.skipKeyValidation) {
        return
    }
    for (const key in keyActionMap) {
        if (!KEY[key]) {
            throw Error(`'${key}' is not a valid KeyboardEvent key`);
        }
    }
}

export function areValidFunctions(keyActionMap) {
    for (const key in keyActionMap) {
        if (typeof keyActionMap[key] !== 'function') {
            throw Error(`The value for '${key}' must be a function`);
        }
    }
}

export default function(keyActionMap, options) {
    isValid(keyActionMap);
    areValidFunctions(keyActionMap, options);
    areValidKeys(keyActionMap);
}
