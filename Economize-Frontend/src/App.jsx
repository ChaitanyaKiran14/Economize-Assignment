import React from 'react'
import Sidebar from './Components/SideBar'
import './App.css'
function App() {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
    </div>
  )
}

export default App