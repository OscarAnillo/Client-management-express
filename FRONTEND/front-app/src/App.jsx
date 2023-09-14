import { Home } from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import { Project } from './Pages/project'


import './App.css'

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
