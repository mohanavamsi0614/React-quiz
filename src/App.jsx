import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componuds/home'
import Q from './componuds/quesions'
import Result from './componuds/result'

function App() {


  return (
    <>
     <Home/>
     <hr></hr>
     <Q/>
     <hr></hr>
     <Result/>
    </>
  )
}

export default App
