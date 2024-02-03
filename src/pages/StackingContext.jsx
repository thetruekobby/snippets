const StackingContext = () => {
  return (
    <>
      <div>StackingContext</div>
      <div className="bg-red-500 w-[200px] aspect-square overflow-hidden  p-5 border ">
        lorem
      </div>
      <div className="w-[200px]  bg-yellow-500 aspect-square overflow-hidden  p-5  border -mt-20 relative z-10">
        <div className="h-10 mb-5">
          <img src="vite.svg" alt="" className="relative -z-10"/>
        </div>
        <div className="h-10 bg-slate-200 "></div>
      </div>
      <div className="bg-green-500 w-[200px] aspect-square overflow-hidden  p-5 border  -mt-48">
        green
      </div>
    </>
  )
}

export default StackingContext
