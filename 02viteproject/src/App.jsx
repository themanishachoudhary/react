import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
   
  let [counter, setCounter] = useState(15)
  const addv = ()=>{
    console.log("clicked", counter)
    // counter = counter+1;
    if(counter <20 ){
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);   //interview question to update value yes like wiise value will bw update 
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    // setCounter(counter+1);                      // like notb 
    
  }
  }

  const removeval = ()=>{
    // counter= counter-1;
    if(counter>0){
    setCounter(counter-1);
    }
  }
  // let counter = 10;
  return (
    <>
    <h1>hello with react</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addv}>Add value {counter}</button>
    <br />
    <button onClick={removeval}>remove value {counter}</button>
    </>
  )
}

export default App
