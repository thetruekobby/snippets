import { useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"

const Params = () => {
  const { id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [inputValue, setInputValue] = useState()
  return (
    <div>
      <div className="">The Id parameter is {id}</div>
      <div className="">The q search parameter is {searchParams.get("q")}</div>
      <input
        className="border p-2"
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      />
      <button
        className="text-white bg-slate-800 p-2"
        onClick={() => {
          setSearchParams({ q: inputValue })
          // function version of setSearchParams
          //   setSearchParams((prev) => {
          //     prev.set("q", inputValue)
          //     return prev
          //   })
        }}
      >
        Change search parameter
      </button>
    </div>
  )
}
export default Params
