import React, { useState, useRef, useEffect } from 'react';
import handicon from '../assets/svg/handicon.svg';
import Applicant from '../assets/svg/Applicant.svg';
import Resume from '../assets/svg/Resume.svg';
import jdparsing from '../assets/svg/jdparsing.svg';
import scorring from '../assets/svg/scorring.svg';
import connect from '../assets/svg/connect.svg';
import enrichment from '../assets/svg/enrichment.svg';

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const specificDivRef = useRef(null);
  // const navigate = useNavigate(); // Initialize useNavigate

  const handleRedirect = (url) => {
    // navigate(url); // Use navigate to redirect to the specific URL
  };
  const checkCardClick = () => {
    setPopupOpen(!isPopupOpen);
  };

  const handleOutsideClick = () => {
    console.log('Clicked outside the specific div!');
    setPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (specificDivRef.current && !specificDivRef.current.contains(event.target)) {
        handleOutsideClick();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <header style={{ height: '85px' }} className="w-full fixed z-50 top-0 bg-white">
      <div className='container m-auto h-full bg-white'>
        <div className="mx-auto flex justify-between items-center p-4 text-primary h-full">
          <a href="/" style={{ height: '52px', maxWidth: '52px', minWidth: '52px' }} className='bg-primary text-base text-white flex justify-center align-middle items-center rounded-full'>
            <div>mAI</div>
          </a>
          <div className='hidden lg:flex w-full justify-center'>
            <nav className="flex space-x-6 text-xl lg:gap-10 font-medium">
              <a href="/platforms" className="" onClick={(e) => {
                e.preventDefault();
                togglePopup();
              }}>
                Platform
              </a>
              <a href="/pricing" className="">
                Pricing
              </a>
              <a href="/career" className="">
                Careers
              </a>
              <a href="/resources" className="">
                Resources
              </a>
              <a href="/contactus" className="">
                Contact Us
              </a>
            </nav>
          </div>

          <div className="lg:hidden w-full flex justify-end">
            <button
              onClick={toggleDrawer}
              className="text-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex items-center align-middle space-x-4">
          <a href="http://mandalsolution.com/" className="">
            <button style={{ width: '127px', marginRight: '61px' }} className='text-primary h-10 text-xl rounded-full flex align-middle items-center justify-center border font-semibold border-primary p-2'>Sign In</button>
          </a>
          </div>
        </div>

        <div style={{ zIndex: 1 }}
          className={`fixed top-0 left-0 h-full w-64 bg-gray-100 text-black transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300`}
        >
          <div className="flex items-center justify-end px-4 py-4 bg-gray-200">
            <button
              onClick={toggleDrawer}
              className="text-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-4">
            <a
              href="/platforms"
              className="hover:bg-gray-300 rounded-md p-2 text-primary"
              onClick={(e) => {
                e.preventDefault();
                togglePopup();
                toggleDrawer();
              }}
            >
              Platform
            </a>
            <a href="/pricing" className="hover:bg-gray-300 rounded-md p-2" onClick={toggleDrawer}>Pricing</a>
            <a href="/career" className="hover:bg-gray-300 rounded-md p-2" onClick={toggleDrawer}>Career</a>
            <a href="/resources" className="hover:bg-gray-300 rounded-md p-2" onClick={toggleDrawer}>Resources</a>
            <a href="/contact" className="hover:bg-gray-300 rounded-md p-2" onClick={toggleDrawer}>Contact Us</a>
            <a href="/contact" className="hover:bg-gray-300 rounded-md p-2" onClick={toggleDrawer}>Sign In</a>
          </nav>
        </div>

        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleDrawer}
          ></div>
        )}
      </div>

      {isPopupOpen && (
        <div style={{ backgroundColor: '#D9D9D966' }} className="fixed top-[85px] left-0 w-full h-full shadow-md z-40">
          <div className="container mx-auto p-4 z-50">
            <div onClick={checkCardClick} ref={specificDivRef} style={{ maxHeight: '500px', overflow: 'auto' }} className="relative bg-white rounded-2xl border border-white">
              <div className='sm:grid xl:grid-cols-4 gap-4 p-4'>
                <div className='xl:border-r border-primary p-4'>
                  <h3 className='text-lg mb-8'>Services</h3>
                  <div className='block sm:flex gap-4 xl:block'>
                    <div className='mb-4 sm:mb-0 xl:mb-8'>
                      <a href="/services/#recruitment-as-services"  className='cursor-pointer'>
                      {/* <a href="/services/#recruitment-as-services'"  className='cursor-pointer' onClick={() => handleRedirect('/services/#recruitment-as-services')}> */}
                        <div className='flex items-center gap-4 mb-4'>
                          <img src={handicon} alt="handicon" className="w-8 h-8" />
                          <p className='text-xl font-medium'>Recruitment as Service</p>
                        </div>
                        <p className='text-xs'>Effortless hiring, tailored for your success. Build top-tier teams, scale seamlessly, and focus on growth, we’ll handle the rest.</p>
                      </a>
                    </div>
                    <div>
                    <a href="/services/#applicant-on-demand"  className='cursor-pointer'>
                      {/* <div className='cursor-pointer' onClick={() => handleRedirect('/services/#applicant-on-demand')}> */}
                        <div className='flex items-center gap-4 mb-4'>
                          <img src={Applicant} alt="Applicant" className="w-8 h-8" />
                          <p className='text-xl font-medium'>Talent on Demand</p>
                        </div>
                        <p className='text-xs'>Access top talent on demand, with results that drive success. Pay only for performance, tailored to your needs.</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-span-2 xl:col-span-3 p-4'>
                  <div>
                    <h3 className='text-lg mb-8'>Solutions</h3>
                    <div className='sm:grid grid-cols-2 xl:grid-cols-3 gap-4'>
                    <a href="/solution/#resume-parsing"  className='sm:mb-0 cursor-pointer'>
                      {/* <div className='mb-4 sm:mb-0 cursor-pointer' onClick={() => handleRedirect('/solutions/#resume-parsing')}> */}
                        <div className='flex items-center gap-4 mb-4'>
                          <img src={Resume} alt="Resume" className="w-8 h-8" />
                          <p className='text-xl font-medium'>Resume Parsing</p>
                        </div>
                        <p className='mb-4 sm:mb-0 text-xs'>Effortlessly streamline your recruitment process with AI-powered resume parsing. Our API delivers structured, accurate data, saving time and enhancing hiring efficiency.</p>
                      </a>
                      <a href="/solution/#scoring"  className='sm:mb-0 cursor-pointer'>
                      {/* <div className='mb-4 sm:mb-0 cursor-pointer' onClick={() => handleRedirect('/solutions/#scoring')}> */}
                        <div className='flex items-center gap-4 mb-4'>
                          <img src={scorring} alt="scorring" className="w-8 h-8" />
                          <p className='text-xl font-medium'>Scoring</p>
                        </div>
                        <p className='mb-4 sm:mb-0 text-xs'>AI-powered scoring to effortlessly manage high-volume applications. Quickly identify top candidates with precision and efficiency.</p>
                      </a>
                      <a href="/solution/#enrichment"  className='sm:mb-0 cursor-pointer'>
                      {/* <div className='mb-4 sm:mb-0 cursor-pointer' onClick={() => handleRedirect('/solutions/#enrichment')}> */}
                        <div className='flex items-center gap-4 mb-4'>
                          <img src={enrichment} alt="Resume" className="w-8 h-8" />
                          <p className='text-xl font-medium'>Enrichment</p>
                        </div>
                        <p className='mb-4 sm:mb-0 text-xs'>Enhance candidate profiles with enriched, up-to-date insights. Make smarter, data-driven hiring decisions for better outcomes.</p>
                      </a>
                      <a href="/solution/#jd-prsing"  className='sm:mb-0 cursor-pointer'>
                      {/* <div className='mb-4 sm:mb-0 cursor-pointer' onClick={() => handleRedirect('/solutions/#jd-parsing')}> */}
                        <div className='flex items-center gap-4 mb-4'>
                          <img src={jdparsing} alt="jdparsing" className="w-8 h-8" />
                          <p className='text-xl font-medium'>JD Parsing</p>
                        </div>
                        <p className='mb-4 sm:mb-0 text-xs'>Automate and streamline job description creation with AI-powered parsing. Enhance recruitment efficiency with accurate, structured data extraction.</p>
                      </a>
                      <a href="/solution/#connect"  className='sm:mb-0 cursor-pointer'>
                      {/* <div className='mb-4 sm:mb-0 cursor-pointer' onClick={() => handleRedirect('/solutions/#connect')}> */}
                        <div className='flex items-center gap-4 mb-4'>
                          <img src={connect} alt="connect" className="w-8 h-8" />
                          <p className='text-xl font-medium'>Sourcing</p>
                        </div>
                        <p className='text-xs'>Unlock top talent faster with AI-powered precision. Gain a competitive edge with unmatched sourcing excellence.</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
