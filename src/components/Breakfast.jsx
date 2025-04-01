import React from 'react';
import { useState } from 'react';
import { Search, ArrowLeft, ShoppingBag } from 'lucide-react';
import Sidebar from './SideBar'; 
import DetailModal from './Detail';
import Cart from './ShoppingCart'; 
import { useLanguage } from '../App'; // Update with your correct path

const BreakfastComponent = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false); 
    const { texts } = useLanguage(); // Get the translations

    const breakfastItems = [
      {
        id: 1,
        name: texts.frenchCountrysideBreakfast || 'French countryside breakfast',
        price: 85.00,
        discountPrice: null,
        discountPercentage: null,
        image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnJlbmNoJTIwY291bnRyeXNpZGUlMjBicmVha2Zhc3R8ZW58MHx8MHx8fDA%3D'
      },
      {
        id: 2,
        name: texts.provencalBreakfast || 'Provencal Breakfast',
        price: 85.00,
        discountPrice: 76.00,
        discountPercentage: 5,
        image: 'https://images.unsplash.com/photo-1464306208223-e0b4495a5553?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UHJvdmVuY2FsJTIwQnJlYWtmYXN0fGVufDB8fDB8fHww'
      },
      {
        id: 3,
        name: texts.frenchCountrysideBreakfast || 'French countryside breakfast',
        price: 85.00,
        discountPrice: null,
        discountPercentage: null,
        image: 'https://plus.unsplash.com/premium_photo-1673903124474-84887625125e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UHJvdmVuY2FsJTIwQnJlYWtmYXN0fGVufDB8fDB8fHww'
      },
      {
        id: 4,
        name: texts.frenchCountrysideBreakfast || 'French countryside breakfast',
        price: 85.00,
        discountPrice: null,
        discountPercentage: null,
        image: 'https://plus.unsplash.com/premium_photo-1680370168410-b7a33ae2efc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UHJvdmVuY2FsJTIwQnJlYWtmYXN0fGVufDB8fDB8fHww'
      }
    ];

    const handleItemClick = (item) => {
      setSelectedItem(item);
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };
    
    const toggleCart = () => {
      setIsCartOpen(!isCartOpen);
    };

    return (
      <div className="flex h-screen bg-gray-100">
        <Sidebar />

        <div className="flex-1 flex flex-col md:ml-64">
          <div className="bg-teal-500 h-19.5 text-white p-4 flex items-center">
            <div className="md:hidden mr-4">
              <ArrowLeft size={24} />
            </div>
            <button className="ml-auto">
              <Search size={24} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            <h1 className="text-4xl font-bold">{texts.breakfast || 'Breakfast'}</h1>

            <div className="grid mt-5 grid-cols-2 gap-4">
              {breakfastItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-lg shadow overflow-hidden cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {item.name}
                    </h3>
                    <div className="mt-1 flex items-center">
                      {item.discountPrice ? (
                        <>
                          <span className="text-xs text-gray-500 line-through mr-1">
                            {texts.currencyAED || 'AED'} {item.price.toFixed(2)}
                          </span>
                          <span className="text-sm font-medium text-teal-500">
                            {texts.currencyAED || 'AED'} {item.discountPrice.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span className="text-sm font-medium text-teal-500">
                          {texts.currencyAED || 'AED'} {item.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedItem && (
          <DetailModal
            item={selectedItem} 
            isOpen={isModalOpen} 
            onClose={closeModal} 
          />
        )}

        <Cart isOpen={isCartOpen} onClose={toggleCart} />
      </div>
    );
};

export default BreakfastComponent;