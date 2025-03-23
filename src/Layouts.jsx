import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AppContext from './Context/AppContext'
import ImageModal from './Components/ImageModal'

function Layouts() {

  return (
  <div className='relative h-screen overflow-hidden'>
    {/* <Navbar/>
    <Outlet/> */}
    <ImageModal/>
  </div>
  )
}

export default Layouts
