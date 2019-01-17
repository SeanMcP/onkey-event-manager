import validate from './validate';

function onKey(keyActionMap) {
    validate(keyActionMap);
    return ({ key }) => {
        if (keyActionMap[key]) {
            keyActionMap[key]();
        }
    };
}

export default onKey;
