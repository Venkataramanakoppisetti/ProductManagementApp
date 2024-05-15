// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import ProductListPage from './pages/ProductListPage';
import AddProductPage from './pages/AddProductPage';

const App = () => {
  return (
    <Router>
      <ProductProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/add" element={<AddProductPage />} />
          </Routes>
        </div>
      </ProductProvider>
    </Router>
  );
};

export default App;
