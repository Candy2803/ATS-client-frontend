import './App.css'
import React, { useState, createContext, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Breakfast from './components/Breakfast';
import Appetizers from './components/Appetizers';
import Desserts from './components/Desserts';
import Drinks from './components/Drinks';
import ForKids from './components/ForKids';
import MainCourse from './components/MainCourse';
import Pasta from './components/Pasta';
import Soups from './components/Soups';
import DetailComponent from './components/Detail';
import { CartProvider } from './Contexts/CartContext';
import Cart from './components/ShoppingCart';
import PromotionsPage from './components/Promotions';
import Menu from './components/Menu';
import Reservation from './components/Reservations';

export const LanguageContext = createContext();

export const translations = {
  en: {
    menu: "Menu",
    home: "Home",
    ourMenu: "Our menu",
    promotions: "Promotions",
    myOrders: "My Orders",
    aboutUs: "About us",
    refundPolicy: "Refund Policy",
    termsAndConditions: "Terms and conditions",
    reservationForm: "Reservation form",
    feedbackForm: "Feedback form",
    
    search: "Search",
    mealCategories: "MEAL CATEGORIES",
    breakfast: "Breakfast",
    appetizers: "Appetizers",
    soupSalad: "Soup/salad",
    mainCourse: "Main Course",
    desserts: "Desserts",
    drinks: "Drinks",
    forKids: "For Kids",
    pasta: "Pasta",
    showAll: "Show All",
    milkshakes: "Milk shakes",
    milkshakesFlavors: "Banana, chocolate, strawberry, caramel, vanilla...",
    artisanLattes: "Artisan Lattes",
    lattesFlavors: "Vanilla, caramel, matcha...",

    breakfast: "Breakfast",
    frenchCountrysideBreakfast: "French countryside breakfast",
    provencalBreakfast: "Provencal Breakfast",
    currencyAED: "AED",

    Appetizer1: 'Appetizer 1',
      Appetizer2: 'Mozzarella Sticks',
      Appetizer3: 'Garlic Bread',
      Appetizer4: 'Stuffed Mushrooms'
  },
  fr: {
    menu: "Menu",
    home: "Accueil",
    ourMenu: "Notre menu",
    promotions: "Promotions",
    myOrders: "Mes commandes",
    aboutUs: "À propos de nous",
    refundPolicy: "Politique de remboursement",
    termsAndConditions: "Termes et conditions",
    reservationForm: "Formulaire de réservation",
    feedbackForm: "Formulaire de commentaires",
    
    search: "Rechercher",
    mealCategories: "CATÉGORIES DE REPAS",
    breakfast: "Petit-déjeuner",
    appetizers: "Entrées",
    soupSalad: "Soupe/salade",
    mainCourse: "Plat principal",
    desserts: "Desserts",
    drinks: "Boissons",
    forKids: "Pour enfants",
    pasta: "Pâtes",
    showAll: "Voir tout",
    milkshakes: "Milk-shakes",
    milkshakesFlavors: "Banane, chocolat, fraise, caramel, vanille...",
    artisanLattes: "Lattés artisanaux",
    lattesFlavors: "Vanille, caramel, matcha...",

    breakfast: "Petit-déjeuner",
    frenchCountrysideBreakfast: "Petit-déjeuner campagnard français",
    provencalBreakfast: "Petit-déjeuner provençal",
    currencyAED: "AED",

    Appetizer: 'Entrées',
    Appetizer1: 'Bruschetta',
    Appetizer2: 'Bâtonnets de Mozzarella',
    Appetizer3: 'Pain à l\'Ail',
    Appetizer4: 'Champignons Farcis'
  },
  es: {
    menu: "Menú",
    home: "Inicio",
    ourMenu: "Nuestro menú",
    promotions: "Promociones",
    myOrders: "Mis pedidos",
    aboutUs: "Sobre nosotros",
    refundPolicy: "Política de reembolso",
    termsAndConditions: "Términos y condiciones",
    reservationForm: "Formulario de reserva",
    feedbackForm: "Formulario de comentarios",
    
    search: "Buscar",
    mealCategories: "CATEGORÍAS DE COMIDA",
    breakfast: "Desayuno",
    appetizers: "Aperitivos",
    soupSalad: "Sopa/ensalada",
    mainCourse: "Plato principal",
    desserts: "Postres",
    drinks: "Bebidas",
    forKids: "Para niños",
    pasta: "Pasta",
    showAll: "Ver todo",
    milkshakes: "Batidos",
    milkshakesFlavors: "Plátano, chocolate, fresa, caramelo, vainilla...",
    artisanLattes: "Lattes artesanales",
    lattesFlavors: "Vainilla, caramelo, matcha...",

    breakfast: "Desayuno",
    frenchCountrysideBreakfast: "Desayuno campestre francés",
    provencalBreakfast: "Desayuno provenzal",
    currencyAED: "AED",

    Appetizer: 'Entrantes',
    Appetizer1: 'Bruschetta',
    Appetizer2: 'Palitos de Mozzarella',
    Appetizer3: 'Pan de Ajo',
    Appetizer4: 'Champiñones Rellenos'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [texts, setTexts] = useState(translations.en);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setTexts(translations[lang]);
    localStorage.setItem("preferredLanguage", lang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage && translations[savedLanguage]) {
      changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, texts, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleBackClick = () => {
    setSelectedItem(null);
  };

  return (
    <LanguageProvider>
      <CartProvider>
        {/* If an item is selected, show the detail view */}
        {selectedItem ? (
          <DetailComponent item={selectedItem} onBackClick={handleBackClick} />
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/breakfast" element={<Breakfast onItemClick={handleItemClick} />} />
              <Route path='/appetizers' element={<Appetizers onItemClick={handleItemClick} />} />
              <Route path='/desserts' element={<Desserts onItemClick={handleItemClick} />} />
              <Route path='/drinks' element={<Drinks onItemClick={handleItemClick} />} />
              <Route path='/forKids' element={<ForKids onItemClick={handleItemClick} />} />
              <Route path='/:mainCourse' element={<MainCourse onItemClick={handleItemClick} />} />
              <Route path='/pasta' element={<Pasta onItemClick={handleItemClick} />} />
              <Route path='/soups' element={<Soups onItemClick={handleItemClick} />} />
              <Route path='/promotions' element={<PromotionsPage />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/reservation' element={<Reservation />} />
            </Routes>
          </Router>
        )}
        
        <Cart />
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;