import React from 'react';
import { useState } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import Sidebar from './SideBar'; 
import DetailModal from './Detail';


const AppetizersComponent = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const appetizersItems = [
    {
      id: 1,
      name: 'Appetizer 1',
      price: 85.00,
      discountPrice: null,
      discountPercentage: null,
      image: 'https://plus.unsplash.com/premium_photo-1668031802460-89952ecb00f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwZXRpemVyc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 2,
      name: 'Appetizer 2',
      price: 85.00,
      discountPrice: 76.00,
      discountPercentage: 5,
      image: 'https://images.unsplash.com/photo-1607098665874-fd193397547b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwZXRpemVyc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 3,
      name: 'Appetizer 3',
      price: 85.00,
      discountPrice: null,
      discountPercentage: null,
      image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwZXRpemVyc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 4,
      name: 'Appetizer 4',
      price: 85.00,
      discountPrice: null,
      discountPercentage: null,
      image: 'https://images.unsplash.com/photo-1549203386-9d4394c8a2fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFwcGV0aXplcnN8ZW58MHx8MHx8fDA%3D'
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
        <h1 className="text-4xl font-bold flex-1">Appetizers</h1>

          <div className="grid mt-5 grid-cols-2 gap-4">
            {appetizersItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden" onClick={() => handleItemClick(item)}>
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

export default AppetizersComponent;