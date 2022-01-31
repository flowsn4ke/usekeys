# useKeys

Generate unique yet persisted keys for `.map()` functions in React, allowing React to update only the components that need to be and preventing duplicate keys that lead to bugs. The function it returns accepts the array index as an argument.

## Note

**Note**: You need one instance of useKeys() per `.map()` function call, otherwise you'll end up with duplicates.

## Usage

```jsx
import { useWhyDidYouUpdate } from 'hookbox'
import MyComponent from 'hookbox'

export function MyComponent(props) {
  const k = useKeys()

  return <>
  {new Array(42).fill(null).map(value, i) => {
    return <div key={k(i)}>
    unique key number {i}
    </div>}}
  </>
}
```