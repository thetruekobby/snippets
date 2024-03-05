import { useState } from "react"

const AnimateHeight = () => {
  const [full, setFull] = useState(false)

  return (
    <>
      <div
        className={`bg-red-500 overflow-hidden  grid transition-[grid-template-rows_500ms] mx-auto max-w-[500px] ${
          !full ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
        }`}
      >
        <div className=" overflow-hidden">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          perferendis perspiciatis. Placeat commodi eaque earum itaque possimus
          repellat ducimus minima cumque ex veritatis? Tempora reprehenderit
          pariatur dignissimos consectetur eum saepe incidunt vitae ut? Placeat
          molestiae quis cupiditate in. Quo incidunt excepturi nemo quos
          repudiandae, eaque consequuntur, veniam minus voluptate in, omnis
          labore quae illum laudantium? Voluptatem enim nostrum quis veniam,
          consequuntur, laboriosam ipsum tenetur qui non sunt repellat deserunt
          earum cupiditate dolore eom sequi. Totam eius dolor quia omnis enim
          labore commodi vero nam aperiam, consequatur aspernatur similique
          harum, alias placeat perspiciatis tempore repudiandae fugit doloremque
          at. Numquam quasi dolorum dolorem neque eius obcaecati asperiores
          officia quo maxime possimus id sed at dolor enim dolores ex molestias
          ea, quaerat eos, reprehenderit nihil consectetur, vitae corporis?
          Quasi dolore optio, inventore alias dignissimos a ducimus dolores rem
          facere neque fuga.{" "}
        </div>
      </div>
      <button
        onClick={() => setFull(!full)}
        className="border bg-slate-100 p-3 block mx-auto rounded"
      >
        Invert Height
      </button>
    </>
  )
}
export default AnimateHeight
