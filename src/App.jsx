import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header/header.jsx";
import Sidebar from "./components/sidebar/side.jsx";
import MainSection from "./pages/welcome/welcome.jsx";
import AddClientForm from "./pages/addClient/addClient.jsx"
import TaskPage from './pages/tasks/taskpage.jsx';
import OpportunitiesTable from './pages/sales/showsales.jsx';
import Register from './pages/Register/Register.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <Router >
    <div className="app-container">
      <Sidebar />
      <div className="content-wrapper">
          <Header />
          <div className='content'>
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/clients" element={<AddClientForm />} />
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/sales" element={<OpportunitiesTable />} />
            <Route path="/settings" element={<TaskPage />} />
            <Route />
            <Route />
          </Routes>
          </div>
      </div>
    </div>
  </Router >
  );
}

export default App
