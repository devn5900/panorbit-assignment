import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Profile from '../pages/Profile'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/profile/:userId' element={<Profile/>} />
    </Routes>
  )
}

export default MainRoute