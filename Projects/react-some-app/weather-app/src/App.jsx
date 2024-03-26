import { useState } from 'react'
import Weather from './components/weather';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex items-center justify-center min-h-screen  '>
      <div className='w-1/2 h-1/2 bg-slate-500 m-2 p-2 rounded-md'>
        <Weather />
      </div>
    </div>
  )
}

export default App
