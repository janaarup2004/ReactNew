
import React, { useState } from 'react';
import Shape from './components/Shape';

function App() {
  //const [color, setColor]= useState("Purple")

  return (
    <>
  <div className='bg-blue' >
      <div className='w-full flex items-center text-green mx-3 py-5 px-6  justify-center h-300px '>
      Web Design Test
      </div>
      
      <Shape />
      </div>
    </>
    )
}

export default App
