import React from 'react'
import Recipe from './Recipe'
import recipes from "../data/recipes.json"

function HomePage() {
  return (
    <div>
        <div>
            {recipes.map((recipe) => {
                <Recipe recipe={recipe} key={recipe.id} />
            })}
        </div>
    </div>
  )
}

export default HomePage