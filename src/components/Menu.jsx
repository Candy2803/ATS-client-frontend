import { useState } from "react";
import { FaSearch, FaHome, FaUtensils, FaCalendarAlt, FaShoppingCart } from "react-icons/fa";
import { useLanguage } from "../App"; // Update with your correct path
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from '../Contexts/CartContext';

const Menu = ({item}) => {
  const { texts } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...item, quantity });
  };

  const categories = [
    {
      id: "breakfast",
      name: "Breakfast",
      icon: "🍳", // Update with your actual paths
      items: [
        { id: 1, name: "Pancakes", price: 8.99, description: "Fluffy pancakes with maple syrup" },
        { id: 2, name: "Eggs Benedict", price: 12.99, description: "Poached eggs with hollandaise sauce" },
        { id: 3, name: "Avocado Toast", price: 9.99, description: "Whole grain toast with avocado spread" }
      ]
    },
    {
      id: "appetizers",
      name: "Appetizers",
      icon: "🍤",
      items: [
        { id: 4, name: "Bruschetta", price: 7.99, description: "Toasted bread with tomatoes and herbs" },
        { id: 5, name: "Calamari", price: 11.99, description: "Fried calamari with marinara sauce" },
        { id: 6, name: "Spring Rolls", price: 8.99, description: "Vegetable spring rolls with dipping sauce" }
      ]
    },
    {
      id: "soups-salad",
      name: "Soups and salads",
      icon: "🥗",
      items: [
        { id: 7, name: "Caesar Salad", price: 10.99, description: "Classic Caesar salad with croutons" },
        { id: 8, name: "Tomato Soup", price: 6.99, description: "Creamy tomato soup with basil" },
        { id: 9, name: "Greek Salad", price: 11.99, description: "Fresh Greek salad with feta cheese" }
      ]
    },
    {
      id: "main-course",
      name: "Main Course",
      icon: "🍽️",
      items: [
        { id: 10, name: "Grilled Salmon", price: 18.99, description: "Grilled salmon with lemon butter sauce" },
        { id: 11, name: "Steak", price: 24.99, description: "Ribeye steak with roasted vegetables" },
        { id: 12, name: "Pasta Primavera", price: 14.99, description: "Fresh pasta with seasonal vegetables" }
      ]
    },
    {
      id: "desserts",
      name: "Desserts",
      icon: "🍰",
      items: [
        { id: 13, name: "Chocolate Cake", price: 7.99, description: "Rich chocolate cake with ganache" },
        { id: 14, name: "Cheesecake", price: 8.99, description: "New York style cheesecake" },
        { id: 15, name: "Ice Cream Sundae", price: 6.99, description: "Vanilla ice cream with toppings" }
      ]
    },
    {
      id: "drinks",
      name: "Drinks",
      icon: "🥤",
      items: [
        { id: 16, name: "Lemonade", price: 3.99, description: "Fresh squeezed lemonade" },
        { id: 17, name: "Iced Tea", price: 3.49, description: "Homemade iced tea" },
        { id: 18, name: "Coffee", price: 4.99, description: "Freshly brewed coffee" }
      ]
    },
    {
      id: "for-kids",
      name: "For Kids",
      icon: "🧸",
      items: [
        { id: 19, name: "Chicken Nuggets", price: 6.99, description: "Chicken nuggets with fries" },
        { id: 20, name: "Mini Pizza", price: 7.99, description: "Personal sized cheese pizza" },
        { id: 21, name: "Mac & Cheese", price: 5.99, description: "Creamy macaroni and cheese" }
      ]
    }
  ];

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-teal-500 text-white">
        <div className="text-xl font-bold">
          {texts?.ourMenu || "Our Menu"}
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder={texts?.searchMenu || "Search menu..."}
            className="pl-8 pr-4 py-2 rounded-full text-gray-800 w-full focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
      </div>

      {/* Menu Categories */}
      <div className="flex-1 h-full">
        {activeCategory === null ? (
          <div className="p-2">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center p-4 mb-2 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-50"
                onClick={() => setActiveCategory(category.id)}
              >
                <Link to={`/${category.slug}`} className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-1">
                    <span className="text-4xl">{category.icon}</span>
                  </Link>
                <div className="font-medium text-lg">{category.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4">
            <button
              className="mb-4 flex items-center text-teal-600 font-medium"
              onClick={() => setActiveCategory(null)}
            >
              <span className="mr-1">←</span> Back to categories
            </button>

            <h2 className="text-xl font-bold mb-4">
              {categories.find(c => c.id === activeCategory)?.name}
            </h2>

            <div className="space-y-4">
              {categories
                .find(c => c.id === activeCategory)
                ?.items.map(item => (
                  <div key={item.id} className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between mb-1">
                      <div className="font-medium">{item.name}</div>
                      <div className="font-bold text-teal-600">${item.price.toFixed(2)}</div>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
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
                ))}
            </div>
          </div>
        )}
      </div>

      
    </div>
  );
};

export default Menu;