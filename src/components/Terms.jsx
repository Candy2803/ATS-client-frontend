import React, { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp, Shield, BookOpen, Users, AlertCircle, Scale, RefreshCw, Mail } from 'lucide-react';
import Sidebar from './SideBar';

const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(1);
  
  const handleAccept = () => {
    setAccepted(true);
    // Here you would typically proceed to the next step in your application
    console.log("Terms accepted!");
  };
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  const scrollToSection = (sectionNumber) => {
    setActiveSection(sectionNumber);
    setExpanded(true);
    
    // Find the section element and scroll to it
    const sectionElement = document.getElementById(`section-${sectionNumber}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const sections = [
    { id: 1, title: "Introduction", icon: <BookOpen size={18} /> },
    { id: 2, title: "Intellectual Property", icon: <Shield size={18} /> },
    { id: 3, title: "User Accounts", icon: <Users size={18} /> },
    { id: 4, title: "Limitation of Liability", icon: <AlertCircle size={18} /> },
    { id: 5, title: "Governing Law", icon: <Scale size={18} /> },
    { id: 6, title: "Changes to Terms", icon: <RefreshCw size={18} /> },
    { id: 7, title: "Contact Information", icon: <Mail size={18} /> }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-t-lg p-6 text-white">
            <h2 className="text-2xl font-bold">Terms and Conditions</h2>
            <p className="text-blue-100 mt-2">Please review our terms and conditions before proceeding</p>
          </div>
          
          <div className="bg-white rounded-b-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Table of Contents Sidebar */}
              <div className="md:w-1/3 bg-gray-50 p-4 border-r border-gray-200">
                <h3 className="font-medium text-gray-700 mb-3">Contents</h3>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button 
                        onClick={() => scrollToSection(section.id)}
                        className={`flex items-center w-full text-left p-2 rounded-lg text-sm ${
                          activeSection === section.id 
                            ? 'bg-blue-100 text-teal-700' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <span className="mr-2">{section.icon}</span>
                        <span>{section.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Main Content */}
              <div className="md:w-2/3 p-6">
                <div className={`text-sm text-gray-700 overflow-y-auto ${expanded ? 'max-h-96' : 'max-h-40'}`}>
                  <div id="section-1" className="scroll-mt-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center text-teal-800">
                      <BookOpen size={20} className="mr-2" />
                      1. Introduction
                    </h3>
                    <p className="mb-4 leading-relaxed">Welcome to our service. By using our platform, you agree to these Terms and Conditions in full. If you disagree with any part of these terms, please do not use our service.</p>
                  </div>
                  
                  <div id="section-2" className="mt-6 scroll-mt-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center text-teal-800">
                      <Shield size={20} className="mr-2" />
                      2. Intellectual Property
                    </h3>
                    <p className="mb-4 leading-relaxed">The content, organization, graphics, design, and other matters related to this site are protected under applicable copyrights and other proprietary laws. Copying, redistribution, use or publication of any such content is strictly prohibited.</p>
                  </div>
                  
                  <div id="section-3" className="mt-6 scroll-mt-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center text-teal-800">
                      <Users size={20} className="mr-2" />
                      3. User Accounts
                    </h3>
                    <p className="mb-4 leading-relaxed">When you create an account with us, you guarantee that the information you provide is accurate and complete. You are responsible for maintaining the confidentiality of your account and password.</p>
                  </div>
                  
                  <div id="section-4" className="mt-6 scroll-mt-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center text-teal-800">
                      <AlertCircle size={20} className="mr-2" />
                      4. Limitation of Liability
                    </h3>
                    <p className="mb-4 leading-relaxed">In no event shall we be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.</p>
                  </div>
                  
                  <div id="section-5" className="mt-6 scroll-mt-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center text-teal-800">
                      <Scale size={20} className="mr-2" />
                      5. Governing Law
                    </h3>
                    <p className="mb-4 leading-relaxed">These Terms shall be governed by the laws of the jurisdiction in which the company operates, without regard to its conflict of law provisions.</p>
                  </div>
                  
                  <div id="section-6" className="mt-6 scroll-mt-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center text-teal-800">
                      <RefreshCw size={20} className="mr-2" />
                      6. Changes to Terms
                    </h3>
                    <p className="mb-4 leading-relaxed">We reserve the right to modify these terms at any time. When we do, we will revise the updated date at the bottom of this page.</p>
                  </div>
                  
                  <div id="section-7" className="mt-6 scroll-mt-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center text-teal-800">
                      <Mail size={20} className="mr-2" />
                      7. Contact Information
                    </h3>
                    <p className="mb-4 leading-relaxed">If you have any questions about these Terms, please contact us at support@example.com.</p>
                  </div>
                </div>
                
                {!expanded && (
                  <div className="text-center mt-4 border-t border-gray-100 pt-4">
                    <button 
                      onClick={toggleExpand} 
                      className="text-teal-600 hover:text-teal-800 font-medium flex items-center mx-auto"
                    >
                      Read More <ChevronDown size={16} className="ml-1" />
                    </button>
                  </div>
                )}
                
                {expanded && (
                  <div className="text-center mt-4 border-t border-gray-100 pt-4">
                    <button 
                      onClick={toggleExpand} 
                      className="text-teal-600 hover:text-teal-800 font-medium flex items-center mx-auto"
                    >
                      Show Less <ChevronUp size={16} className="ml-1" />
                    </button>
                  </div>
                )}
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center mb-4">
                    <input 
                      type="checkbox" 
                      id="accept-terms" 
                      checked={accepted}
                      onChange={() => setAccepted(!accepted)}
                      className="mr-2 h-5 w-5 accent-teal-600 rounded"
                    />
                    <label htmlFor="accept-terms" className="text-gray-700">
                      I have read and agree to the Terms and Conditions
                    </label>
                  </div>
                  
                  <button 
                    className={`w-full py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center ${
                      accepted 
                        ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-md' 
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!accepted}
                    onClick={handleAccept}
                  >
                    {accepted ? (
                      <>
                        <CheckCircle size={18} className="mr-2" />
                        Proceed
                      </>
                    ) : 'Please Accept Terms to Continue'}
                  </button>
                  
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    Last updated: April 4, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;