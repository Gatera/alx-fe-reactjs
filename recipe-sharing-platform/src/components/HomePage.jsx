import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function HomePage() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    //Fetching data from the data.json file
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/data/data.json')
        const data = await response.json()
        setRecipes(data)
      } catch (error) {
        console.error("Error loading recipes:", error)
      }
    }

    fetchRecipes()
  }, [])

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {recipes.map((recipe) => (
          <Link to={`${recipe.id}`}>
            <div className='w-full bg-white shadow-sm rounded-lg text-left hover:shadow-lg duration-300'>
              <div className='w-full'>
                <div style={{backgroundImage: `url(${recipe.image})`}} className='w-full h-40 rounded-t-lg bg-no-repeat bg-center bg-cover'></div>
              </div>
              <div className='p-5'>
                <h3 className='text-lg'>{recipe.title}</h3>
                <p className='text-sm text-gray-600 mt-2'>{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage