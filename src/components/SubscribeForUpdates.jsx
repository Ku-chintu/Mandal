import React, { useState, UseState } from "react";
import { ToastContainer, toast } from "react-toastify";
import utility from "../utility";
import service from "../service";

function SubscribeForUpdate() {
  const [email, setEmail] = useState(``);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    if (email === "") {
      toast.error(`Email is mandatory!`);
      return;
    }
    if (!utility.isValidateEmail(email)) {
      toast.error(`Enter valid email!`);
      return;
    }
    const response = await service.requestApi.subscribeForUpdate('"'+email+'"');
    if(response.status === 200){ 
        toast.success(`Successfuly subscribed!`);
        setEmail('');
    }
    else{
         toast.error(`Failed to subscribe!`);
        }
  };

  return (
    <div className=" p-4 col-span-4 sm:col-span-3">
      <h5 className="title mb-4">Subscribe for Updates</h5>
      <h6 className="subtitle mb-4">
        Recruitment strategy tips, guides, videos, and live Q&As delivered right
        to your inbox.
      </h6>
      <div className="">
        <div className=" flex rounded-full h-12 w-full">
          <input
            type="email"
            className=" bg-white text-black rounded-l-full  text-sm w-3/4 sm:w-2/4  pl-3 pr-16 py-2  "
            placeholder="Enter Email ID"
            value={email}
            onChange={handleChange}
          />
          <button
            className=" rounded bg-iconBg py-2 px-2.5 rounded-r-full text-center w-1/4  text-sm text-white "
            type="button"
            onClick={handleClick}
          >
            Subscribe
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
export default SubscribeForUpdate;
