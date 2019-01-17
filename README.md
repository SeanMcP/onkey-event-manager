# react-onkey

[![npm](https://img.shields.io/npm/v/react-onkey.svg)](https://npmjs.com/package/react-onkey) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react-onkey.svg)](https://npmjs.com/package/react-onkey) [![npm](https://img.shields.io/npm/dt/react-onkey.svg)](https://npmjs.com/package/react-onkey)

🗝 Easily map onKey functions to keyboard events in React

## Simple

`react-onkey` simplifies the process of listening for and acting on key changes in React.

```jsx
import { KEY, onKey } from 'react-onkey'

<button onKeyDown={onKey({ [KEY.ArrowDown]: open }}>▾</button>
```

## Why?
React provides three keyboard events to trigger actions: `onKeyDown`, `onKeyPress`, and `onKeyUp`. In order to listen to specific keys, you need to pass a function that takes an event and compares the `event.key` to the desired key like so:

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

`react-onkey` abstracts the event key filtering logic, simplifying the process of listening for keys.

## Install
Add `react-onkey` to your project:

```sh
npm install --save react-onkey
# or
yarn add react-onkey
```

## Use
Import `KEYS` and `onKey` from `react-onkey` and add it to your code:

```jsx
...
import { KEY, onKey } from 'react-onkey'

function Button({ onClick }) {
    return (
        <button
            onClick={onClick}
            onKeyDown={onKey({[ KEY.ArrowDown ]: onClick})}
        >
            <code>onClick</code> will fire when I am clicked
            or when I'm focused and you press the down arrow.
        </button>
    )
}
```

## API

`react-onkey` comprises two exports: `KEY` and `onKey`. The `onKey` function will work without `KEY`, but is best to use the two together.

### `KEY`
`KEY` is an object with nearly* all available KeyboardEvent keys. You can view the [full list available here](src/keys.js).

You can access word keys using dot notation:

```js
import { KEY } from 'react-onkey'

KEY.Enter // 'Enter'
KEY.Tab   // 'Tab'
```

To access symbols or numbers, use bracket notation:

```js
KEY[9]    // '9'
KEY['\\'] // '\'
```

> \*Currently a U.S. English keyboard

### `onKey`

`onKey` is a simple function that listens for an event, compares it to a set of selected keys, then calls the action if there is a match. It takes an object as a parameter that maps a key to a function:

```js
onKey(Object<String, Function>)
```
If there is a single key you want to listen for, pass an object with [computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names):

```jsx
<button onKeyDown={onKey({[KEY.ArrowDown]: openMenu})} >
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

Passing an invalid KeyboardEvent key, one that is not know to `KEY`, will result in an error, so it is best to use the two together.

## License

[MIT](/LICENSE)