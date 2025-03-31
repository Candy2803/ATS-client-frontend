import React from 'react';
import { useState } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import Sidebar from './SideBar'; 
import DetailModal from './Detail';

const SoupComponent = () => {
    const [selectedItem, setSelectedItem] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
  const soupItems = [
    {
      id: 1,
      name: 'Soup 1',
      price: 85.00,
      discountPrice: null,
      discountPercentage: null,
      image: 'https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291cHN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 2,
      name: 'Salad 1',
      price: 85.00,
      discountPrice: 76.00,
      discountPercentage: 5,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 3,
      name: 'Soup 2',
      price: 85.00,
      discountPrice: null,
      discountPercentage: null,
      image: 'https://images.unsplash.com/photo-1616501268826-ee9731c915d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvdXBzfGVufDB8fDB8fHww'
    },
    {
      id: 4,
      name: 'Salad 2',
      price: 85.00,
      discountPrice: null,
      discountPercentage: null,
      image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWR8ZW58MHx8MHx8fDA%3D'
    }
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
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
        <h1 className="text-4xl font-bold flex-1">Soups and Salads</h1>

          <div className="grid mt-5 grid-cols-2 gap-4">
            {soupItems.map((item) => (
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

export default SoupComponent;