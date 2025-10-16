import { useState,useEffect } from 'react'

import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'



function App() {
 
  const[darkMode,setDarkMode] =useState(true)
  function colorSetter(){
    setColor(black)
  }
  useEffect(()=>{
    console.log("Page is mounted")
  },[])
  return (
    
     <div>
      <Header />
      <button onClick={colorSetter}>Change theme</button>
      <div className='container'>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/projects' element = {<Projects />} />
          <Route path='/contact' element = {<Contact/>} />        
          <Route path='*' element = {<NotFound/>} />
        </Routes>
      </div>
      
      <Footer />
     </div>
    
  )
}

export default App
