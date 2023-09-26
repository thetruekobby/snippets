import { useState } from "react"

const LiveFeedback = () => {
  const inputRegex = /^[a-zA-Z\d\.-]+@[a-zA-Z\d-]+\.[a-zA-z]{2,8}(\.[a-zA-z]{2,8})?$/
  const [valid, setValid] = useState(false)
  return (
    <div className="bg-gray-300 min-h-[400px] flex items-center justify-center">
      <div className=" bg-white min-h-[56px] min-w-[300px] p-2 rounded shadow">
        <label htmlFor="" className="block">
          Email
        </label>
        <div className="flex">
          <input
            type="text"
            onChange={(e) => {
              inputRegex.test(e.target.value) ? setValid(true) : setValid(false)
            }}
            className={`border-2 p-2 outline-0 ${valid ? "border-green-500" : ""}`}
          />
          {valid && <img src="./tick.png" alt="./tick.png" className="ml-auto h-10" />}
        </div>
      </div>
    </div>
  )
}

export default LiveFeedback
