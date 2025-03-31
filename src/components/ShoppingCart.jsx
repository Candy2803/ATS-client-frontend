import React from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../Contexts/CartContext';

const Cart = () => {
  const { 
    cartItems, 
    totalPrice, 
    isCartOpen, 
    toggleCart, 
    updateQuantity, 
    removeFromCart, 
    clearCart 
  } = useCart();

  return (
    <>
      <div className="fixed bottom-4 right-4 z-10">
        <button 
          className="bg-teal-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center relative"
          onClick={toggleCart}
        >
          <ShoppingCart size={24} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </button>
      </div>

      <div className={`fixed inset-y-0 right-0 w-80 bg-white shadow-xl transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-20`}>
        <div className="flex flex-col h-full">
          <div className="bg-teal-500 h-19.5 text-white p-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button onClick={toggleCart} className="text-white">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Your cart is empty
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex border-b pb-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <div className="text-sm text-teal-500 font-medium">
                        AED {(item.discountPrice || item.price).toFixed(2)}
                      </div>
                      <div className="flex items-center mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-gray-200 p-1 rounded"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-200 p-1 rounded"
                        >
                          <Plus size={16} />
                        </button>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-red-500"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t p-4">
            <div className="flex justify-between font-semibold mb-4">
              <span>Total:</span>
              <span>AED {totalPrice.toFixed(2)}</span>
            </div>
            <button 
              className="w-full bg-teal-500 text-white py-3 rounded-lg font-medium disabled:bg-gray-300"
              disabled={cartItems.length === 0}
            >
              Checkout
            </button>
            {cartItems.length > 0 && (
              <button 
                onClick={clearCart}
                className="w-full text-red-500 py-2 mt-2 text-sm"
              >
                Clear Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;