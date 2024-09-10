import React, { useState, useEffect } from 'react'
import Recipe from './Recipe'


function HomePage() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    //Fetching data from the data.json file
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/data/recipes.json')
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
          <Recipe recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  )
}

export default HomePage