import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Layouts/Navbar'

const Layouts = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layouts