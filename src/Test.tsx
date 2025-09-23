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
      more changes commit 1 commit 2 commit 3 commit 4 commit 5
      <Parent>
        <Comp1 />
        <Comp2 />
      </Parent>
    </>
  )
}
export default Test

const Parent = () => {
  return <div>Comp1</div>
}
const Comp1 = () => {
  return <div>Comp1</div>
}
const Comp2 = () => {
  return <div>Comp2</div>
}
