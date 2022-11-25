import React from 'react'
import { useRoutes } from 'react-router-dom'

import Home from './pages/Home/index.jsx'

const AppRoutes = () => {
  const routers = [
    {
      path: '/',
      element: <Home />,
    },
  ]
  const elements = useRoutes(routers)
  return <>{elements}</>
}

export default AppRoutes
