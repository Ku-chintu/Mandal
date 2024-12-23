import React, { useEffect } from 'react';
import solutionSec1 from '../assets/svg/solutionSec1.svg';
import solutionSec2 from '../assets/svg/solutionSec2.svg';
import solutionSec3 from '../assets/svg/solutionSec3.svg';
import solutionSec4 from '../assets/svg/solutionSec4.svg';
import sec2Group from '../assets/svg/sec2Group.svg';
import sec2top from '../assets/svg/sec2top.svg';

function Services() {
    document.title = 'Solutions'
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
    return (
        <div style={{marginTop: '85px'}} className="w-full p-4 container m-auto">
            <section id='resume-parsing' className=' xl:grid grid-cols-2 pb-8 xl:pb-20 mt-12'>

                <div className='hidden xl:flex md:justify-center align-middle items-center px-4 md:px-12 lg:px-24 relative'>
                    <div className=''>
                        <img style={{ width: '100%' }} src={solutionSec1} alt="image1" className=" bg-white  pb-4 " />
                    </div>
                    <img src={sec2top} alt="image1" className="w-96 h-auto absolute -top-20 left-0" />
                </div>
                <div className='relative'>
                    <div className=' mb-8 mt-0 xl:mb-14 xl:mt-32'>
                        <h1 className='heading-2 font-bold'>Simplify Your Hiring Process with AI-Powered Resume Parsing.</h1>
                    </div>
                    <div className='mb-14'>
                        <p className='p-text'>Our AI-based resume parsing service offers businesses an efficient and accurate solution for streamlining the hiring process. By leveraging advanced AI technology, we help you automatically extract key information from resumes, such as skills, work experience, education, and contact details. Our service supports multiple file formats and can quickly process large volumes of resumes, saving your HR team valuable time. With powerful natural language processing, the system ensures precise extraction of relevant data from resumes. This reduces manual errors, enhances productivity, and accelerates decision-making. Our customizable solution adapts to various industries, helping you find the best candidates faster and improving your recruitment efficiency. Additionally, our solution is available through an easy-to-integrate API, allowing seamless integration with your existing recruitment systems.</p>
                    </div>
                    <div>
                        <button className='btn text-white rounded-full px-10 py-3.5 bg-primary'>Start Now</button>
                    </div>
                    <img src={sec2Group} alt="image1" className="hidden xl:block w-96 h-auto absolute -bottom-20 right-0" />
                    <img src={sec2top} alt="image1" className="block xl:hidden w-96 h-auto absolute -top-20 left-0" />
                </div>
                <div className=' flex xl:hidden md:justify-center align-middle items-center px-4 md:px-12 lg:px-24 relative'>
                    <div className=''>
                        <img style={{ width: '100%' }} src={solutionSec1} alt="image1" className=" bg-white  pb-4 " />
                    </div>
                    <img src={sec2Group} alt="image1" className="hidden xl:block w-96 h-auto absolute -bottom-72 right-0" />
                </div>
            </section>
            <section id='jd-prsing' className=' xl:grid grid-cols-2 pb-20 mt-20'>
                <div className=' relative'>
                    <div className=' mb-8 mt-0 xl:mb-14 xl:mt-32'>
                        <h1 className='heading-2 font-bold'>Job Description Parsing Made Simple: Focus on What Matters.</h1>
                    </div>
                    <div className='mb-14'>
                        <p className='p-text'>Our AI-based job description parsing service offers businesses an efficient and accurate way to streamline the creation and management of job postings. By leveraging advanced AI and natural language processing, we automatically extract key information such as job titles, required skills, responsibilities, qualifications, and location. This ensures job descriptions are structured and consistent across all listings. Our solution supports various file formats, making it highly versatile and parsed data is provided in a structured format for easy integration into your existing recruitment systems. With customizable parsing capabilities, you can tailor the service to meet industry-specific needs. The automated process saves time and reduces manual effort, enabling faster job posting creation and improved productivity. Our solution enhances job matching by ensuring clear, precise descriptions that align with candidate profiles. Available through an API, it seamlessly integrates with your ATS. Ultimately, our service helps improve recruitment efficiency, reduce time-to-hire, and deliver better hiring outcomes.</p>
                    </div>
                    <div>
                        <button className='btn text-white rounded-full px-10 py-3.5 bg-primary'>Start Now</button>
                    </div>
                    <img src={sec2top} alt="image1" className="w-96 h-auto absolute -top-20 left-0" />
                </div>
                <div className='relative flex justify-center align-middle items-center sm:px-18 lg:px-28 mt-20'>
                    <div className=' '>
                        <img src={solutionSec2} alt="solutionSec1" className=" bg-white  pb-4  w-full " />
                        <img src={sec2Group} alt="image1" className=" w-96 h-auto absolute -bottom-20 right-0" />
                    </div>
                </div>
            </section>
            <section id='enrichment' className=' xl:grid grid-cols-2 pb-20 mt-20'>
                <div className='hidden xl:flex  relative  justify-center align-middle items-center sm:px-18 lg:px-28 mt-20'>
                    <div className=' '>
                        <img src={solutionSec3} alt="solutionSec1" className=" bg-white  pb-4  w-full " />
                        <img src={sec2top} alt="image1" className="w-96 h-auto absolute -top-20 left-0" />
                    </div>
                </div>
                <div className=' relative'>
                    <div className=' mb-8 mt-0 xl:mb-14 xl:mt-32'>
                        <h1 className='heading-2 font-bold'>Empowering recruiters with intelligent scoring to identify top talent faster.</h1>
                    </div>
                    <div className='mb-14'>
                        <p className='p-text'>Leverage advanced parsing technology to convert complex resumes and job descriptions into structured, actionable data. Our solution extracts key informced parsing technology to convert complex resumes and job tion like skills, .to convert complex resumes and job descriptions into structured, actionable data. Our solution extracts key information like skills, .</p>
                    </div>
                    <div>
                        <button className='btn text-white rounded-full px-10 py-3.5 bg-primary'>Start Now</button>
                    </div>
                    <img src={sec2Group} alt="image1" className="hidden xl:block w-96 h-auto absolute -bottom-20 right-0" />
                    <img src={sec2top} alt="image1" className="block xl:hidden w-96 h-auto absolute -top-20 left-0" />

                </div>
                <div className='block xl:hidden  relative  justify-center align-middle items-center sm:px-18 lg:px-28 mt-20'>
                    <div className=' '>
                        <img src={solutionSec3} alt="solutionSec1" className=" bg-white  pb-4  w-full " />
                        
                    </div>
                </div>

            </section>
            <section id='scoring' className=' xl:grid grid-cols-2 pb-20 mt-20'>
                <div className=' relative'>
                    <div className=' mb-8 mt-0 xl:mb-14 xl:mt-32'>
                        <h1 className='heading-2 font-bold'>Building stronger teams by connecting the right talent with the right opportunities.</h1>
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
                        <img src={solutionSec4} alt="solutionSec1" className=" bg-white  pb-4  w-full " />
                        <img src={sec2Group} alt="image1" className=" w-96 h-auto absolute -bottom-20 right-0" />
                    </div>
                </div>
            </section>
            <section id='connect' className=' xl:grid grid-cols-2 pb-20 mt-20'>
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
                        image here
                        {/* <img  src={solutionSec1} alt="solutionSec1" className=" bg-white  pb-4  w-full " /> */}
                        <img src={sec2Group} alt="image1" className=" w-96 h-auto absolute -bottom-20 right-0" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
