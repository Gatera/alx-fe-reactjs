import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddRecipeForm from "./components/AddRecipeForm"
import RecipeList from "./components/RecipeList"
import RecipeDetails from "./components/RecipeDetails"

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App
