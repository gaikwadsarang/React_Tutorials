import { useState } from 'react'

function App() {
 const [color, setColor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
       <div className='fixed flex flex-wrp items-center justify-center bottom-12 insert-x-0 px-2 '>
        <div className='flex flex-wrap gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button
          onClick={() => setColor("red")}
          className='outline-none px-4 py-1 rounded-s-full text-white shadow-lg' style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className='outline-none px-4 py-1 rounded-s-full text-white shadow-lg' style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}
          >Blue</button>

        </div>
       </div>
      </div>
    </>
  )
}

export default App
