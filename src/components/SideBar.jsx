import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useLanguage } from "../App"; // Update with your correct path

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { language, texts, changeLanguage } = useLanguage();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  // Close the sidebar on mobile when a link is clicked
  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Semi-transparent overlay when sidebar is open on mobile */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <div className="relative">
        {isMobile && (
          <button 
            className="text-teal-500 p-2 fixed top-4 left-4 z-50 bg-white shadow-lg rounded-full" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        )}
        
        <div 
          className={`fixed top-0 left-0 h-full w-64 bg-white transition-transform duration-300 z-50 ${
            isMobile 
              ? (isOpen ? "translate-x-0" : "-translate-x-full") 
              : "translate-x-0"
          }`}
        >
          <div className="p-6 flex items-center justify-between h-19.5 bg-teal-500 border-gray-200">
            <div className="flex items-center gap-3">
              <div className="flex -mt-1 flex-col space-y-1">
                <div className="w-7 h-1 bg-white rounded"></div>
                <div className="w-5 h-1 bg-white rounded"></div>
                <div className="w-3 h-1 bg-white rounded"></div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white -ml-6 text-sm">ATS</span>
                <span className="text-white -mt-2 font-bold text-xl">{texts.menu}</span>
              </div>
            </div>
            
            {/* Added dedicated close button */}
            {isMobile && (
              <button 
                className="text-white p-1 rounded-full hover:bg-teal-600 transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
            )}
          </div>

          <div className="p-4 flex items-center gap-2">
            <FaGlobe className="text-gray-600" />
            <select 
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
            </select>
          </div>

          <div className="overflow-y-auto h-[calc(100%-130px)]">
            <nav className="p-4 space-y-7">
              <Link to="/" className="block text-gray-700 hover:text-teal-600 font-medium" onClick={handleLinkClick}>{texts.home}</Link>
              <Link to="/menu" className="block text-gray-700 hover:text-teal-600 font-medium" onClick={handleLinkClick}>{texts.ourMenu}</Link>
              <Link to="/promotions" className="block text-gray-700 hover:text-teal-600 font-medium" onClick={handleLinkClick}>{texts.promotions}</Link>
            </nav>

            <div className="p-4 space-y-7">
              <Link to="/about" className="block text-gray-700 hover:text-teal-600 font-medium" onClick={handleLinkClick}>{texts.aboutUs}</Link>
              <Link to="/refund" className="block text-gray-700 hover:text-teal-600 font-medium" onClick={handleLinkClick}>{texts.refundPolicy}</Link>
              <Link to="/terms" className="block text-gray-700 hover:text-teal-600 font-medium" onClick={handleLinkClick}>{texts.termsAndConditions}</Link>
            </div>

            <div className="p-4 space-y-7">
              <Link to="/reservation" className="block text-gray-700 hover:text-teal-600 font-medium" onClick={handleLinkClick}>{texts.reservationForm}</Link>
              <Link to="/feedback" className="block text-gray-700 hover:text-teal-600 font-medium" onClick={handleLinkClick}>{texts.feedbackForm}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;