import React, { useState } from "react";
import landingPage from '../assets/svg/landingpage.svg';
import Image1 from '../assets/svg/image 1.svg'; // Adjust the path as needed
import Group1 from '../assets/svg/Group 1.svg'; // Adjust the path as needed
import Group2 from '../assets/svg/Group 2.svg'; // Adjust the path as needed
import Rectangle from '../assets/svg/Rectangle 2.svg'; // Adjust the path as needed
import Landingpage from '../assets/svg/landing page.svg'; // Adjust the path as needed
import sec2Group from '../assets/svg/sec2Group.svg'; // Adjust the path as needed
import sec2top from '../assets/svg/sec2top.svg'; // Adjust the path as needed
import Plusicon from '../assets/svg/Plusicon.svg'; // Adjust the path as needed
import Section3 from '../assets/svg/section3.svg'; // Adjust the path as needed
import Section4 from '../assets/svg/section4.svg'; // Adjust the path as needed
import Section5 from '../assets/svg/section5.svg'; // Adjust the path as needed
import acord2 from '../assets/svg/acord2.svg'; // Adjust the path as needed
import acord3 from '../assets/svg/acord3.svg'; // Adjust the path as needed
import acord4 from '../assets/svg/acord4.svg'; // Adjust the path as needed
import accord5 from '../assets/svg/accord5.svg'; // Adjust the path as needed
import acord6 from '../assets/svg/acord6.svg'; // Adjust the path as needed

