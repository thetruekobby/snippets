import React from "react"
import { useState } from "react"
import Child from "./Child"

const Test = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)} className="border bg-gray-200 p-2">
        count is {count}
      </button>
      <Child name={"Gideon"} />
      more changes
      commit 1
      commit 2
      commit 3
    </>
  )
}
export default Test
