import React, { useState } from "react";

const OnboardingForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">QuirkyQ Professional Onboarding</h1>
      <form onSubmit={handleSubmit} className="space-y-8 bg-gray-100 p-8 rounded-xl shadow-lg">
        {/* Row 1: Email and Full Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="mt-2 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Full Name *</label>
            <input
              type="text"
              name="fullName"
              required
              onChange={handleChange}
              className="mt-2 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Row 2: Personal Intro and Business Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Personal Intro *</label>
            <textarea
              name="personalIntro"
              required
              onChange={handleChange}
              className="mt-2 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Business Name *</label>
            <input
              type="text"
              name="businessName"
              required
              onChange={handleChange}
              className="mt-2 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Row 3: Contact Number and Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Contact Number *</label>
            <input
              type="tel"
              name="contactNumber"
              required
              onChange={handleChange}
              className="mt-2 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Address *</label>
            <textarea
              name="address"
              required
              onChange={handleChange}
              className="mt-2 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        {/* Row 4: Service Type and Feedbacks & Ratings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Service Type *</label>
            <select
              name="serviceType"
              required
              onChange={handleChange}
              className="mt-2 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select Service Type</option>
              <option value="Doctor">Doctor</option>
              <option value="Salon">Salon</option>
              <option value="Unisex Salon">Unisex Salon</option>
              <option value="Women Parlour">Women Parlour</option>
              <option value="Spa">Spa</option>
              <option value="Psychiatrist">Psychiatrist</option>
              <option value="Makeovers">Makeovers</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Interested in Feedbacks & Ratings? *</label>
            <div className="mt-4 space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="feedbacksAndRatings"
                  value="Yes"
                  required
                  onChange={handleChange}
                  className="form-radio text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-3 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="feedbacksAndRatings"
                  value="No"
                  onChange={handleChange}
                  className="form-radio text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-3 text-gray-700">No</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="feedbacksAndRatings"
                  value="Maybe"
                  onChange={handleChange}
                  className="form-radio text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-3 text-gray-700">Maybe</span>
              </label>
            </div>
          </div>
        </div>

        {/* Row 5: Operational Hours and Clients Served */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Operational Hours *</label>
            <input
              type="number"
              name="operationalHours"
              min="1"
              required
              onChange={handleChange}
              className="mt-2 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Clients Served at a Time *</label>
            <input
              type="number"
              name="clientsServed"
              min="1"
              max="5"
              required
              onChange={handleChange}
              className="mt-2 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg ml-96 hover:bg-pink-600 transition duration-300">
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default OnboardingForm;
