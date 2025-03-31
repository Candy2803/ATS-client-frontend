import React from 'react';
import { useState } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import Sidebar from './SideBar'; 
import DetailModal from './Detail';

const KidsComponent = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const kidsItems = [
    {
      id: 1,
      name: 'Fries',
      price: 85.00,
      discountPrice: null,
      discountPercentage: null,
      image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 2,
      name: 'Chicken Nuggets',
      price: 85.00,
      discountPrice: 76.00,
      discountPercentage: 5,
      image: 'https://images.unsplash.com/photo-1627662055487-551888db3aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMG51Z2dldHN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 3,
      name: 'Special Combo',
      price: 85.00,
      discountPrice: null,
      discountPercentage: null,
      image: 'https://plus.unsplash.com/premium_photo-1685317639083-ae6bc4bdf5bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZXMlMjBhbmQlMjBtaWxrc2hha2UlMjBjb21ib3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 4,
      name: 'Burger',
      price: 85.00,
      discountPrice: null,
      discountPercentage: null,
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8fDB8fHww'
    }
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
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
        <h1 className="text-4xl font-bold flex-1">Kids</h1>

          <div className="grid mt-5 grid-cols-2 gap-4">
            {kidsItems.map((item) => (
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

export default KidsComponent;