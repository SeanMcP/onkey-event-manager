# onkey-event-manager
[![npm](https://img.shields.io/npm/v/onkey-event-manager.svg)](https://npmjs.com/package/onkey-event-manager) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/onkey-event-manager.svg)](https://npmjs.com/package/onkey-event-manager) [![npm](https://img.shields.io/npm/dt/onkey-event-manager.svg)](https://npmjs.com/package/onkey-event-manager)

🗝 Easily map onKey functions to keyboard events

> Note: This library was initially developed for React applications, so all the examples are React specific. However, the API is agnostic and can be used with vanilla JavaScript or other frameworks.

## Simple

`onkey-event-manager` simplifies the process of listening for and acting on key changes.

```jsx
import { KEY, onKey } from 'onkey-event-manager'

<button onKeyDown={onKey({ [KEY.ArrowDown]: open }}>▾</button>
```

## Why?
JavaScript provides three keyboard events to trigger actions: `keydown`, `keyup`, and `keypress`. In order to listen to specific keys, you need to pass a function that takes an event and compares the `event.key` to the desired key like so:

### Traditional React example

```jsx
function Accordion(props) {
    const [isOpen, setIsOpen] = React.useState(false)

    function open() {
        setIsOpen(true)
    }
    
    function openOnArrowDown(event) {
        if (event.key === 'ArrowDown') {
            open()
        }
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <button
                aria-label={'Toggle accordion'}
                onClick={open}
                onKeyDown={openOnArrowDown}
            >
                ▾
            </button>
            {isOpen && <div>{props.children}</div>}
        </div>
    )
}
```
This is fine but becomes cumbersome when trying to make complex user interfaces accessible.

`onkey-event-manager` abstracts the event key filtering logic, simplifying the process of listening for keys.

## Install
Add `onkey-event-manager` to your project:

```sh
npm install --save onkey-event-manager
# or
yarn add onkey-event-manager
```

## Use
Import `KEY` and `onKey` from `onkey-event-manager` and add it to your code:

```jsx
...
import { KEY, onKey } from 'onkey-event-manager'

function Button({ onClick }) {
    return (
        <button
            onClick={onClick}
            onKeyDown={onKey({ [KEY.ArrowDown]: onClick })}
        >
            <code>onClick</code> will fire when I am clicked
            or when I'm focused and you press the down arrow.
        </button>
    )
}
```

## API

`onkey-event-manager` comprises two exports: `KEY` and `onKey`. The `onKey` function will work without `KEY`, but is best to use the two together.

### `KEY`
`KEY` is an object with nearly\* all available KeyboardEvent keys. You can view the [full list available here](https://npmjs.org/package/all-keyboardevent-keys).

You can access word keys using dot notation:

```js
import { KEY } from 'onkey-event-manager'

KEY.Enter // 'Enter'
KEY.Tab   // 'Tab'
```

To access symbols or numbers, use bracket notation:

```js
KEY[9]    // '9'
KEY['\\'] // '\'
```

### `onKey`

`onKey` is a simple function that listens for an event, compares it to a set of selected keys, then calls the action if there is a match. It takes two objects as parameters: the first maps a key to a function, and the second is for options:

```js
onKey(Object<String, Function>, Object<String, Boolean>)
```
If there is a single key you want to listen for, pass an object with [computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names):

```jsx
<button onKeyDown={onKey({ [KEY.ArrowDown]: openMenu })} >
```

For more complex listening, consider creating a separate object to keep your JSX clean:

```jsx
function SelectOption(props) {
    const keyActionMap = {
        [KEY.ArrowUp]: props.decrementIndex,
        [KEY.ArrowDown]: props.incrementIndex,
    }
    return <li onKeyDown={onKey(keyActionMap)}>{props.children}</li>
}
```

By default, passing an invalid KeyboardEvent key, one that is not know to `KEY`, will result in an error, so it is best to use the two together.

If you want to override this validation, use the `skipKeyValidation` option.

#### Options

The `onKey` function's second parameter is an optional object with any of the following options.

| Option | Default value |
|---|---|
|`skipKeyValidation: <boolean>` | `false`

## Author
[Sean McPherson](https://github.com/seanmcp)

## License

[MIT](/LICENSE)