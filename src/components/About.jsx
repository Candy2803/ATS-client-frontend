import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../App'; // Adjust path as needed

const AboutUs = () => {
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
        <h1 className="text-xl font-medium">{texts.aboutUs || 'About us'}</h1>
      </div>
      
      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="font-bold mb-2">ATS is a new place in town!!!</h2>
        <p className="mb-4">
          We understand how people interact in the 
          digital space. The ATS team is a diverse medley 
          of right-and left-brain thinkers; we are 
          strategists, designers, sociologists, 
          programmers, digital engineers and above all, 
          innovators. The combination of talent fosters a 
          rare level of insight, enabling us to build 
          exceptional experiences for effective brand 
          communication.
        </p>
        <p className="mt-6 font-medium">
          Founder of eMENU
        </p>
      </div>
    </div>
  );
};

export default AboutUs;