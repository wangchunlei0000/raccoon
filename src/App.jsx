import React, { Suspense } from 'react'
import AppRoutes from './router'

function App() {
  return (
    <>
      <Suspense>
          <AppRoutes />
      </Suspense>
    </>
  )
}

export default App
