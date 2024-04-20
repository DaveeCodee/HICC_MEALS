import React, { useState, Fragment } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'


const App = () => {

  const [showLogin ,setShowLogin] = useState(false)


  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin} />:<></>}
    
    <div >
      <Navbar setShowLogin={setShowLogin}/>
      <div className='app'>
      <Routes>
        < Route path='/' element={<Home/>} />
        < Route path='/cart' element={<Cart />} />
        < Route  path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
    </div>
    <Footer />
    </>
    
  )
}

export default App
