import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile/*" element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Profile />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;