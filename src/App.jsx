import React from 'react'
import Topbar from './component/Topbar'
import All from './component/All'
import Fsd from './component/Fsd'
import Ds from './component/Ds'
import Cyber from './component/Cyber'
import Career from './component/Career'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
function App() {
  
  return <>
  <BrowserRouter>
  <Topbar/>
  <Routes>
    <Route path='/all' element={<All/>}/>
    <Route path='/fsd' element={<Fsd/>}/>
    <Route path='/data' element={<Ds/>}/>
    <Route path='/cyber' element={<Cyber/>}/>
    <Route path='/others' element={<Career/>}/>
    <Route path='*' element={<Navigate to='/all'/>}/>

  </Routes>
  </BrowserRouter>
  
  
  </>
}

export default App
