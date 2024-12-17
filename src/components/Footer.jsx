import React, { useState } from 'react';
import Linkedin from '../assets/svg/Linkedin 2.svg';
import Facebook from '../assets/svg/Facebook F.svg';
import Instagram from '../assets/svg/Instagram.svg';
import Twitter from '../assets/svg/Twitter.svg';
const Footer = () => {

    return (
        <footer className='bg-primary'>
            <div className=' container m-auto '>
                <div className='flex gap-4 justify-end p-4'>
                    <div className=' bg-iconBg h-12 w-12 rounded-full flex justify-center items-center align-middle'>
                        <img src={Linkedin} alt="image1" className="w-8 h-8" />
                    </div>
                    <div className=' bg-iconBg h-12 w-12 rounded-full flex justify-center items-center align-middle'>
                        <img src={Facebook} alt="image1" className="w-8 h-8" />
                    </div>
                    <div className=' bg-iconBg h-12 w-12 rounded-full flex justify-center items-center align-middle'>
                        <img src={Instagram} alt="image1" className="w-8 h-8" />
                    </div>
                    <div className=' bg-iconBg h-12 w-12 rounded-full flex justify-center items-center align-middle'>
                        <img src={Twitter} alt="image1" className="w-8 h-8" />
                    </div>
                </div>
                <div className=' border-t border-b border-iconBg grid grid-cols-3 md:grid-cols-5 gap-4 text-white' >
                    <div className="p-4 ">
                        <h5 className='title mb-4'>Get Started</h5>
                        <h6 className='subtitle mb-4'>Solutions</h6>
                        <h6 className='subtitle mb-4'>Resource</h6>
                    </div>
                    <div className="p-4 col-span-2 sm:col-span-1 ">
                        <h5 className='title mb-4'>Support</h5>
                        <h6 className='subtitle mb-4'>Contact Us</h6>
                        <h6 className='subtitle mb-4'>Pricing</h6>
                        <h6 className='subtitle mb-4'>Help Center</h6>
                        {/* <h6 className='subtitle mb-4'>My Account</h6> */}
                    </div>
                    <div className=" p-4 col-span-3">
                        <h5 className='title mb-4'>Subscribe for Updates</h5>
                        <h6 className='subtitle mb-4'>Recruitment strategy tips, guides, videos, and live Q&As delivered right to your inbox.</h6>
                        <div className="">
                            <div className=" flex rounded-full h-12 w-full">
                                <input type="email" className=" bg-white rounded-l-full  text-sm w-3/4 sm:w-2/4  pl-3 pr-16 py-2  " placeholder="Enter Email ID" />
                                <button
                                    className=" rounded bg-iconBg py-2 px-2.5 rounded-r-full text-center w-1/4  text-sm text-white "
                                    type="button"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-4'>
                    <p className=' text-center text-white text-base'>© 2024 mAI. All rights reserved. Privacy Policy | Terms of Service.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
