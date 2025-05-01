import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaRobot,
  FaUsers,
  FaMobileAlt,
  FaStore,
  FaChevronRight,
  FaArrowRight,
  FaEnvelope,
  FaTwitter, // Added for Footer
  FaLinkedin, // Added for Footer
  FaInstagram, // Added for Footer
} from "react-icons/fa";
import {
  BsLightningCharge,
  BsCurrencyDollar,
  BsGlobe,
} from "react-icons/bs";

// --- Navbar component ---
const Navbar = () => {
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
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      {/* Added container div */}
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-[#065A2F]">
          DigiAfrika
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
          <button className="hidden md:block px-4 py-2 text-[#065A2F] font-medium border border-[#065A2F] rounded-full hover:bg-[#065A2F] hover:text-white transition-colors">
            Log In
          </button>
          <button className="px-4 py-2 bg-[#F69704] text-white font-medium rounded-full hover:bg-opacity-90 transition-colors">
            Sign Up
          </button>
          {/* Add Mobile Menu Button here if needed */}
        </div>
      </div>
    </nav>
  );
};

// --- Hero Section Component ---
const HeroSection = () => {
  return (
    // Added section wrapper
    <section
      id="hero"
      className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white via-[#EAFBF1] to-white"
    >
      {/* Added container div */}
      <div className="container mx-auto px-4">
        {/* Added flex container */}
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 text-center md:text-left"
          >
            {/* Added H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#065A2F] mb-4 leading-tight">
              Empowering Africa's Digital Economy
            </h1>
            {/* Added subtitle */}
            <p className="text-xl md:text-2xl text-[#F69704] font-medium mb-6">
              Building skills, mentorship & opportunity for youth and MSMEs
            </p>
            {/* Added description */}
            <p className="text-lg text-gray-700 mb-8">
              DigiAfrika connects young entrepreneurs and small businesses with
              the digital skills, mentorship, and market access they need to
              thrive in Africa's expanding digital trade landscape.
            </p>
            {/* Added button wrapper */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-[#F69704] text-white font-semibold rounded-full hover:bg-opacity-90 transition-colors flex items-center justify-center">
                Get Started <FaArrowRight className="ml-2" />
              </button>
              <button className="px-6 py-3 bg-transparent border border-[#065A2F] text-[#065A2F] font-semibold rounded-full hover:bg-[#065A2F] hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="bg-[#065A2F]/10 rounded-lg p-6 md:p-8">
                <img
                  src="https://via.placeholder.com/600x400.png/065A2F/FFFFFF?text=DigiAfrika+Platform" // Using placeholder image
                  alt="Digital entrepreneurs using DigiAfrika"
                  className="rounded-lg shadow-lg w-full"
                />

                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="bg-[#F69704]/20 p-2 rounded-full">
                      <BsLightningCharge className="text-[#F69704] text-xl" />
                    </div>
                    <div className="ml-3">
                      <p className="text-xs text-gray-600">Empowering</p>
                      <p className="font-bold text-[#065A2F]">
                        1M+ Youth by 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Features Section ---
const FeaturesSection = () => {
  const features = [
    {
      icon: <FaGraduationCap className="text-[#065A2F] text-2xl" />, // Added Icon
      title: "Digital Skills LMS",
      description:
        "Mobile-first learning modules on trade, digital marketing, and e-commerce fundamentals.",
      delay: 0,
    },
    {
      icon: <FaRobot className="text-[#065A2F] text-2xl" />, // Added Icon
      title: "AI Mentorship",
      description:
        "24/7 personalized guidance through our AI chatbot tailored to your business journey.",
      delay: 0.1,
    },
    {
      icon: <FaUsers className="text-[#065A2F] text-2xl" />, // Added Icon
      title: "Community Forums",
      description:
        "Connect with peers, share experiences, and build valuable networks across Africa.",
      delay: 0.2,
    },
    {
      icon: <FaMobileAlt className="text-[#065A2F] text-2xl" />, // Added Icon
      title: "Offline Access",
      description:
        "USSD and SMS tools ensure rural entrepreneurs can participate with limited connectivity.",
      delay: 0.3,
    },
    {
      icon: <BsCurrencyDollar className="text-[#065A2F] text-2xl" />, // Added Icon
      title: "Funding Marketplace",
      description:
        "Access micro-loans, grants, and investment opportunities tailored to African MSMEs.",
      delay: 0.4,
    },
    {
      icon: <FaStore className="text-[#065A2F] text-2xl" />, // Added Icon
      title: "Digital Storefronts",
      description:
        "Launch your online presence with easy-to-use e-commerce tools and templates.",
      delay: 0.5,
    },
  ];

  return (
    // Added section wrapper
    <section id="features" className="py-16 md:py-24 bg-white">
      {/* Added container div */}
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#065A2F] mb-4 text-center" // Centered heading
        >
          Our Platform Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-12" // Centered paragraph and added bottom margin
        >
          DigiAfrika offers an integrated ecosystem of tools designed
          specifically for Africa's emerging digital entrepreneurs.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#065A2F]"
            >
              <div className="bg-[#065A2F]/10 inline-flex p-3 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#065A2F] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
              <div className="mt-4 pt-2 border-t border-gray-100">
                <a
                  href="#"
                  className="inline-flex items-center text-[#F69704] font-medium hover:text-[#e98c03] transition-colors"
                >
                  Learn more <FaChevronRight className="ml-1 text-sm" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Benefits & Impact Section ---
const BenefitsSection = () => {
  return (
    // Added section wrapper
    <section id="benefits" className="py-16 md:py-24 bg-[#EAFBF1]">
      {/* Added container div */}
      <div className="container mx-auto px-4">
        {/* Added flex container */}
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-12"
          >
            {/* Added H2 */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#065A2F] mb-4">
              Driving Impact Across Africa
            </h2>
            {/* Added description */}
            <p className="text-lg text-gray-700 mb-8">
              DigiAfrika addresses critical challenges facing African youth and
              MSMEs:
            </p>

            <div className="space-y-5">
              <div className="flex items-start">
                <div className="bg-[#F69704]/20 p-2 rounded-full mt-1 flex-shrink-0"> {/* Added flex-shrink-0 */}
                  <BsLightningCharge className="text-[#F69704]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#065A2F]">
                    Youth Unemployment
                  </h3>
                  <p className="text-gray-700">
                    Equipping the 60% of unemployed African youth with
                    marketable digital skills.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#F69704]/20 p-2 rounded-full mt-1 flex-shrink-0"> {/* Added flex-shrink-0 */}
                  <BsGlobe className="text-[#F69704]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#065A2F]">
                    Cross-Border Trade Barriers
                  </h3>
                  <p className="text-gray-700">
                    Simplifying digital trade and reducing friction for
                    intra-African commerce.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#F69704]/20 p-2 rounded-full mt-1 flex-shrink-0"> {/* Added flex-shrink-0 */}
                  <BsCurrencyDollar className="text-[#F69704]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#065A2F]">
                    Access to Finance
                  </h3>
                  <p className="text-gray-700">
                    Connecting MSMEs to funding opportunities that were
                    previously inaccessible.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#impact"
                className="inline-flex items-center px-6 py-3 bg-[#F69704] text-white font-medium rounded-full hover:bg-opacity-90 transition-colors"
              >
                See Our Impact <FaArrowRight className="ml-2" />
              </a>
            </div>
          </motion.div>

          <motion.div
            id="impact" // Added ID here for the link target
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#065A2F] mb-6">
                Impact by 2026
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">
                      Digital Skills Training
                    </span>
                    <span className="font-bold text-[#F69704]">1M+ Youth</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#F69704] h-2.5 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">
                      MSMEs Supported
                    </span>
                    <span className="font-bold text-[#F69704]">250,000+</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#F69704] h-2.5 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">
                      Funding Facilitated
                    </span>
                    <span className="font-bold text-[#F69704]">$50M USD</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#F69704] h-2.5 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">
                      Rural Access
                    </span>
                    <span className="font-bold text-[#F69704]">35% Coverage</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#F69704] h-2.5 rounded-full"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Countries reached</p>
                    <p className="font-bold text-[#065A2F] text-xl">25+</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Women entrepreneurs</p>
                    <p className="font-bold text-[#065A2F] text-xl">45%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Success rate</p>
                    <p className="font-bold text-[#065A2F] text-xl">78%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Testimonials & Success Stories ---
const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "DigiAfrika transformed my small clothing business by giving me the digital skills to reach customers across East Africa. Their mentorship was invaluable.",
      name: "Sarah Okonkwo",
      role: "Founder, Afro-Chic Designs",
      location: "Lagos, Nigeria",
      image: "https://via.placeholder.com/80x80.png/F69704/FFFFFF?text=SO", // Placeholder
    },
    {
      quote:
        "The funding connections through DigiAfrika helped me secure my first business loan. My agri-tech startup now serves farmers in three countries.",
      name: "Emmanuel Kagame",
      role: "CEO, FarmConnect",
      location: "Kigali, Rwanda",
      image: "https://via.placeholder.com/80x80.png/065A2F/FFFFFF?text=EK", // Placeholder
    },
    {
      quote:
        "Even with limited internet in my rural village, I could access DigiAfrika's training via USSD. Now I run a successful digital service agency.",
      name: "Amina Hassan",
      role: "Founder, Digital Solutions",
      location: "Mombasa, Kenya",
      image: "https://via.placeholder.com/80x80.png/F69704/FFFFFF?text=AH", // Placeholder
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    // Added section wrapper
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      {/* Added container div */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Added H2 */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#065A2F] mb-4">
            Success Stories
          </h2>
          {/* Added description */}
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Real entrepreneurs across Africa are building successful businesses
            with DigiAfrika's support.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[350px]"> {/* Added min-height for layout consistency */}
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, position: 'absolute', top: 0, left: 0, right: 0 }} // Use absolute positioning for fade effect
                animate={{ opacity: index === activeIndex ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-white p-8 rounded-xl shadow-lg ${
                  index === activeIndex ? "block" : "hidden" // Keep hidden for accessibility
                }`}
                style={{ zIndex: index === activeIndex ? 1 : 0 }} // Ensure active slide is on top
              >
                <div className="flex flex-col md:flex-row items-center md:items-start">
                  <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0"> {/* Added flex-shrink-0 */}
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#F69704]">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left"> {/* Added text alignment */}
                    <div className="text-[#F69704] text-4xl font-serif mb-2 md:mb-4"> {/* Adjusted margin */}
                      "
                    </div>
                    <p className="text-lg text-gray-700 italic mb-6">
                      {testimonial.quote}
                    </p>

                    <div>
                      <h4 className="font-bold text-[#065A2F] text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-[#F69704]" : "bg-gray-300 hover:bg-gray-400" // Added hover state
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- CTA Section ---
const CTASection = () => {
  return (
    // Added section wrapper with background color
    <section id="cta" className="py-16 md:py-24 bg-[#065A2F] text-white">
      {/* Added container div */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Added H2 */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Africa's Digital Trade Revolution
          </h2>
          {/* Added description */}
          <p className="text-lg text-white/80 mb-8">
            Whether you're a young entrepreneur with a vision or an established
            MSME looking to grow, DigiAfrika has the tools, training, and
            community to help you succeed.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-3 bg-[#F69704] text-white font-medium rounded-full hover:bg-opacity-90 transition-colors">
              Create Your Account
            </button>
            <button className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-full hover:bg-white hover:text-[#065A2F] transition-colors">
              Partner With Us
            </button>
          </div>

          <div className="mt-12 pt-10 border-t border-white/20">
            <p className="text-white/80 mb-4">
              Stay updated with our latest initiatives
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto flex flex-col sm:flex-row"> {/* Added form and preventDefault */}
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-t-full sm:rounded-l-full w-full sm:rounded-r-none focus:outline-none text-gray-800 flex-grow" // Added flex-grow
                required // Added required attribute
              />
              <button
                  type="submit" // Added type submit
                  className="mt-2 sm:mt-0 px-6 py-3 bg-[#F69704] text-white font-medium rounded-b-full sm:rounded-r-full sm:rounded-l-none hover:bg-opacity-90 transition-colors flex items-center justify-center flex-shrink-0" // Added flex-shrink-0
              >
                Subscribe <FaEnvelope className="ml-2" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    // Added footer element
    <footer className="bg-gray-100 text-gray-700 py-12">
      {/* Added container div */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & Description */}
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-bold text-[#065A2F] mb-4 block">
              DigiAfrika
            </a>
            <p className="text-sm mb-4">
              Empowering Africa's youth and MSMEs through digital trade skills
              and opportunities.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-[#F69704] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#F69704] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#F69704] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} /> {/* Using FaInstagram */}
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="font-semibold text-[#065A2F] mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-[#F69704]">Features</a></li>
              <li><a href="#benefits" className="hover:text-[#F69704]">Benefits</a></li>
              <li><a href="#impact" className="hover:text-[#F69704]">Impact</a></li>
              <li><a href="#testimonials" className="hover:text-[#F69704]">Success Stories</a></li>
              <li><a href="#" className="hover:text-[#F69704]">Sign Up</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h5 className="font-semibold text-[#065A2F] mb-3">Resources</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#F69704]">Blog</a></li>
              <li><a href="#" className="hover:text-[#F69704]">Help Center</a></li>
              <li><a href="#" className="hover:text-[#F69704]">Partnerships</a></li>
              <li><a href="#" className="hover:text-[#F69704]">Press</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h5 className="font-semibold text-[#065A2F] mb-3">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#F69704]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#F69704]">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#F69704]">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
           &copy; {new Date().getFullYear()} DigiAfrika. All rights reserved. {/* Added dynamic year */}
        </div>
      </div>
    </footer>
  );
};


// --- Main App Component ---
function HomePage() {
  return (
    <div className="font-sans"> {/* Added a base font */}
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default HomePage;
