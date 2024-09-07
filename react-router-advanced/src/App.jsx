import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import React from 'react'
import About from './components/About'
import Home from './components/Home'
import Profile from './components/Profile'
import BlogPost from './components/BlogPost'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/*" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
        />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App
