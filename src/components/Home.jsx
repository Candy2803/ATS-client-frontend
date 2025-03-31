import React, { useState } from 'react';
import { Home as HomeIcon, Menu as MenuIcon, User, ShoppingCart } from 'lucide-react';
import { FaBars, FaSearch } from "react-icons/fa";
import Sidebar from './SideBar';

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar - Fixed position on left side */}
      <div className={`fixed md:static left-0 top-0 h-full z-30 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col w-full md:ml-64">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-teal-500 h-19.5 text-white">
          <div className="flex items-center">
            <button className="mr-2 md:hidden" onClick={toggleSidebar}>
              <FaBars size={20} />
            </button>
          </div>
          <div className="flex items-center">
            <div className="mr-2 border border-white rounded px-1 flex items-center">
              <span className="mr-1">English</span>
              <span>▾</span>
            </div>
            <button className="mx-2">◯</button>
            <button>
              <FaSearch size={20} />
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 bg-white rounded-t-3xl overflow-y-auto">
          <div className="p-6">
            {/* Meal Categories */}
            <h2 className="font-bold text-lg mb-4">Meal categories</h2>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { name: 'Breakfast', icon: '🍳' },
                { name: 'Appetizers', icon: '🍤' },
                { name: 'Soup/salad', icon: '🥗' },
                { name: 'Main Course', icon: '🍽️' },
                { name: 'Desserts', icon: '🍰' },
                { name: 'Drinks', icon: '🥤' },
                { name: 'For Kids', icon: '🧸' },
                { name: 'Pasta', icon: '🍝' },
              ].map((category, index) => (
                <div key={index} className="flex flex-col items-center">
                  <a href='' className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-1">
                    <span className="text-2xl">{category.icon}</span>
                  </a>
                  <span className="text-xs text-center">{category.name}</span>
                </div>
              ))}
            </div>

            {/* Promotions */}
            <h2 className="font-bold text-lg mb-4">Promotions</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="border h-80 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWlsa3NoYWtlc3xlbnwwfHwwfHx8MA%3D%3D" alt="Milk shakes" className="w-full h-58 object-cover" />
                <div className="p-2">
                  <h3 className="font-bold">Milk shakes</h3>
                  <p className="text-xs text-gray-600">Banana, chocolate, strawberry, caramel, vanilla...</p>
                  <div className="mt-1 font-bold">AED 25.00</div>
                </div>
              </div>
              <div className="border h-80 rounded-lg overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1723759448747-1d174225e61f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXJ0aXNhbiUyMExhdHRlc3xlbnwwfHwwfHx8MA%3D%3D" alt="Artisan Lattes" className="w-full h-58 object-cover" />
                <div className="p-2">
                  <h3 className="font-bold">Artisan Lattes</h3>
                  <p className="text-xs text-gray-600">Vanilla, caramel, matcha...</p>
                  <div className="mt-1 font-bold">AED 20.00</div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Navigation - Only visible on mobile and tablet */}
        <nav className="md:hidden bg-white border-t border-gray-200 flex justify-between items-center px-8 py-2">
          <div className="flex flex-col items-center text-teal-500">
            <HomeIcon size={20} />
            <span className="text-xs mt-1">Home</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <MenuIcon size={20} />
            <span className="text-xs mt-1">Menu</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <User size={20} />
            <span className="text-xs mt-1">Profile</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <ShoppingCart size={20} />
            <span className="text-xs mt-1">Cart</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;