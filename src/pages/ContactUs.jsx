import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import contactBanner from '../assets/svg/contactBanner.svg';
import service from "../service";

function ContactUs() {
  document.title = 'Contact Us'
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    try {
      //console.log(formData);
      const response = await service.requestApi.contactUs(formData);
      if (response.status === 200) {
        toast.success("Data submitted successfully!");
      }
      else if (response.status === 400) {
        toast.error(response.response.data.message);
      } 

      console.log("Response:", response.data);
      //alert("ContactUs data submitted successfully!");
    } catch (error) {
      console.error("Error submitting the ContactUs:", error);
      //alert(response);
    }
    //console.log(formData);
  };
  return (
    <div style={{ marginTop: '85px' }} className="w-full">
      <div>
        <section className="contact-banner min-h-[450px]">
          <div className="flex justify-center items-center align-middle">
            <div className='pt-28'>
              <h1 className="text-white font-semibold heading-3 text-center">Contact Us</h1>
              <p className="text-white  text-xl text-center">Have Questions? We’ve Got Answers—Reach</p>
              <p className="text-white  text-xl text-center">Out Today!</p>
            </div>
          </div>
        </section>
        <section style={{ height: '999px' }} className="relative bg-gray-100 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow w-3/4 card absolute -top-28 z-10">
            <h2 className="heading-3 font-semibold mb-4">Get In Touch</h2>
            <p className="text-xl mb-6">Have Questions? We’ve Got Answers—Reach Out Today!</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="fullName" className="block text-lg font-medium ">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border border-primary rounded-md shadow-sm hover:outline-primary outline-1 "
                />
              </div>

              <div className="mb-6">
                <label htmlFor="companyName" className="block text-lg font-medium ">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-primary rounded-md shadow-sm hover:outline-primary outline-1"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="workEmail" className="block text-lg font-medium ">
                  Work Email ID
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-primary rounded-md shadow-sm hover:outline-primary outline-1"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phoneNumber" className="block text-lg font-medium ">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-primary rounded-md shadow-sm hover:outline-primary outline-1"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="seniorityLevel" className="block text-lg font-medium ">
                  Seniority Level
                </label>
                <select 
                  id="seniorityLevel"
                  name="seniorityLevel"
                  value={formData.seniorityLevel}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-primary rounded-md shadow-sm relative outline-none"
                >
                  <option value="">Associate/Junior</option>
                  <option value="">Mid-Level</option>
                  <option value="">Manager</option>
                  <option value="">Director</option>
                  <option value="">Founder/Owner</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-lg font-medium ">
                  Which of the following describes
                </label>
                <select
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-primary rounded-md shadow-sm outline-none"
                >
                  <option value="">Sofware Engineer</option>
                  <option value="">Data Analyst</option>
                  <option value="">Hr Manager</option>
                  <option value="">Quality Assurance Engineer</option>
                  <option value="">IT Support Specialist</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium ">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-primary rounded-md shadow-sm hover:outline-primary outline-1"
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
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default ContactUs;
