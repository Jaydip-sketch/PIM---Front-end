import React, { useEffect } from 'react'
import logo from "../assets/simple.jpg"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <Link to="/page1">
     <div>
      <img src={logo} className='w-50 h-25' alt="Logo" />
    </div>
    </Link>
   
  )
}

export default Home
