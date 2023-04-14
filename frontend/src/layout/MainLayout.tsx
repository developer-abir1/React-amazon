import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavbarPage from '../shared/navbar/Navabar'
import { Container } from 'react-bootstrap'
import { Store } from '../Store'

const MainLayout = () => {
  const {
    state: { mode },
    dispatch,
  } = useContext(Store)
  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])
  return (
    <div className=" d-flex  flex-column vh-100     ">
      <header>
        <NavbarPage />
      </header>
      <Container className="mt-4">
        <Outlet />
      </Container>
      <footer>
        <div className=" text-center">All Right reversed &copy; 2023</div>
      </footer>
    </div>
  )
}

export default MainLayout
