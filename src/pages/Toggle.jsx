const Toggle = () => {
  return (
    // can change 4rems to modify size
    <div className="grid place-items-center min-h-[300px] p-1">
      <label id="toggle-label" htmlFor="toggle" className="inline-block w-[4rem] aspect-[2] rounded-2xl overflow-hidden bg-gray-300">
        <input type="checkbox" name="" id="toggle" className="hidden peer" />
        <span className="border-2 border-gray-300 transition-all block h-full aspect-square bg-white rounded-full peer-checked:translate-x-[calc(4rem_-_100%)] peer-checked:border-green-400"></span>
      </label>
    </div>
  )
}

export default Toggle
