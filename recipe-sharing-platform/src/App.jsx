import './App.css'
import HomePage from './components/HomePage'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import NotFound from './components/NotFound'
import RecipeDetail, { recipeDetailsLoader } from './components/RecipeDetail'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path=':recipeId' element={<RecipeDetail />} loader={recipeDetailsLoader} />

      <Route path='*' element={<NotFound />} /> 
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App