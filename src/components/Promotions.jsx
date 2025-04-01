import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PromotionsPage = () => {
  const navigate = useNavigate();
  
  const promotions = [
    {
      id: 1,
      name: 'Vanilla shake',
      originalPrice: 85.00,
      discountedPrice: 35.00,
      discountPercent: 5,
      image: 'https://images.unsplash.com/photo-1734747643067-6d4e0f705a00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFuaWxsYSUyMG1pbGtzaGFrZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 2,
      name: 'Macaroons',
      originalPrice: 86.00,
      discountedPrice: 35.00,
      discountPercent: 5,
      image: 'https://media.istockphoto.com/id/1309632842/photo/green-macaroon-desserts-on-green-background-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=VQYOwm0x-Lm23iHtyPbDM4fcahzbaTw16zBzVZrtB-0='
    },
    {
      id: 3,
      name: 'Caramel shake',
      originalPrice: 85.00,
      discountedPrice: 76.00,
      discountPercent: 5,
      image: 'https://plus.unsplash.com/premium_photo-1695035006493-d4786478f2c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyYW1lbCUyMHNoYWtlfGVufDB8fDB8fHww'
    },
    {
      id: 4,
      name: 'Provencal Breakfast',
      originalPrice: 85.00,
      discountedPrice: 76.00,
      discountPercent: 5,
      image: 'https://images.unsplash.com/photo-1504708706948-13d6cbba4062?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvdmVuY2FsJTIwYnJlYWtmYXN0fGVufDB8fDB8fHww'
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-stone-100">
      {/* Header */}
      <header className="bg-teal-500 text-white py-4 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={() => navigate(-1)}
            className="mr-3"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold">Promotions</h1>
        </div>
        <button>
          <Search size={24} />
        </button>
      </header>

      {/* Content */}
      <div className="flex-1 p-4">
        <h2 className="text-lg font-bold mb-4">This Month's Promotions</h2>
        
        <div className="space-y-3">
          {promotions.map(promo => (
            <div key={promo.id} className="bg-white rounded-lg p-3 flex">
              <img 
                src={promo.image} 
                alt={promo.name}
                className="w-20 h-20 object-cover rounded-md mr-3" 
              />
              <div className="flex-1">
                <h3 className="font-semibold">{promo.name}</h3>
                <div className="flex items-center text-sm mt-1">
                  <span className="text-gray-400 line-through mr-2">AED {promo.originalPrice.toFixed(2)}</span>
                  <span className="text-teal-500 font-bold">AED {promo.discountedPrice.toFixed(2)}</span>
                </div>
                <div className="text-green-500 text-sm mt-1">
                  {promo.discountPercent}% Discount
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionsPage;