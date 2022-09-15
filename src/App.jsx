import { useRoutes, BrowserRouter } from 'react-router-dom'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
import Home from './pages/Home/index.jsx'

function App() {
{/* <BrowserRouter> */}
  let element = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    // {
    //   path: '/game',
    //   element: <Game/>
    // }
  ])
  // </BrowserRouter>

  return <BrowserRouter>{element}</BrowserRouter>

  // return element
}

export default App
