import React, { useState } from 'react';
import { Star, Send, User, Mail, MessageSquare } from 'lucide-react';
import Sidebar from './SideBar';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the data to your server here
    console.log({ name, email, rating, feedback });
    setSubmitted(true);
  };
  
  const resetForm = () => {
    setName('');
    setEmail('');
    setRating(0);
    setFeedback('');
    setSubmitted(false);
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-lg bg-white rounded-xl shadow-lg overflow-hidden">
          {!submitted ? (
            <>
              <div className="bg-teal-600 p-6 text-white">
                <h2 className="text-2xl font-bold text-center">Share Your Experience</h2>
                <p className="text-center text-blue-100 mt-2">Your feedback helps us improve our services</p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                  <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <User size={16} className="mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <Mail size={16} className="mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    Your Rating
                  </label>
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={36}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        fill={(hover || rating) >= star ? "#FFD700" : "none"}
                        stroke={(hover || rating) >= star ? "#FFD700" : "#CBD5E0"}
                        className="cursor-pointer mr-2 transition-all duration-200"
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-gray-600">
                      {rating ? `${rating} of 5 stars` : 'Select a rating'}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="feedback" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <MessageSquare size={16} className="mr-2" />
                    Your Feedback
                  </label>
                  <textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us what you liked or how we can improve..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center font-medium"
                >
                  <Send size={18} className="mr-2" />
                  Submit Feedback
                </button>
              </form>
            </>
          ) : (
            <div className="text-center p-8">
              <div className="bg-green-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Thank You!</h2>
              <p className="text-gray-600 mb-6 max-w-sm mx-auto">Your feedback has been submitted successfully. We appreciate your time and insights.</p>
              <button
                onClick={resetForm}
                className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg transition duration-300 inline-flex items-center"
              >
                Submit Another Response
              </button>
            </div>
          )}
          
          <div className="bg-gray-50 p-4 text-center text-xs text-gray-500">
            Your feedback is anonymous and will only be used to improve our services.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;