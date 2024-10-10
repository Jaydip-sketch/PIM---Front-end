import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
const Layout = () => {
  return (
    <>
      <SideBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
