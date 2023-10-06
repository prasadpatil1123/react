import { useState } from 'react'


function App() {
  const [color, setColor] = useState('olive')

  function changeColr(color) {
    setColor(color);
  }

  return (
    <div className='w-full h-screen duration-200 ' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-40 inset-x-0 px-2'>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            onClick={() => setColor('red')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: 'red' }}>
            Red
          </button>
          <button
            onClick={() => setColor('orange')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: 'orange' }}>
            orange
          </button>
          <button
            onClick={() => setColor('yellow')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: 'yellow' }}>
            yellow
          </button>
          <button
            onClick={() => setColor('green')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: 'green' }}>
            green
          </button>
          <button
            onClick={() => setColor('blue')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: 'blue' }}>
            blue
          </button>
          <button
            onClick={() => setColor('indigo')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: 'indigo' }}>
            indigo
          </button>
          <button
            onClick={() => setColor('violet')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: 'violet' }}>
            violet
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
