import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { Navbar, Body, Login, About, Registration, OtpVerification } from './Component/AllComponent'

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
        <Route path='/' element={<Body />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />

        <Route path='/registration' element={<Registration setOtpAuth={setOtpAuth} />} />

        {/* Private Otp Component */}
        <Route path='/' element={<PrivateOtpRoute otpAuth={otpAuth} />}>
          <Route path='/OtpVerification/:userId' element={<OtpVerification />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
