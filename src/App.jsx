import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar'
import Chat from './Components/Chat'

function App() {

  return (
    <div className="app">
        
        <div className="app_body">
        <Sidebar/>
        <Chat/>
        </div>
    </div>
  )
}

export default App
