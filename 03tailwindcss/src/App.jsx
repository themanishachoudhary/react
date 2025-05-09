import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let ojet = {
      name: "manisha"
  }
  let  valArr = [3,4,5];

  return (
    <>  
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwindcss</h1>
       <Card username="theNature" btnText= "clickMe"  />
       <Card username="it's Nature" />
    </>
  )
}

export default App
