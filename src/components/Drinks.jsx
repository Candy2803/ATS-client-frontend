import React from 'react';
import { useState } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import Sidebar from './SideBar'; 
import DetailModal from './Detail';

const DrinksComponent = () => {
    const [selectedItem, setSelectedItem] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
  const drinksItems = [
    {
      id: 1,
      name: 'Drink 1',
      price: 85.00,
      discountPrice: null,
      discountPercentage: null,
      image: 'https://plus.unsplash.com/premium_photo-1670270203164-aa65468a9c67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJpbmtzfGVufDB8fDB8fHww'
    },
    {
      id: 2,
      name: 'Drink 2',
      price: 85.00,
      discountPrice: 76.00,
      discountPercentage: 5,
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fHww'
    },
    {
      id: 3,
      name: 'Drink 3',
      price: 85.00,
      discountPrice: null,
      discountPercentage: null,
      image: 'https://plus.unsplash.com/premium_photo-1684952849219-5a0d76012ed2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 4,
      name: 'Drink 4',
      price: 85.00,
      discountPrice: null,
      discountPercentage: null,
      image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  const handleItemClick = (item) =>{
    setSelectedItem(item)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false);
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
        <h1 className="text-4xl font-bold flex-1">Drinks</h1>

          <div className="grid mt-5 grid-cols-2 gap-4">
            {drinksItems.map((item) => (
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
                          AED {item.price.toFixed(2)}
                        </span>
                        <span className="text-sm font-medium text-teal-500">
                          AED {item.discountPrice.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="text-sm font-medium text-teal-500">
                        AED {item.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                  {item.discountPercentage && (
                    <div className="mt-1">
                      <span className="text-xs text-teal-500">
                        {item.discountPercentage}% Discount
                      </span>
                    </div>
                  )}
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
    </div>
  );
};

export default DrinksComponent;