import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null)
  const loadedRecipe = useLoaderData()

    // const { recipeId } = useParams()
    // const Recipe = useLoaderData()

    useEffect(() => {
      if (loadedRecipe) {
        setRecipe(loadedRecipe)
      } else {
        console.log("Not fetched");        
      }
    }, [loadedRecipe])

    if (!recipe) {
      return <div>Loading...</div>
    }

  return (
    <div>
      <div className="w-full bg-white shadow-sm rounded-lg text-left grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-1 md:col-span-2">
          <img src={recipe.image} alt="Recipe Image" className="w-full h-full" />
        </div>
        <div className="col-span-1 md:col-span-3 p-5 flex items-center">
          <div className="w-full">
            <h1 className="text-2xl font-bold uppercase">{recipe.title}</h1>
            <h3 className="text-gray-600 mt-2">{recipe.summary}</h3>
            <h2 className="text-xl font-bold mt-4 capitalize">instructions</h2>
            <p className="mt-2"><span className="font-bold">Cook Time:</span> {recipe.cookingTime}</p>
            <p className="mt-2"><span className="font-bold">Ingredients:</span> {recipe.ingredients.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

//loader function
export const recipeDetailsLoader = async ({ params }) => {
  const { recipeId } = params

  const res = await fetch('/data/data.json')

  //Check if the response is OK
  if (!res.ok) {
    throw new Error('Failed to fetch recipes');
  }

  const recipes = await res.json();

  //Find the specific recipe by recipeId
  const recipe = recipes.find(recipe => recipe.id === Number(recipeId));

  //Return the specific recipe or handle the case where it's not found
  if(!recipe) {
    throw new Error("Recipe not found");
  }

  return recipe;
}

export default RecipeDetail