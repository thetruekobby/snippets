import { useRef, useState } from "react"

const DirectionAware = () => {
  const ripple = useRef(null)
  const [showRipple, setShowRipple] = useState(false)
  return (
    <div>
      <div className="">Direction Aware</div>
      <button
        onMouseMove={(e) => {
          console.log(e.target.getBoundingClientRect())
          ripple.current.style.top = `${
            e.pageY - e.target.getBoundingClientRect().top
          }px`
          ripple.current.style.left = `${
            e.pageX - e.target.getBoundingClientRect().left
          }px`
        }}
        onClick={() => {
          setShowRipple(true)
          setTimeout(() => {
            setShowRipple(false)
          }, 1500)
        }}
        className="relative bg-gray-200 rounded-full px-4 py-2 w-[100px] h-[30px] overflow-hidden"
      >
        <span
          //   onMouseMove={(e) => {
          //     e.preventDefault()
          //   }}
          ref={ripple}
          className={`${
            showRipple ? "opacity-100 scale-[50]" : "opacity-0"
          } absolute inline-block bg-red-700 w-2 inset-0 aspect-square rounded-full transition-transform duration-1000 ease-linear pointer-events-none`}
        ></span>
        <span className="pointer-events-none">Test Button</span>
      </button>
    </div>
  )
}
export default DirectionAware
