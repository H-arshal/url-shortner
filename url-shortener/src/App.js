import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer'; 
import About from './components/About'; 
import Products from './components/Products'; 
import Techstack from './components/Techstack.jsx'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/techstack" element={<Techstack />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
