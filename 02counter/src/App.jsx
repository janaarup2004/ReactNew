import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    //setCounter(counter + 1)
    //setCounter(counter + 1)
    //setCounter(counter + 1)  //It only change one time means 15+1
    //When we write setCounter(counter+1) multiple times it is updated only once because in the onclick handler of that render, even after calling setCounter(counter + 1) multiple times the value of the counter is 15, because after our event handler finishes, then React re-renders the component.


    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)   //change value By 4 (bcz default value(15) + how many time call(4)
    
  }

  const removeValue = () => {
    if(counter>0){
    setCounter(counter - 1)
    }
    else{
      counter=0
      setCounter(counter)
    }
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App