import KEYS from './keys';

function onKey(keyToMatch, callback) {
    if (!keyToMatch && !callback)
        throw Error(
            `'onKey' requires two parameters: a valid KeyboardEvent key and a callback function`
        );
    if (!KEYS[keyToMatch])
        throw Error(`'${keyToMatch}' is not a valid KeyboardEvent key`);
    if (typeof callback !== 'function')
        throw Error(`The second parameter for 'onKey' must be a function`);
    return e => {
        if (e.key === keyToMatch) {
            callback();
        }
    };
}

export default onKey;