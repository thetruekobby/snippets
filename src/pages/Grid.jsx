import "../styles/grid.css"
const Grid = () => {
  return (
    <div className="h-screen">
      <div className="grid  [&>label]:w-[300px]">
        <label htmlFor="" className="sr-only">jklejfl</label>
        <input type="text"  className="border block"/>
        <div className="text-red-600">fdfdfdfd</div>
      </div>
    </div>
  )
}
export default Grid
