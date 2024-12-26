import React, { useEffect, useState } from "react";

const PricelessClients = () => {
  const clients = [
    { id: 1, src: "/path-to-images/c1.png", alt: "Client 1" },
    { id: 2, src: "/path-to-images/c2.png", alt: "Client 2" },
    { id: 3, src: "/path-to-images/c3.png", alt: "Client 3" },
    { id: 4, src: "/path-to-images/c4.png", alt: "Client 4" },
    { id: 5, src: "/path-to-images/c5.png", alt: "Client 5" },
  ];

  const [offset, setOffset] = useState(0);
  const slideSpeed = 1; // Adjust this value to change scrolling speed

  // Handle automatic scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset === -100 * (clients.length - 1) ? 0 : prevOffset - 100));
    }, 3000); // Adjust this interval for speed

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-16 relative overflow-hidden"
      style={{
        backgroundImage: "url('/path-to-images/background.jpg')", // Replace with your background image path
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content Section */}
      <div className="relative z-10 animate-slide-up">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-center text-black">
          OUR PRICELESS CLIENTS
        </h2>
        <p className="text-center text-gray-700 mt-2">
          Our Clients Speak Volumes Of Our Success
        </p>
      </div>

      {/* Scrolling Image Section */}
      <div className="relative mt-10">
        <div
          className="flex transition-transform duration-500 ease-linear"
          style={{ transform: `translateX(${offset}%)` }}
        >
          {clients.map((client) => (
            <div
              key={client.id}
              className="w-1/5 flex justify-center items-center px-4"
            >
              <img
                src={client.src}
                alt={client.alt}
                className="w-32 h-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricelessClients;
