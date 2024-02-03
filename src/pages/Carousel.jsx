import { useState } from "react";
import { IoChevronBack } from "react-icons/io5"

const slider = [
  {
    image: "ninja-closed.svg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, tempore!",
  },
  {
    image: "next.svg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, tempore!",
  },
  {
    image: "ninja-closed.svg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, tempore!",
  },
]
const Carousel = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    return (
      <>
        <div>Carousel</div>
        <div className="h-[300px] relative  flex rounded-3xl bg-black overflow-hidden">
          {slider.map((slide, i) => (
            <div
              key={i}
              style={{
                background: `#000 url(${slide.image}) no-repeat center/cover`,
                translate: `${-100 * sliderIndex}%`,
              }}
              className={`h-full w-full relative flex-[0_0_100%] transition-all `}
            >
              <span className="absolute bottom-16 left-0 right-0 text-center px-6 text-white">
                {slide.text}
              </span>
            </div>
          ))}
          <button className="absolute left-4 bottom-4 bg-white p-1 flex items-center  justify-center aspect-square rounded-full active:scale-75 cursor-pointer focus:outline ">
            <IoChevronBack
              onClick={() => {
                setSliderIndex((prev) =>
                  prev === 0 ? slider.length - 1 : prev - 1
                )
              }}
            />
          </button>
          <button className="absolute right-4 bottom-4 bg-white p-1 flex items-center  justify-center aspect-square rounded-full rotate-180 active:scale-75 cursor-pointer">
            <IoChevronBack
              onClick={() => {
                setSliderIndex((prev) =>
                  prev === slider.length - 1 ? 0 : prev + 1
                )
              }}
            />
          </button>
          <div className="flex gap-4 absolute left-1/2 -translate-x-1/2 bottom-2">
            {slider.map((_, i) => (
              <span
                key={i}
                onClick={() => {
                  setSliderIndex(i)
                }}
                className={`w-3 aspect-square rounded-full ${
                  sliderIndex === i ? "bg-black" : "bg-white"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </>
    )
}

export default Carousel