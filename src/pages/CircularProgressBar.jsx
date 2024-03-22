const CircularProgressBar = () => {
  return (
    <div className="">
          <div>CircularProgressBar</div>
          <p className="text-gray-500">Changing the conic gradient percentage of the circular progress bar</p>
      <div className="w-[200px] grid place-items-center aspect-square rounded-full bg-[conic-gradient(blue_50%,theme(colors.gray.500)_0)] after:aspect-square after:rounded-full after:bg-white after:w-[calc(100%_-_20px)] after:block"></div>
    </div>
  )
}
export default CircularProgressBar
