import React from "react"

const Generics = () => {
  return (
    <>
      <div>Generics</div>
      <Child data={{ name: "Gideon" }} />
    </>
  )
}
export default Generics

export function Child<T>({ data }: Props<T>) {
  console.log(data)
  return <div>Child</div>
}

type Props<T> = {
  data: T
}
