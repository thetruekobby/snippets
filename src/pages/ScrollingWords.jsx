const ScrollingWords = () => {
  return (
    <div className="min-h-[300px]">
      <h1 className="font-bold text-center text-2xl">Scrolling Words</h1>
      <p className="h-[26px] flex gap-2 overflow-hidden font-bold px-11 mt-5">
        <span className="">I am</span>
        <span className="scrolling-container text-amber-600">
          <span className="block">Reliable</span>
          <span className="block">Accountable</span>
          <span className="block">Something</span>
          <span className="block">Something else</span>
          <span className="block">Reliable</span>
        </span>
      </p>
    </div>
  )
}

export default ScrollingWords
