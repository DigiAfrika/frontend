import React, { useState, useEffect } from 'react';
import Tabs from './Tabs';
import LmsSection from './LmsSection';
import StorefrontSection from './StorefrontSection';
import { demoUserData } from '../../components/dashboard/data';
import { FaChalkboard, FaStore } from 'react-icons/fa'; // Icons for tabs
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.jpeg';

// --- Navbar component ---
const Navbar = () => {
    const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      {/* Added container div */}
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-[#065A2F]">
          <img src={Logo} className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]" />
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-[#065A2F] font-medium hover:text-[#F69704] transition-colors"
          >
            Features
          </a>
          <a
            href="#benefits"
            className="text-[#065A2F] font-medium hover:text-[#F69704] transition-colors"
          >
            Benefits
          </a>
          <a
            href="#impact"
            className="text-[#065A2F] font-medium hover:text-[#F69704] transition-colors"
          >
            Impact
          </a>
          <a
            href="#testimonials"
            className="text-[#065A2F] font-medium hover:text-[#F69704] transition-colors"
          >
            Success Stories
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate('/login')} className=" md:block px-4 py-2 text-[#065A2F] font-medium border border-[#065A2F] rounded-full hover:bg-[#065A2F] hover:text-white transition-colors">
            Log Out
          </button>
          {/* Add Mobile Menu Button here if needed */}
        </div>
      </div>
    </nav>
  );
};


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('lms'); // Default to LMS tab

  const tabs = [
    { name: 'lms', label: 'Learning & Mentorship', icon: FaChalkboard },
    { name: 'storefront', label: 'Storefront Setup', icon: FaStore },
  ];

  return (
    // Added padding top to account for a potential fixed navbar
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-[#065A2F] mb-6">Your Dashboard</h1>

        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-6"> {/* Added margin top */}
            {/* Pass user/setUser down if state is lifted */}
            {activeTab === 'lms' && <LmsSection /* user={user} setUserData={setUser} */ />}
            {activeTab === 'storefront' && <StorefrontSection user={demoUserData} /* setUserData={setUser} */ />}
          </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;