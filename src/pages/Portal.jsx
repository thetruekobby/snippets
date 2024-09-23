import ReactDOM from "react-dom"
const Portal = () => {
  return (
    <div
      className="bg-gray-500 w-[200px] relative"
      onClick={() => {
        console.log("clicked")
      }}
    >
      <h1>Parent</h1>
      <Child />
      <h2>sdddfd</h2>
    </div>
  )
}
export default Portal

const Child = () => {
  return ReactDOM.createPortal(<div className="absolute top-0 bg-green-600 text-white p-2">Child</div>, document.body)
}
// const Child = () => {
//   return <div>Child</div>
// }
