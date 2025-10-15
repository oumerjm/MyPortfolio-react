import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectCard from './components/ProjectCard'


function App() {
 

  return (
    
     <div>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/projects' element = {<Projects />} />
          <Route path='/contact' element = {<Contact/>} />        
        </Routes>
      </div>
      
      <Footer />
     </div>
    
  )
}

export default App
