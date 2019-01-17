export interface EventInt {
    key: string;
}

function onKey(keyToMatch: string, callback: Function): Function {
    return (e: EventInt): void => {
        if (e.key === keyToMatch) {
            callback();
        }
    };
}

export default onKey;