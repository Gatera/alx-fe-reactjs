import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddRecipeForm from "./components/AddRecipeForm"
import RecipeList from "./components/RecipeList"
import RecipeDetails from "./components/RecipeDetails"
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {

  return (
    <Router>
      <div className="App">
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App
