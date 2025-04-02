import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './SideBar'; // Adjust path as needed

const Reservation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
    specialRequests: ''
  });
  
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    
    if (!formData.time) {
      newErrors.time = 'Time is required';
    }
    
    return newErrors;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log('Submitting reservation:', formData);
    
    // Store submitted data for modal display
    setSubmittedData({...formData});
    
    // Show success message
    setIsSubmitted(true);
  };

  const handleBackToMenu = () => {
    setIsSubmitted(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Reset the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: 1,
      specialRequests: ''
    });
    setErrors({});
    
    // Navigate to homepage
    navigate('/');
  };

  const renderCheckmark = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="white" 
      className="w-10 h-10"
    >
      <path 
        fillRule="evenodd" 
        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" 
        clipRule="evenodd" 
      />
    </svg>
  );

  const renderSuccessMessage = () => (
    <div className="flex flex-col items-center h-full pt-10">
      <div className="relative">
        {/* Green dots around the checkmark circle */}
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 10 + 5;
          const angle = (i / 20) * Math.PI * 2;
          const distance = 80 + Math.random() * 20;
          const top = Math.sin(angle) * distance + 50;
          const left = Math.cos(angle) * distance + 50;
          
          return (
            <div 
              key={i}
              className="absolute rounded-full bg-green-200"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}px`,
                left: `${left}px`,
                opacity: Math.random() * 0.5 + 0.3
              }}
            />
          );
        })}
        
        {/* Turquoise circle with checkmark */}
        <div className="relative bg-teal-500 rounded-full w-24 h-24 flex items-center justify-center z-10">
          {renderCheckmark()}
        </div>
      </div>
      
      <div className="text-center mt-10 mb-10">
        <p className="font-bold text-lg">Your reservation has been made</p>
        <p className="font-bold text-lg">successfully</p>
      </div>
      
      <button 
        className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-full w-64"
        onClick={handleBackToMenu}
      >
        Back to menu
      </button>
    </div>
  );

  const renderModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 m-4 max-w-lg w-full">
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-xl font-semibold text-teal-500">Reservation Details</h3>
          <button 
            onClick={handleCloseModal}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div className="py-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{submittedData?.name}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{submittedData?.email}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">{submittedData?.phone}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Date & Time</p>
              <p className="font-medium">
                {submittedData?.date ? formatDate(submittedData.date) : ''} at {submittedData?.time}
              </p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Number of Guests</p>
              <p className="font-medium">
                {submittedData?.guests} {submittedData?.guests === 1 ? 'guest' : 'guests'}
              </p>
            </div>
            
            {submittedData?.specialRequests && (
              <div>
                <p className="text-sm text-gray-500">Special Requests</p>
                <p className="font-medium">{submittedData?.specialRequests}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-end pt-3 border-t">
          <button
            onClick={handleCloseModal}
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar component */}
      <Sidebar />
      
      {/* Main content with proper spacing to account for sidebar */}
      <div className="flex-1 md:ml-64">
        <div className="max-w-3xl mx-auto p-6">
          {/* Page header */}
          <div className="bg-teal-500 p-6 rounded-t-lg shadow-md mb-1">
            <h1 className="text-2xl font-bold text-white">Table Reservation</h1>
            <p className="text-teal-100">Book your dining experience with us</p>
          </div>
          
          {/* Reservation form or success message */}
          <div className={`bg-white p-6 rounded-b-lg shadow-md ${isSubmitted ? 'min-h-[500px]' : ''}`}>
            {isSubmitted ? (
              renderSuccessMessage()
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-lg ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-gray-700 font-bold mb-2">Time</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-lg ${errors.time ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="guests" className="block text-gray-700 font-bold mb-2">Number of Guests</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                    ))}
                    <option value="9">9+ guests</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="specialRequests" className="block text-gray-700 font-bold mb-2">Special Requests</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    rows="3"
                    placeholder="Any special requests or dietary restrictions?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
                >
                  Reserve Table
                </button>
              </form>
            )}
          </div>
          
          {/* Additional information about reservations */}
          {!isSubmitted && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-700 mb-3">Reservation Information</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Reservations must be made at least 2 hours in advance
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  For parties larger than 8, please call us directly
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Your table will be held for 15 minutes past your reservation time
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  You'll receive a confirmation email with your reservation details
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Modal for reservation details */}
      {showModal && renderModal()}
    </div>
  );
};

export default Reservation;