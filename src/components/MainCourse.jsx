import React from 'react';
import { useState } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import Sidebar from './SideBar'; 
import DetailModal from './Detail';

const MainCourseComponent = ({onItemClick}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

  const maincourseItems = [
    {
      id: 1,
      name: 'Main 1',
      price: 85.00,
      discountPrice: null,
      discountPercentage: null,
      image: 'https://plus.unsplash.com/premium_photo-1664391811784-53a136d9ab16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFpbiUyMGNvdXJzZSUyMG1lYWxzfGVufDB8fDB8fHww'
    },
    {
      id: 2,
      name: 'Main 2',
      price: 85.00,
      discountPrice: 76.00,
      discountPercentage: 5,
      image: 'https://plus.unsplash.com/premium_photo-1726761646155-97a2ca4f11ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1haW4lMjBjb3Vyc2UlMjBtZWFsc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 3,
      name: 'Main 3',
      price: 85.00,
      discountPrice: null,
      discountPercentage: null,
      image: 'https://plus.unsplash.com/premium_photo-1664392038033-e1f7054a3c59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1haW4lMjBjb3Vyc2UlMjBtZWFsc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 4,
      name: 'Main 4',
      price: 85.00,
      discountPrice: null,
      discountPercentage: null,
      image: 'https://media.istockphoto.com/id/515705844/photo/grilled-halibut-with-capers-olives-and-tomatoes.webp?a=1&b=1&s=612x612&w=0&k=20&c=UgVUuCA9-8i35p-7SuW86M6YGxkv-5pNwncKrODvEVk='
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
        <h1 className="text-4xl font-bold flex-1">Main Course</h1>

          <div className="grid mt-5 grid-cols-2 gap-4">
            {maincourseItems.map((item) => (
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
          isOpen={isModalOpen}
          onClose={closeModal}
          item={selectedItem}
        />
      )}
    </div>
  );
};

export default MainCourseComponent;