import React, { useState } from 'react';
import { FaBars, FaSearch, FaArrowRight } from "react-icons/fa";
import Sidebar from './SideBar';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../App'; // Update with your correct path

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { texts } = useLanguage(); // Get the texts from language context

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  // Updated meal categories with translation keys
  const mealCategories = [
    { name: texts.breakfast || 'Breakfast', icon: '🍳', slug: 'breakfast' },
    { name: texts.appetizers || 'Appetizers', icon: '🍤', slug: 'appetizers' },
    { name: texts.soupSalad || 'Soup/salad', icon: '🥗', slug: 'soups' },
    { name: texts.mainCourse || 'Main Course', icon: '🍽️', slug: 'mainCourse' },
    { name: texts.desserts || 'Desserts', icon: '🍰', slug: 'desserts' },
    { name: texts.drinks || 'Drinks', icon: '🥤', slug: 'drinks' },
    { name: texts.forKids || 'For Kids', icon: '🧸', slug: 'forKids' },
    { name: texts.pasta || 'Pasta', icon: '🍝', slug: 'pasta' },
  ];

  const handleShowAllPromotions = () => {
    navigate('/promotions');
  };

  return (
    <div className="flex h-screen">
      {/* Updated sidebar container */}
      <div className={`fixed md:static left-0 top-0 h-full z-30 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar />
      </div>
      
      <div className="flex flex-col w-full md:ml-64">
        <header className="flex items-center justify-between p-4 bg-teal-500 h-19.5 text-white">
          <div className="flex items-center">
            <div className="flex ml-10 flex-col md:hidden">
              <span className="text-white text-xs">ATS</span>
              <span className="text-white font-bold">{texts.menu || 'Menu'}</span>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="text" placeholder={texts.search || 'Search'} className='bg-white placeholder-gray-500 mr-4 h-10 rounded-2xl'></input>
            <button className='mr-10'>
              <FaSearch size={20} />
            </button>
          </div>
        </header>

        <main className="flex-1 bg-white rounded-t-3xl overflow-y-auto">
          <div className="p-6">
            <h2 className="font-bold text-lg mb-4">{texts.mealCategories || 'MEAL CATEGORIES'}</h2>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {mealCategories.map((category, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Link to={`/${category.slug}`} className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-1">
                    <span className="text-4xl">{category.icon}</span>
                  </Link>
                  <span className="text-xs text-center">{category.name}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">{texts.promotions || 'Promotions'}</h2>
              <button 
                onClick={handleShowAllPromotions}
                className="flex items-center text-teal-500 font-medium text-sm"
              >
                {texts.showAll || 'Show All'}
                <FaArrowRight className="ml-1" size={12} />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              <div className="border h-80 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWlsa3NoYWtlc3xlbnwwfHwwfHx8MA%3D%3D" alt={texts.milkshakes || 'Milk shakes'} className="w-full h-58 object-cover" />
                <div className="p-2">
                  <h3 className="font-bold">{texts.milkshakes || 'Milk shakes'}</h3>
                  <p className="text-xs text-gray-600">{texts.milkshakesFlavors || 'Banana, chocolate, strawberry, caramel, vanilla...'}</p>
                  <div className="mt-1 font-bold">AED 25.00</div>
                </div>
              </div>
              <div className="border h-80 rounded-lg overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1723759448747-1d174225e61f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXJ0aXNhbiUyMExhdHRlc3xlbnwwfHwwfHx8MA%3D%3D" alt={texts.artisanLattes || 'Artisan Lattes'} className="w-full h-58 object-cover" />
                <div className="p-2">
                  <h3 className="font-bold">{texts.artisanLattes || 'Artisan Lattes'}</h3>
                  <p className="text-xs text-gray-600">{texts.lattesFlavors || 'Vanilla, caramel, matcha...'}</p>
                  <div className="mt-1 font-bold">AED 20.00</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;