export const sampleDeck = {
  name: 'JavaScript Fundamentals',
  description: 'Sample deck — edit, extend or delete it.',
  cards: [
    {
      front: 'What is the difference between `==` and `===`?',
      back: '`===` compares **value and type** with no coercion.\n`==` coerces types first, e.g. `0 == ""` is `true` but `0 === ""` is `false`.',
    },
    {
      front: 'What is a **closure**?',
      back: 'A function bundled with references to the variables of the scope where it was created, so it can use them after that scope has returned.\n\n```js\nfunction counter() {\n  let n = 0;\n  return () => ++n;\n}\nconst next = counter();\nnext(); // 1\nnext(); // 2\n```',
    },
    {
      front: 'What does this log?\n\n```js\nconsole.log(1);\nsetTimeout(() => console.log(2));\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);\n```',
      back: '`1, 4, 3, 2`\n\nSynchronous code runs first, then the **microtask** queue (promises), then **macrotasks** (timers).',
    },
    {
      front: 'What is **hoisting**?',
      back: 'Declarations are processed before code runs.\n\n- `var` is hoisted and initialised to `undefined`\n- `let` / `const` are hoisted but stay in the *temporal dead zone* until declared\n- Function declarations are hoisted with their body',
    },
    {
      front: 'How is `this` determined in a regular function vs an arrow function?',
      back: '- **Regular function:** by how it is *called* (`obj.fn()` → `obj`, plain call → `undefined` in strict mode, `new` → the new object)\n- **Arrow function:** inherits `this` lexically from the enclosing scope',
    },
    {
      front: 'Name the 7 primitive types in JavaScript.',
      back: '`string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, `null`',
    },
    {
      front: 'Difference between `Promise.all` and `Promise.allSettled`?',
      back: '- `Promise.all` rejects as soon as **any** promise rejects\n- `Promise.allSettled` waits for **all** and returns `{ status, value | reason }` for each',
    },
    {
      front: 'What is the time complexity of looking up a key in a `Map`?',
      back: '**O(1)** on average (hash table).',
    },
    {
      front: 'What does `Array.prototype.reduce` do?',
      back: 'Folds an array into a single value by calling a reducer with an accumulator.\n\n```js\n[1, 2, 3].reduce((sum, n) => sum + n, 0); // 6\n```',
    },
    {
      front: 'What is **event delegation**?',
      back: 'Attaching one listener to a common ancestor and using `event.target` to handle events from many children, relying on event **bubbling**.',
    },
  ],
};
