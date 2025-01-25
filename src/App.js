import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { Navbar,AppearCard,Body, MainHome, About, Registration, OtpVerification,ViewCategories } from './Component/AllComponent'

export default function App() {

  const [otpAuth, setOtpAuth] = useState(false)

  const PrivateOtpRoute = () => {
    return otpAuth ? <Outlet /> : <Navigate replace to='/registration' />
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Component */}
        <Route path='/Body' element={<Body />} />
        <Route path='/' element={<AppearCard />} />
        <Route path='/login' element={<MainHome />} />
        <Route path='/about' element={<About />} />
        <Route path='/ViewCategories' element={<ViewCategories />} />

        <Route path='/registration' element={<Registration setOtpAuth={setOtpAuth} />} />

        {/* Private Otp Component */}
        <Route path='/' element={<PrivateOtpRoute otpAuth={otpAuth} />}>
          <Route path='/OtpVerification/:userId' element={<OtpVerification />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
