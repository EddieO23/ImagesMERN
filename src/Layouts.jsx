import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AppContext from './Context/AppContext'

function Layouts() {
const {name} = useContext(AppContext)

  return (
  <div className='relative h-screen overflow-hidden'>
    {name}
    <Navbar/>
    <Outlet/>
  </div>
  )
}

export default Layouts
