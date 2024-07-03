import { Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import About from './components/About'
function App() {

  return (
    <>
    <div className="bg-black min-h-screen">
    <Routes>
    
    <Route path="/" element={<Layout/>}>
       <Route path='/' element={<Home/>} />
       <Route path='/projects' element={<Projects/>} />
       <Route path='/skills' element={<Skills/>} />
       <Route path='/Contact' element={<Contact/>} />
       <Route path='/about' element={<About/>} />
       
    </Route>
    </Routes>


    </div>
 
      
   
    </>
  )
}

export default App
