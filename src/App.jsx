import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layouts from './Layouts'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layouts/>}>
        <Route path='/upload' element={<h1>Hello, this is the upload route</h1>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
