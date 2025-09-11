import { useState } from 'react'
import Visualizer from './components/Visualizer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='w-full h-full relative'>
      <Header />
        <Sidebar />
        <div className='absolute w-[80%] left-[10%] top-[15%] h-[80%] flex justify-center items-center z-1'>
          <Visualizer />
        </div>
    </div>
  )
}

export default App
