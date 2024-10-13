import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header/header.jsx";
import Sidebar from "./components/sidebar/side.jsx";
import MainSection from "./pages/welcome/welcome.jsx";
import AddClientForm from "./pages/addClient/addClient.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
    <Sidebar />
    <div className="content-wrapper">
      <Header />
      <AddClientForm />
  
    </div>
  </div>
  )
}

export default App
