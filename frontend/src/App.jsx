import { Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import About from './components/About'
function App() {
  const projects = [
    {
      img: ["../public/images/p1i1.png" , "../public/images/p2i2.png" , "../public/images/p3i3.png"],
      name: "CO-Z",
      description: "booking website with beautifull frontend",
      techStack: "React.js | node.js | express.js | mongodb"
    },
    {
      img: ["../public/images/p2i1.png" , "../public/images/p2i3.png" ,""],
      name: "Google docs clone",
      description: "Document making website with the real time colaboration functionality using web sockets",
      techStack: "React.js | node.js | Quill.js | Websockets"
    },
  ]
  

  return (
    <>
    <div className="bg-black min-h-screen">
    <Routes>
    
    <Route path="/" element={<Layout/>}>
       <Route path='/' element={<Home/>} />
       <Route path='/projects' element={<Projects data={projects} />} />
       <Route path='/skills' element={<Skills/>} />
       <Route path='/Contact' element={<Contact/>} />
       
       
    </Route>
    </Routes>


    </div>
 
      
   
    </>
  )
}

export default App
