const AnimatingGradient = () => {
  return (
    <>
      {/* basically increase the background size and transition the background position after usingn a gradient as the background */}
      <div>AnimatingGradient</div>
      <h1 className=" masked font-black text-6xl bg-[url('vite.svg')/cover] bg-clip-text text-transparent">
        Masked text
      </h1>
      <button  className="animating-button ">
        Hover over me
      </button>
    </>
  )
}

export default AnimatingGradient
