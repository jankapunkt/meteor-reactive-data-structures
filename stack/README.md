# Meteor Reactive Stack

A simple reactive stack implementation, works with any frontend.

- [Video Tutorial](https://www.youtube.com/watch?v=RJEnPwjf2P8)
- Article (coming soon)

# Installation

```shell
meteor add jkuester:reactive-stack
```

## Usage

```js
import { ReactveStack } from "meteor/jkuester:reactive-stack";
import { Tracker } from 'meteor/tracker'

const stack = new ReactveStack()

Tracker.autorun(() => {
  // reactively updates, once items 
  // are psushed to or popped from
  // the stack
  const top = stack.peek()
  console.debug(top)
})

// ...

stack.push('foo') // size 1, top: foo
stack.push('bar') // size 2, top: bar
stack.push('baz') // size 3, top: baz
stack.push('moo') // size 4, top: moo
stack.pop()       // size 3, top: baz
```

The full api is documented in [api.md](api.md)

## Run the tests

```shell
meteor test-packages ./
```

## License

All data structures in this repo are MIT
