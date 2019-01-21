import validate from './validate';

function onKey(keyActionMap, options) {
    validate(keyActionMap, options);
    return ({ key }) => {
        if (keyActionMap[key]) {
            keyActionMap[key]();
        }
    };
}

export default onKey;
