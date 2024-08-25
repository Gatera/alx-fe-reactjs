import useRecipeStore from "../recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === recipeId)
    );

    if(!recipe) return <div>Recipe not found</div>;

    console.log('Recipe ID:', recipeId);
    console.log('Retrieved Recipe', recipe);

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} />
        </div>
    );
};

export default RecipeDetails;