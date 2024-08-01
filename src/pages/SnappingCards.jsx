const SnappingCards = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[300px] aspect-square border flex gap-4 overflow-x-scroll snap-x snap-mandatory p-2">
        {new Array(4).fill(0).map((_, i) => (
          <div key={i} className="basis-full h-full border bg-gray-200 shrink-0 snap-center">
            <h1>{i}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SnappingCards