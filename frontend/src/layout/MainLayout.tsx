import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarPage from '../shared/navbar/Navabar'

const MainLayout = () => {
  return (
    <div className=" d-flex  flex-column vh-100     ">
      <header>
        <NavbarPage />
      </header>
      <Outlet />
      <footer>
        <div className=" text-center">All Right reversed &copy; 2023</div>
      </footer>
    </div>
  )
}

export default MainLayout
