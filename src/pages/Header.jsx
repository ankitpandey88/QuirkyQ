// import React from 'react';

// const Header = () => {
//   return (
//     <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
//       {/* Logo Section */}
//       <div className="flex items-center space-x-2">
//         <img src="/logo.jpeg" alt="Master Bazar Logo" className="w-10 h-10 rounded-xl" /> {/* Adjust path if necessary */}
//         <div>
//           <h1 className="text-xl font-bold text-blue-800">JyotiTech</h1>
//           <p className="text-xs text-gray-500">MASTER OF THE DIGITAL WORLD</p>
//         </div>
//       </div>

//       {/* Contact Button */}
//       <div className="flex items-center space-x-4">
//         <button className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition">
//           Let's Have A Talk!
//         </button>
        
//         {/* Icon (Three lines menu) */}
//         <div className="text-blue-600 cursor-pointer">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/logo.jpeg" alt="Master Bazar Logo" className="w-12 h-12 rounded-2xl" />
          <div>
            <h1 className="text-xl font-bold text-blue-800">Visionary Solution's</h1>
            <p className="text-sm font-semibold text-gray-900">INOVATOR OF THE DIGITAL WORLD</p>
          </div>
        </div>

        {/* Contact Button */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition">
            Let's Have A Talk!
          </button>

          {/* Hamburger Icon */}
          <div onClick={toggleSidebar} className="text-blue-600 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </header>

      {/* Full-Page Sidebar */}
      <div
        className={`fixed inset-0 bg-white transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50 flex flex-col p-8`}
      >
        {/* Close Icon */}
        <div className="flex justify-end">
          <button onClick={toggleSidebar} className="text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-row h-full space-x-12">
          {/* Left Section: Navigation Links */}
          <div className="w-1/4 text-blue-900 text-xl font-bold space-y-4">
            <p>Home</p>
            <p>About Us</p>
            <p>Career</p>
            <p>Blog</p>
            <p>Contact Us</p>
          </div>

          {/* Middle Section: Services */}
          <div className="w-1/3 text-blue-800">
            <h2 className="text-2xl font-bold mb-4">What We Do!</h2>
            <ul className="space-y-2 text-lg">
              <li>Software as a Service</li>
              <li>Development</li>
              <li>Software Development</li>
              <li>Application Development</li>
              <li>Website Development</li>
              <li>Designing</li>
              <li>Digital Marketing</li>
              <li>Sales and Support</li>
              <li>Content Writing</li>
              <li>Online Reputation Management</li>
            </ul>
          </div>

          {/* Right Section: Quick Links and Social Links */}
          <div className="w-1/3">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Quick Links</h2>
            <ul className="space-y-2 text-lg text-blue-800">
              <li>Terms and Conditions</li>
              <li>Privacy and Policy</li>
              <li>Shipping Delivery Policy</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Social Links</h2>
            <div className="flex space-x-4 text-blue-600 text-2xl">
              <a href="#"><i className="fab fa-facebook-f">F</i></a>
              <a href="#"><i className="fab fa-instagram">I</i></a>
              <a href="#"><i className="fab fa-twitter">T</i></a>
              <a href="#"><i className="fab fa-linkedin-in">L</i></a>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg text-center">
              <h3 className="font-bold text-xl mb-2">Got An Idea?</h3>
              <p className="text-lg mb-4">Let's Start Building the Projects!</p>
              <button className="mt-4 px-6 py-3 bg-white text-blue-700 rounded-full">Start Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
