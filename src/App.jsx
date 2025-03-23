import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layouts from './Layouts'
import { AppContextProvider } from './Context/AppContext'
import ImageCard from './Components/ImageCard'
import ImageUploader from './Components/ImageUploader'


function App() {
  return (
    <AppContextProvider>
      <Router>
      <Routes>
        <Route path='/' element={<Layouts/>}>
        <Route path='/' element={<ImageCard/>}/>
        <Route path='/upload' element={<ImageUploader/>}/>
        </Route>
      </Routes>
    </Router>
    </AppContextProvider>
  )
}

export default App
