import React from 'react';
import platformsec1 from '../assets/svg/platform-sec1.svg';
import platformsec2 from '../assets/svg/platform-sec2.svg';
import sec2Group from '../assets/svg/sec2Group.svg';
import sec2top from '../assets/svg/sec2top.svg';

function Services() {
    return (
        <div className="">
            <section id='recruitment-as-services' className=' xl:grid grid-cols-2 pb-8 xl:pb-44 mt-12'>
              
                <div className='flex md:justify-center align-middle items-center px-4 md:px-12 lg:px-24 relative'>
                    <div className=''>
                        <img style={{ width: '100%' }} src={platformsec1} alt="image1" className=" bg-white  pb-4 " />
                    </div>
                    <img src={sec2top} alt="image1" className="w-96 h-auto absolute -top-64 left-0" />
                </div>
                <div className='relative'>
                    <div className=' mb-8 mt-0 xl:mb-14 xl:mt-32'>
                        <h1 className='heading-2 font-bold'>Empowering Recruitment with Seamless, AI-Driven Solutions.</h1>
                    </div>
                    <div className='mb-14'>
                        <p className='p-text'>Leverage advanced parsing technology to convert complex resumes and job descriptions into structured, actionable data. Our solution extracts key informced parsing technology to convert complex resumes and job tion like skills, .to convert complex resumes and job descriptions into structured, actionable data. Our solution extracts key information like skills, .</p>
                    </div>
                    <div>
                        <button className='btn text-white rounded-full px-10 py-3.5 bg-primary'>Start Now</button>
                    </div>
                    <img src={sec2Group} alt="image1" className="hidden xl:block w-96 h-auto absolute -bottom-72 right-0" />
                </div>
            </section>
            <section id='applicant-on-demand' className=' xl:grid grid-cols-2 pb-44 mt-44'>
                <div className=' relative'>
                    <div className=' mb-8 mt-0 xl:mb-14 xl:mt-32'>
                        <h1 className='heading-2 font-bold'>Connecting You with the Right Opportunities, On Demand.</h1>
                    </div>
                    <div className='mb-14'>
                        <p className='p-text'>Leverage advanced parsing technology to convert complex resumes and job descriptions into structured, actionable data. Our solution extracts key informced parsing technology to convert complex resumes and job tion like skills, .to convert complex resumes and job descriptions into structured, actionable data. Our solution extracts key information like skills, .</p>
                    </div>
                    <div>
                        <button className='btn text-white rounded-full px-10 py-3.5 bg-primary'>Start Now</button>
                    </div>
                    <img src={sec2top} alt="image1" className="w-96 h-auto absolute -top-20 left-0" />
                </div>
                <div className='relative flex justify-center align-middle items-center sm:px-18 lg:px-28 mt-20'>
                    <div className=' '>
                        <img  src={platformsec2} alt="platformsec2" className=" bg-white  pb-4  w-full " />
                        <img src={sec2Group} alt="image1" className=" w-96 h-auto absolute -bottom-72 right-0" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
