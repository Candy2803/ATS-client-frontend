import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

// First checkout page - Delivery options and payment methods
const CheckoutOptions = ({ onContinue, cartTotal = 153.00 }) => {
    
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    phoneNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    if (deliveryMethod === 'Delivery') {
      onContinue('delivery-address', formData);
    } else {
      onContinue('payment', formData);
    }
  };

  const isFormValid = () => {
    return (
      deliveryMethod && 
      paymentMethod && 
      formData.name.trim() !== '' && 
      formData.location.trim() !== '' && 
      formData.phoneNumber.trim() !== ''
    );
  };

  return (
    <div className="flex flex-col h-full bg-neutral-50">
      {/* Header */}
      <div className="bg-teal-500 p-4 text-white flex items-center">
        <button className="mr-2">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">Checkout</h1>
      </div>
      
      {/* Content */}
      <div className="flex-1 p-4 flex flex-col gap-4">
        {/* Delivery options */}
        <div className="bg-white p-4 rounded shadow-sm">
          <h2 className="font-medium mb-3">How would you like to receive your items?</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                className="mr-2 h-4 w-4 accent-teal-500"
                checked={deliveryMethod === 'Delivery'}
                onChange={() => setDeliveryMethod('Delivery')}
              />
              Delivery
            </label>
            
            <label className="flex items-center">
              <input
                type="radio"
                className="mr-2 h-4 w-4 accent-teal-500"
                checked={deliveryMethod === 'Eat in'}
                onChange={() => setDeliveryMethod('Eat in')}
              />
              Eat in
            </label>
            
            <label className="flex items-center">
              <input
                type="radio"
                className="mr-2 h-4 w-4 accent-teal-500"
                checked={deliveryMethod === 'Drive Through'}
                onChange={() => setDeliveryMethod('Drive Through')}
              />
              Drive Through
            </label>
            
            <label className="flex items-center">
              <input
                type="radio"
                className="mr-2 h-4 w-4 accent-teal-500"
                checked={deliveryMethod === 'Take away'}
                onChange={() => setDeliveryMethod('Take away')}
              />
              Take away
            </label>
          </div>
        </div>
        
        {/* Total and payment mode */}
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="flex justify-between font-medium mb-4">
            <span>Total</span>
            <span>AED {cartTotal.toFixed(2)}</span>
          </div>
          
          <h2 className="font-medium mb-3">Select payment mode</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                className="mr-2 h-4 w-4 accent-teal-500"
                checked={paymentMethod === 'Card'}
                onChange={() => setPaymentMethod('Card')}
              />
              Card
            </label>
            
            <label className="flex items-center">
              <input
                type="radio"
                className="mr-2 h-4 w-4 accent-teal-500"
                checked={paymentMethod === 'Cash'}
                onChange={() => setPaymentMethod('Cash')}
              />
              Cash
            </label>
            
            <label className="flex items-center">
              <input
                type="radio"
                className="mr-2 h-4 w-4 accent-teal-500"
                checked={paymentMethod === 'Online payment'}
                onChange={() => setPaymentMethod('Online payment')}
              />
              Online payment
            </label>
          </div>
        </div>
        
        {/* Contact info */}
        <div className="bg-white p-4 rounded shadow-sm space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          
          <div>
            <label className="block mb-1 font-medium">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter your address"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          
          <div>
            <label className="block mb-1 font-medium">Phone number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      </div>
      
      {/* Bottom button */}
      <div className="p-4 mt-auto">
        <button
          onClick={handleContinue}
          disabled={!isFormValid()}
          className="w-full bg-teal-500 text-white font-medium py-3 rounded disabled:bg-gray-300"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

// Second checkout page - Delivery address details
const DeliveryAddress = ({ onBack, onProceed, initialData = {} }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    buildingName: '',
    houseNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' && 
      formData.buildingName.trim() !== '' && 
      formData.houseNumber.trim() !== ''
    );
  };

  return (
    <div className="flex flex-col h-full bg-neutral-50">
      {/* Header */}
      <div className="bg-teal-500 p-4 text-white flex items-center">
        <button onClick={onBack} className="mr-2">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">Checkout</h1>
      </div>
      
      {/* Content */}
      <div className="flex-1 p-4">
        <div className="bg-white p-4 rounded shadow-sm mb-4">
          <h2 className="font-medium mb-4">Enter your delivery address</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Address</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            
            <div>
              <label className="block mb-1 font-medium">Building Name</label>
              <input
                type="text"
                name="buildingName"
                placeholder="Enter your address"
                value={formData.buildingName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            
            <div>
              <label className="block mb-1 font-medium">House Number</label>
              <input
                type="text"
                name="houseNumber"
                placeholder="Enter phone number"
                value={formData.houseNumber}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom button */}
      <div className="p-4 mt-auto">
        <button
          onClick={onProceed}
          disabled={!isFormValid()}
          className="w-full bg-teal-500 text-white font-medium py-3 rounded disabled:bg-gray-300"
        >
          Proceed to payment
        </button>
      </div>
    </div>
  );
};

// Main Checkout component to manage the checkout flow
const CheckoutFlow = () => {
    
  const [step, setStep] = useState('options');
  const [formData, setFormData] = useState({});

  const handleContinue = (nextStep, data) => {
    setFormData(data);
    setStep(nextStep);
  };

  const handleBack = () => {
    setStep('options');
  };

  const handleProceedToPayment = () => {
    // Here you would handle payment processing or navigation to payment page
    console.log('Proceeding to payment with data:', formData);
    // Additional payment processing logic
  };

  return (
    <div className="h-full">
      {step === 'options' && (
        <CheckoutOptions onContinue={handleContinue} />
      )}
      
      {step === 'delivery-address' && (
        <DeliveryAddress 
          onBack={handleBack} 
          onProceed={handleProceedToPayment}
          initialData={formData}
        />
      )}
    </div>
  );
};

export default CheckoutOptions;