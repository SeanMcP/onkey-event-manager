# onkey-event-manager

[![npm](https://img.shields.io/npm/v/onkey-event-manager.svg)](https://npmjs.com/package/onkey-event-manager) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/onkey-event-manager.svg)](https://npmjs.com/package/onkey-event-manager) [![npm](https://img.shields.io/npm/dt/onkey-event-manager.svg)](https://npmjs.com/package/onkey-event-manager) [![A project badge feature text "PRs Welcome"](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

🗝 Easily map onKey functions to keyboard events

## Simple

`onkey-event-manager` simplifies the process of listening for and acting on key changes.

```jsx
import onKey from 'onkey-event-manager'

// ...
return <button onKeyDown={onKey({ ArrowDown: open })}>Open</button>
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

This is fine but becomes cumbersome when trying to make complex user interfaces accessible with multiple keyboard interactions.

`onkey-event-manager` abstracts the event key filtering logic, simplifying the process of listening for keys.

## Install

Add `onkey-event-manager` to your project:

```sh
npm install --save onkey-event-manager
# or
yarn add onkey-event-manager
```

## Use

Import the default `onKey` function from `onkey-event-manager` and add it to your code:

```jsx
...
import onKey from 'onkey-event-manager'

function Button({ onClick }) {
    return (
        <button
            onClick={onClick}
            onKeyDown={onKey({ ArrowDown: onClick })}
        >
            <code>onClick</code> will fire when I am clicked
            or when I'm focused and you press the down arrow.
        </button>
    )
}
```

## API

Version 1.x of `onkey-event-manager` comprises a single default export: `onKey`.

### `onKey()`

`onKey` is a simple function that listens for an event, compares it to a set of selected keys, then calls the action and passes the `event` object if there is a match. It takes two objects as parameters: the first maps a key to a function, and the second is for options:

```js
onKey(Object<String, Function>)
```

If there is a single key you want to listen for, pass an object inline with [computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names):

```jsx
<button onKeyDown={onKey({ ArrowDown: openMenu })} >
```

For more complex listening, consider generating the function outside of the return to keep your JSX clean:

```jsx
function SelectOption(props) {
  const handleKeyDown = onKey({
    ArrowUp: props.decrementIndex,
    ArrowDown: props.incrementIndex
  })
  return <li onKeyDown={handleKeyDown}>{props.children}</li>
}
```

## Author

[Sean McPherson](https://github.com/seanmcp)

## License

[MIT](/LICENSE)
