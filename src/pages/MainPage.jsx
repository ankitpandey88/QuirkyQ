import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-pink-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">QuirkyQ</h1>
        <div>
          <button className="bg-transparent border-2 border-white px-4 py-2 rounded-lg mr-4 hover:bg-white hover:text-pink-600 transition">
            Login
          </button>
          <button className="bg-white text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Header Section */}
      <header className="bg-pink-600 text-white p-8 text-center">
        <h2 className="text-4xl font-bold">"Book Your Salon & Beauty Appointments in Seconds"</h2>
        <p className="mt-2 text-lg">Your beauty, our priority!</p>
      </header>

      {/* Main Section */}
      <main className="flex-1 bg-gray-50 p-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Your Perfect Look Awaits
        </h2>
        <p className="text-gray-600 mb-8">
          Pre-book your salon and beauty services with ease. Stay flawless!
        </p>

        <button className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-pink-600 transition duration-300">
          Download Now
        </button>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-gray-800">Hair Services</h3>
            <p className="text-gray-600 mt-2">
              Professional hair styling, cuts, and treatments.
            </p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-gray-800">Facial Care</h3>
            <p className="text-gray-600 mt-2">
              Relaxing facial treatments tailored to your skin type.
            </p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-gray-800">Nail Services</h3>
            <p className="text-gray-600 mt-2">
              Manicures, pedicures, and nail art services.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© {new Date().getFullYear()} QuirkyQ. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
