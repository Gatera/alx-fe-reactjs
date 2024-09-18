import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import Search from './components/Search'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='search' element={<Search />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App