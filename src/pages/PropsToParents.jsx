import { useState } from "react"


//Basically turn the child component to a custom hook and return  an object with the component as well as the props
const ParentComponent = () => {
  const { render, value, setValue } = useChildComponent()

  return (
    <div>
      <div className=""> ParentComponent</div>
      <div className="">{render}</div>
      <div className="">value = {value}</div>
      <button
        onClick={() => {
          setValue(value + 1)
        }}
        className="border p-2"
      >
        Increase Value
      </button>
    </div>
  )
}
export default ParentComponent

const useChildComponent = () => {
  const [value, setValue] = useState(1)
  return { render: <div>childComponent</div>, value, setValue }
}
