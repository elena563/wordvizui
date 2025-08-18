import { useState } from 'react'
import Visualizer from './components/Visualizer'
import Header from './components/Header'

function App() {

  return (
    <div className='w-full h-full'>
      <Header />
      <div className='h-[80%] flex justify-center items-center'>
        <Visualizer />
      </div>
    </div>
  )
}

export default App
