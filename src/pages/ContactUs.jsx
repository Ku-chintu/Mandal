import React, { useState } from 'react';
import contactBanner from '../assets/svg/contactBanner.svg';

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    seniorityLevel: '',
    description: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
  };
  return (
    <div style={{ marginTop: '85px' }} className="w-full">
      <div>
        <section className="contact-banner">
          <div className="min-h-[400px] flex justify-center items-center align-middle">
            <div>
              <h1 className="text-white font-semibold heading-3 text-center">Contact Us</h1>
              <p className="text-white  text-xl text-center">Have Questions? We’ve Got Answers—Reach</p>
              <p className="text-white  text-xl text-center">Out Today!</p>
            </div>
          </div>
        </section>
        <section style={{ height: '999px' }} className="relative bg-gray-100 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow w-3/4 card absolute -top-20 z-10">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-6">Have Questions? We've Got Answers—Reach Out Today!</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md shadow-sm"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md shadow-sm"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700">
                  Work Email ID
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md shadow-sm"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md shadow-sm"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="seniorityLevel" className="block text-sm font-medium text-gray-700">
                  Seniority Level
                </label>
                <select
                  id="seniorityLevel"
                  name="seniorityLevel"
                  value={formData.seniorityLevel}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md shadow-sm"
                >
                  <option value="">Select the Seniority Level</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Which of the following describes
                </label>
                <select
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md shadow-sm"
                >
                  <option value="">Select the Option</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md shadow-sm"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
          {/* </div> */}
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
