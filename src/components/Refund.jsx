import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../App'; // Adjust path as needed

const RefundPolicy = () => {
  const navigate = useNavigate();
  const { texts } = useLanguage();
  
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="bg-teal-500 text-white p-4 flex items-center">
        <button 
          onClick={() => navigate(-1)} 
          className="mr-4 hover:bg-teal-600 p-1 rounded-full"
        >
          <FaArrowLeft />
        </button>
        <h1 className="text-xl font-medium">{texts.refundPolicy || 'Refund policy'}</h1>
      </div>
      
      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto text-sm">
        <h2 className="font-bold mb-2">RETURNS</h2>
        <p className="mb-3">
          Our policy lasts 7 days. If 7 days have gone by 
          since your purchase, unfortunately, we can't 
          offer you a refund or exchange.
        </p>
        <p className="mb-3">
          To be eligible for a return, your item must be 
          unused and in the same condition that you 
          received it. It must also be in the original 
          packaging.
        </p>
        <p className="mb-3">
          Several types of goods are exempt from being 
          returned. Perishable goods such as food, 
          flowers, newspapers, or magazines cannot be 
          returned. We also do not accept products that 
          are intimate or sanitary goods, hazardous 
          materials, or flammable liquids or gases.
        </p>
        <p className="mb-3">
          Refunds will be done only through the Original 
          Mode of Payment.
        </p>
        
        <h3 className="font-bold mt-4 mb-2">Additional non-returnable items:</h3>
        <ul className="list-disc pl-6 mb-3">
          <li>Gift cards</li>
          <li>Downloadable software products</li>
          <li>Some health and personal care items</li>
        </ul>
        
        <p className="mb-3">
          To complete your return, we require a receipt or 
          proof of purchase.
        </p>
        <p className="mb-3">
          Please do not send your purchase back to the 
          manufacturer.
        </p>
        
        <h3 className="font-bold mt-4 mb-2">
          There are certain situations where only partial 
          refunds are granted: (If applicable)
        </h3>
        <ul className="list-disc pl-6 mb-3">
          <li>Book with obvious signs of use</li>
          <li>CD, DVD, VHS tape, software, video game, 
              cassette tape, or vinyl record that has been 
              opened.</li>
          <li>Any item not in its original condition, is 
              damaged or missing parts for reasons not 
              due to our error.</li>
          <li>Any item that is returned more than 30 
              days after delivery</li>
        </ul>
        
        <h3 className="font-bold mt-4 mb-2">Refunds (if applicable)</h3>
        <p className="mb-3">
          Once your return is received and inspected, we 
          will send you an email to notify you that we 
          have received your returned item. We will also 
          notify you of the approval or rejection of your 
          refund.
        </p>
        <p className="mb-3">
          If you are approved, then your refund will be 
          processed, and a credit will automatically be 
          applied to your credit card or original method of 
          payment, within a certain amount of days.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;