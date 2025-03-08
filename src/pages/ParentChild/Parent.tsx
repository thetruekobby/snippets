import React, { useState } from "react"
import Child from "./Child"

const Parent = () => {
  const [data, setData] = useState(0)

  const onChange = () => {
    setData(data + 1)
  }
  console.log("parent rendered")
  return (
    <div>
      <button onClick={onChange} className="border p-2">
        Parent button
      </button>
      <Child />
    </div>
  )
}
export default Parent
