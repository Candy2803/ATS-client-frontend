import React, { useState } from 'react';
import { ArrowLeft, Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../Contexts/CartContext';

const DetailModal = ({ item, onClose, isOpen }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...item, quantity });
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-screen overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-lg font-semibold">Item Details</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4">
          <div className="mb-4">
            <img 
              src={item.image || "/api/placeholder/300/200"} 
              alt={item.name} 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{item.name}</h3>
            
            <div className="flex items-center space-x-2">
              {item.discountPrice ? (
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 line-through">AED {item.price.toFixed(2)}</span>
                  <span className="text-lg font-bold">AED {item.discountPrice.toFixed(2)}</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    {item.discountPercentage}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-lg font-bold">AED {item.price.toFixed(2)}</span>
              )}
            </div>
            
            <div>
              <h4 className="font-semibold mb-1">Description</h4>
              <p className="text-gray-600">
                {item.description || `Delicious ${item.name} made with fresh ingredients. Perfect for a delightful culinary experience.`}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Quantity</h4>
              <div className="flex items-center border rounded-lg w-fit">
                <button 
                  onClick={decrementQuantity}
                  className="p-2 hover:bg-gray-100 rounded-l-lg"
                  disabled={quantity <= 1}
                >
                  <Minus size={18} className={quantity <= 1 ? "text-gray-300" : "text-gray-600"} />
                </button>
                <span className="px-4 py-2 text-center">{quantity}</span>
                <button 
                  onClick={incrementQuantity}
                  className="p-2 hover:bg-gray-100 rounded-r-lg"
                >
                  <Plus size={18} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t">
          <button 
            onClick={handleAddToCart}
            className="w-full bg-teal-500 hover:bg-teal-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2"
          >
            <ShoppingBag size={18} />
            Add to Cart - AED {((item.discountPrice || item.price) * quantity).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;