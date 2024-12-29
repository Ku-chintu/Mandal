import React, { useState } from 'react';
import SubscribeForUpdate from '../components/SubscribeForUpdates';
import Linkedin from '../assets/svg/Linkedin 2.svg';
import Facebook from '../assets/svg/Facebook F.svg';
import Instagram from '../assets/svg/Instagram.svg';
import Twitter from '../assets/svg/Twitter.svg';
const Footer = () => {

    return (
        <footer className='bg-primary'>
            <div className=' container m-auto px-5'>
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
                <div className=' border-t border-b border-iconBg grid grid-cols-3 md:grid-cols-7 gap-4 text-white' >
                    <div className="p-4 ">
                        <h5 className='title mb-4'>Services</h5>
                        <h6 className='subtitle mb-4'><a href="/services/#recruitment-as-services"  className='cursor-pointer'>Recruitement as Service</a></h6>
                        <h6 className='subtitle mb-4'><a href="/services/#applicant-on-demand"  className='cursor-pointer'>Talent on Demand</a></h6>
                    </div>
                    <div className="p-4 col-span-2 sm:col-span-1 ">
                        <h5 className='title mb-4'>Solutions</h5>
                        <h6 className='subtitle mb-4'><a href="/solution/#resume-parsing"  className='sm:mb-0 cursor-pointer'>Resume Parsing</a></h6>
                        <h6 className='subtitle mb-4'><a href="/solution/#scoring"  className='sm:mb-0 cursor-pointer'>Scoring</a></h6>
                        <h6 className='subtitle mb-4'><a href="/solution/#connect"  className='sm:mb-0 cursor-pointer'>Sourcing</a></h6>
                        <h6 className='subtitle mb-4'><a href="/solution/#enrichment"  className='sm:mb-0 cursor-pointer'>Enrichment</a></h6>
                    </div>
                    <div className="p-4 col-span-3 sm:col-span-2 ">
                        <h5 className='title mb-4'>Company</h5>
                        <h6 className='subtitle mb-4'><a href="/contactus"  className='sm:mb-0 cursor-pointer'>Contact Us</a></h6>
                        {/* <h6 className='subtitle mb-4'><a href="/resources"  className='sm:mb-0 cursor-pointer'>Resources</a></h6> */}
                        <h6 className='subtitle mb-4'><a href="/career"  className='sm:mb-0 cursor-pointer'>Careers</a></h6>
                        <h6 className='subtitle mb-4'><a href="/pricing"  className='sm:mb-0 cursor-pointer'>Pricing</a></h6>
                    </div>
                    <SubscribeForUpdate/>
                </div>
                <div className='p-4'>
                    <p className=' text-center text-white text-base'>© 2024 mAI. All rights reserved. <a href="/PrivacyPolicy" className="">Privacy Policy | </a><a href="/TermsOfUse" className="">Terms of Service.</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
