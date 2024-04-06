import { useState } from "react"

function App() {
  const [color, setColor ] = useState('#c40e0e')
  return (
    <>
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-black" style={{ backgroundColor: color }}>
      <div className="flex flex-wrap justify-center items-center gap-5">
        <h2>Choose a color to change the backgroundColor.</h2>
        <input type="color" 
        onChange={(e) => {
          setColor(e.target.value)
        }}
        className="w-full rounded-md border-none"
      >
      </input>
      </div>
    </div>
    </>
  )
}

export default App
