const FloatingLabel = () => {
  return (
    <div className="relative w-80 h-10 border border-black rounded-lg">
      <input
        type="text"
        id="username"
        className="floating-input placeholder:text-transparent"
        placeholder="Enter username"
      
      />
      <label htmlFor={"username"} className="floating-label">
        username
      </label>
    </div>
  )
}

export default FloatingLabel
