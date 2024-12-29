import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
        {/* Contest */}
        <div className='my-5 mx-48 flex-grow'>
        {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout