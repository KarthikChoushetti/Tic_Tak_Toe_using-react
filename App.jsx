import { useState } from 'react'
import './App.css'
import Icons from './components/Icons/Icons'
import Grid from './components/Grid/Grid'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <Grid numberofCards={9}/>
      
    </>
  )
}

export default App
