import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Breakfast from './components/Breakfast';
import Appetizers from './components/Appetizers';
import Desserts from './components/Desserts';
import Drinks from './components/Drinks';
import ForKids from './components/ForKids';
import MainCourse from './components/MainCourse';
import Pasta from './components/Pasta';
import Soups from './components/Soups';
import DetailComponent from './components/Detail';
import { CartProvider } from './Contexts/CartContext';
import Cart from './components/ShoppingCart';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleBackClick = () => {
    setSelectedItem(null);
  };

  return (
    <CartProvider>
      {/* If an item is selected, show the detail view */}
      {selectedItem ? (
        <DetailComponent item={selectedItem} onBackClick={handleBackClick} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/breakfast" element={<Breakfast onItemClick={handleItemClick} />} />
            <Route path='/appetizers' element={<Appetizers onItemClick={handleItemClick} />} />
            <Route path='/desserts' element={<Desserts onItemClick={handleItemClick} />} />
            <Route path='/drinks' element={<Drinks onItemClick={handleItemClick} />} />
            <Route path='/forKids' element={<ForKids onItemClick={handleItemClick} />} />
            <Route path='/:mainCourse' element={<MainCourse onItemClick={handleItemClick} />} />
            <Route path='/pasta' element={<Pasta onItemClick={handleItemClick} />} />
            <Route path='/soups' element={<Soups onItemClick={handleItemClick} />} />
          </Routes>
        </Router>
      )}
      
      {/* Shopping Cart always visible */}
      <Cart />
    </CartProvider>
  );
}

export default App;