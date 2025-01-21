import React, { useState } from "react"
import { sum } from "../utlils/sum"

const CodeSplitting = () => {
  const [value, setValue] = useState(0)
  return (
    <div>
      <button
        className="border bg-gray-100 p-2"
        // onClick={async () => {
        //   const module = await import("../utlils/sum")
        //   module.sum(2, 2)
        // }}
        onClick={() => {
          import("../utlils/sum").then((module) => module.sum(2, 2))
        }}
      >
        add 2 + 2
      </button>
    </div>
  )
}
export default CodeSplitting
