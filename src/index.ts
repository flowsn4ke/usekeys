import { useRef } from "react"
import { nanoid } from "nanoid"

export default function useKeys() {
  const keys = useRef([])

  function makeKey(i) {
    while (i >= keys.current.length)
      keys.current.push(nanoid())

    return keys.current[i]
  }

  return makeKey
}