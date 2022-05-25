import { useRef } from "react"
import Snowflake from "../libs/snowflake"

export default function useKeys() {
  const keys = useRef([])
  const snowflake = useRef(new Snowflake)

  function makeKey(i) {
    while (i >= keys.current.length)
      keys.current.push(snowflake.current.generate())

    return keys.current[i]
  }

  return makeKey
}