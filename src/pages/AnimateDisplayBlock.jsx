import { useRef, useState } from "react"
import "../styles/animatedisplayblock.css"

const AnimateDisplayBlock = () => {
  const dialogRef = useRef()
  const [dis, setDis] = useState(false)
  return (
    <>
      <div>AnimateDisplayBlock</div>
      <button
        onClick={() => {
          //   setDis(!dis)
          dialogRef.current.hasAttribute(open)
            ? dialogRef.current.close()
            : dialogRef.current.showModal()
        }}
      >
        Change Modal Status
      </button>
      <div
        style={{ display: dis ? "block" : "none" }}
        className="bg-slate-700 text-white p-3 swiper"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia aliquam ipsam maxime sequi
        natus aperiam eum? Maxime sed rerum nulla dolor alias, nostrum mollitia laborum veniam illo,
        totam repellat nam?
      </div>
      <dialog ref={dialogRef} className="h-[200px] w-[200px] bg-black text-white swiper">
        <button
          onClick={() => {
            //   setDis(!dis)
            dialogRef.current.close()
          }}
        >
          Close Modal
        </button>
      </dialog>
    </>
  )
}
export default AnimateDisplayBlock
