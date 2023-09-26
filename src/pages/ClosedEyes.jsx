import { useState } from "react"

const ClosedEyes = () => {
  const [closed, setClosed] = useState(false)
  const [payload, setPayload] = useState({ username: "", password: "" })
  return (
    <div id="closed-eyes" className="">
      <form>
        {!closed ? <img src="/ninja-open.svg" alt="open" className="open" /> : <img src="/ninja-closed.svg" alt="closed" className="closed" />}

        <input
          type="text"
          placeholder="username"
          value={payload.username}
          onChange={(e) => {
            setPayload((prev) => ({ ...prev, username: e.target.value }))
          }}
        />
        <input
          type="password"
          placeholder="password"
          required
          value={payload.password}
          onChange={(e) => {
            if (e.target.value.length > 0) {
              setClosed(true)
            } else {
              setClosed(false)
            }
            setPayload((prev) => ({ ...prev, password: e.target.value }))
          }}
        />
      </form>
    </div>
  )
}

export default ClosedEyes