function Home() {
  document.title = 'Home'
  const [openIndex, setOpenIndex] = useState(0); // Default to first accordion open

  const accordionData = [
    {
      title: "Score and rank inbound applicants",
      content: "Recruiters often receive a large volume of applications for open positions. With mAI, you can efficiently screen and match candidates to job criteria, enabling you to prioritize the most qualified talent immediately. Our streamlined screening process saves time, enhances productivity, and helps you move quickly from application to hire—without compromising on quality.",
    },
    {
      title: "Discover top talent through AI-powered search across the web",
      content: "Enhance your recruitment strategy with an Al-driven search platform that revolutionizes the way you discover talent. mAl enables you to swiftly identify top candidates across the open web, perfectly matching your specific criteria. Stay ahead of the competition by uncovering talent others overlook, all while staying grounded in our commitment to sourcing excellence and giving you a clear competitive advantage.",
    },
    {
      title: "Engage with AI-powered email automation",
      content: "Supercharge candidate engagement with Al-powered email campaigns that reflect your unique voice and brand. Harness customizable templates and intelligent Al-driven commands to effortlessly personalize messages at scale, resulting in a 40% boost in response rates and fostering deeper connections with top talent.",
    },
    {
      title: "Screening and Interview scheduling with ChatBot",
      content: "mAl's chatbot powered by conversational Al is an intelligent tool that automates the early stages of candidate screening by engaging with applicants, asking role-specific questions, and evaluating their responses against predefined criteria. This ensures that only the most suitable candidates move forward in the recruitment process, saving time, reducing human bias, and improving overall hiring efficiency.",
    },
    {
      title: "AI-powered job and resume parsing",
      content: "Leverage advanced parsing technology to convert complex resumes and job descriptions into structured, actionable data.",
    },
    {
      title: "On demand qualified applicant",
      content: "We provide a flexible, pay-for-performance service model that connects businesses with skilled professionals for specific tasks or projects. By linking compensation to task completion and goal achievement, businesses can access top talent without long-term commitments, ensuring cost-effective, high-quality results.",
    },
  ];

  const handleAccordionClick = (index) => {
    console.log('check 111111111111111111111111', index);

    setOpenIndex(index);
  };

  return (
    <div className="w-full p-4 container m-auto">
      <section className=' xl:grid grid-cols-2 pb-44 mt-12'>
        <div>
          <div className=' mb-8 mt-0 xl:mb-14 xl:mt-20'>
            <h1 className='heading-1 font-bold'>AI powered solution</h1>
            <p className='heading-1 font-medium'>delivering top talent</p>
          </div>
          <div className='mb-14'>
            <p className='p-text'>Streamline hiring and boost talent quality with an all-in-one platform for AI, CRM, sourcing,analytics, and automation.</p>
          </div>
          <div>
          <a href="/contactus"  className='sm:mb-0 cursor-pointer'>
            <button className='btn text-white rounded-full px-10 py-3.5 bg-primary'>Get Started</button>
            </a>
          </div>
        </div>
        <div className='flex md:justify-center align-middle items-center sm:px-18 lg:px-28 mt-10'>
          <div className=' relative mr-12'>
            <img src={landingPage} alt="image1"/>

            <div className=' absolute top-1/4 sm:top-1/4 -right-10 sm:-right-28 md:-right-32'>
              <div className=' h-12 w-44  sm:h-16  sm:w-52 p-4 bg-white shadow-2xl rounded-xl mb-2 sm:mb-4 text-sm sm:text-xl font-medium items-center flex justify-center text-center'>Transform TA</div>
              <div className=' h-12 w-44  sm:h-16  sm:w-52 p-4 bg-white shadow-2xl rounded-xl mb-2 sm:mb-4 text-sm sm:text-xl font-medium items-center flex justify-center text-center'>Save Time </div>
              <div className=' h-12 w-44  sm:h-16  sm:w-52 p-4 bg-white shadow-2xl rounded-xl mb-2 sm:mb-4 text-sm sm:text-xl font-medium items-center flex justify-center text-center'>Optimize</div>
              <div className=' h-12 w-44  sm:h-16  sm:w-52 p-4 bg-white shadow-2xl rounded-xl mb-2 sm:mb-4 text-sm sm:text-xl font-medium items-center flex justify-center text-center'>Increase Talent Quality</div>
            </div>
          </div>
        </div>
      </section>
      <section className=' xl:grid grid-cols-2 '>
        <div className='hidden  xl:flex md:justify-center align-middle items-center px-4 md:px-12 lg:px-24 relative'>
          <div className=''>
            <img style={{ width: '100%' }} src={Landingpage} alt="image1" className=" bg-white pr-4 pb-4 " />
          </div>
          <img src={sec2top} alt="image1" className="w-96 h-auto absolute -top-64 left-0" />
        </div>
        <div className='relative'>
          <div className=' mb-6 mt-0 xl:mb-14'>
            <h1 className='heading-2 font-bold'>Talent solution with seamless workflow integration</h1>
          </div>
          <div className='mb-10 relative'>
            <p className='p-text'>mAI streamlines your entire recruitment process into one platform, effortlessly integrating with your ATS for a unified workflow. By removing the reliance on multiple tools, mAI helps lower costs and boosts the overall efficiency of your talent acquisition process.</p>
            <img src={sec2Group} alt="image1" className="hidden xl:block w-96 h-auto absolute -bottom-72 right-0" />
          </div>
        </div>
        <div className='flex xl:hidden md:justify-center align-middle items-center px-4 md:px-12 lg:px-24 '>
          <div className=' relative'>
            <img style={{ width: '100%' }} src={Landingpage} alt="image1" className=" bg-white pr-4 pb-4 " />
          </div>
        </div>
      </section>
      <section className=' xl:grid grid-cols-2'>
        <div className='relative'>
          <div className=' mb-6 mt-0 xl:mb-14 xl:mt-32'>
            <h1 className='heading-2 font-bold'>Real-time insights and analytics</h1>
          </div>
          <div className='mb-10 relative'>
            <p className='p-text'>mAI's integrated platform provides real-time insights throughout your recruitment process, empowering your team to make quicker, data-informed decisions. With in-depth reporting, you can monitor key metrics, adjust strategies proactively, and enhance recruitment results across your organization.</p>

            <img src={sec2top} alt="image1" className="w-96 h-auto absolute -top-96 left-0" />
          </div>
        </div>
        <div className='flex md:justify-center align-middle items-center px-4 md:px-12 lg:px-24 relative'>
          <div className=''>
            {/* <img style={{ width: '100%'}} src={Landingpage} alt="image1" className=" bg-white pr-4 pb-4 " /> */}
            <img style={{ width: '100%' }} src={Section3} alt="image1" className=" bg-white pr-4 pb-4 " />
          </div>
          <img src={sec2Group} alt="image1" className="hidden xl:block w-96 h-auto absolute -bottom-72 right-0" />
        </div>
      </section>
      <section className=' xl:grid grid-cols-2 '>
        <div className='hidden  xl:flex md:justify-center align-middle items-center px-4 md:px-12 lg:px-24 relative'>
          <div className=''>
            {/* <img style={{ width: '100%'}} src={Landingpage} alt="image1" className=" bg-white pr-4 pb-4 " /> */}
            <img style={{ width: '100%' }} src={Section4} alt="image1" className=" bg-white pr-4 pb-4 " />
          </div>
          <img src={sec2top} alt="image1" className="w-96 h-auto absolute -top-64 left-0" />
        </div>
        <div className='relative'>
          <div className=' mb-6 mt-0 xl:mb-14 xl:mt-32'>
            <h1 className='heading-2 font-bold'>Recruit top talent at scale</h1>
          </div>
          <div className='mb-10 relative'>
            <p className='p-text'>mAI's platform is built to assist talent acquisition teams in filling requisitions more quickly and efficiently, whether for specialized roles or high-volume hiring. By automating key processes such as sourcing, screening, candidate engagement, and scheduling, mAI streamlines the recruitment process, ensuring quality candidates are placed swiftly and without unnecessary complexity.</p>
            <img src={sec2Group} alt="image1" className="hidden xl:block w-96 h-auto absolute -bottom-72 right-0" />
          </div>
        </div>
        <div className='flex xl:hidden md:justify-center align-middle items-center px-4 md:px-12 lg:px-24 '>
          <div className=' relative'>
            <img style={{ width: '100%' }} src={Landingpage} alt="image1" className=" bg-white pr-4 pb-4 " />
          </div>
        </div>
      </section>
      <section className='pt-20 '>
        <div className='relative'>
          {/* <div className=' mb-6 mt-0 xl:mb-14 xl:mt-0'> */}
            <h1 className='heading-2 font-bold text-center text-5xl'>What distinguishes mAI from the rest</h1>
          {/* </div> */}
          <img src={sec2top} alt="image1" className="w-96 h-auto absolute -top-20 left-0" />
        </div>
      </section>
      <section className=' xl:grid grid-cols-2 pt-24 pb-44'>
        <div className=''>
          <div className="w-full mt-10 border-b border-primary">
            {accordionData.map((item, index) => (
              <div key={index} className="border-t border-primary py-3 overflow-hidden">
                <div onClick={() => handleAccordionClick(index)} className="flex items-center align-middle cursor-pointer">
                  <img src={Plusicon} alt="Plusicon" className="w-9 h-9" />
                  <button
                    className="w-full text-xl flex px-4 py-2  font-semibold cursor-pointer "
                  >
                    {item.title}
                  </button>
                </div>
                <div
                  className={`transition-all duration-300 overflow-hidden ${openIndex === index ? "max-h-screen" : "max-h-0"
                    }`}
                >
                  <div className="flex ">
                    <p className=" pl-12 py-2 ">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex md:justify-center align-middle items-center px-4 md:px-12 lg:px-24 relative'>
          <div className=''>
            {
              openIndex === 0 ? <img style={{ width: '100%' }} src={Section5} alt="image1" className=" bg-white pr-4 pb-4 " /> : null
            }
            {
              openIndex === 1 ? <img style={{ width: '100%' }} src={acord2} alt="image1" className=" bg-white pr-4 pb-4 " /> : null
            }
            {
              openIndex === 2 ? <img style={{ width: '100%' }} src={acord3} alt="image1" className=" bg-white pr-4 pb-4 " /> : null
            }
            {
              openIndex === 3 ? <img style={{ width: '100%' }} src={acord4} alt="image1" className=" bg-white pr-4 pb-4 " /> : null
            }
            {
              openIndex === 4 ? <img style={{ width: '100%' }} src={accord5} alt="image1" className=" bg-white pr-4 pb-4 " /> : null
            }
            {
              openIndex === 5 ? <img style={{ width: '100%' }} src={acord6} alt="image1" className=" bg-white pr-4 pb-4 " /> : null
            }

          </div>
          <img src={sec2Group} alt="image1" className="hidden xl:block w-96 h-auto absolute -bottom-44 right-0" />
        </div>
      </section>
    </div>
  );
}

export default Home;
