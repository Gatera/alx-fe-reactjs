import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>
                {recipe.title}
              </Link>
            </h3>
            {/* Display other recipe details here */}
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;