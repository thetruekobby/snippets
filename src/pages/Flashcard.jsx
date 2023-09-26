import { useRef } from "react"

const x = this
console.log("🚀 ~ file: Flashcard.jsx:3 ~ x:", x)
const Flashcard = () => {
  const cardRef = useRef()
  return (
    <div className="min-h-[500px] flex justify-center items-center bg-neutral-800" style={{ perspective: 900 }}>
      <div
        id="cardRef"
        ref={cardRef}
        className="bg-neutral-900 min-w-[300px] min-h-[350px] px-3 py-2"
        onClick={() => {
          cardRef.current.classList.toggle("flipped")
        }}
      >
        {/* frontface */}
        <div className="front font-bold text-white border-4 border-white rounded">This is the front face</div>
        {/* backface */}
        <div className="back font-bold text-amber-600 rounded border-4 border-amber-600">This is the back face</div>
      </div>
    </div>
  )
}

export default Flashcard
