import React, { useEffect } from 'react';
import solutionSec1 from '../assets/svg/resumeParser.svg';
import solutionSec2 from '../assets/svg/jdParser.svg';
import solutionSec3 from '../assets/svg/scoring.svg';
import solutionSec4 from '../assets/svg/sourcing.svg';
import sec2Group from '../assets/svg/sec2Group.svg';
import sec2top from '../assets/svg/sec2top.svg';
import enrichment from '../assets/svg/enrichment_new.svg';

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
        <div className="w-full p-4 container m-auto">
            <section id='resume-parsing' className=' xl:grid grid-cols-2 pb-8 xl:pb-20'>

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
                    <a href="/contactus"  className='sm:mb-0 cursor-pointer'>
                        <button className='btn text-white rounded-full px-10 py-3.5 bg-primary'>Get Started</button>
                    </a>
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
                    <a href="/contactus"  className='sm:mb-0 cursor-pointer'>
                        <button className='btn text-white rounded-full px-10 py-3.5 bg-primary'>Get Started</button>
                    </a>
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
            <section id='scoring' className=' xl:grid grid-cols-2 pb-20 mt-20'>
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
                        <p className='p-text'>Our AI-based candidate scoring service is designed to efficiently handle high-volume inbound applications, streamlining your recruitment process by automatically matching resumes with job descriptions. Using advanced machine learning algorithms, the system analyzes resumes for key skills, experience, and keywords, assigning a compatibility score based on how well candidates align with job requirements. This technology significantly reduces manual screening time, ensuring a consistent, unbiased evaluation of applicants. It ranks candidates and highlights top matches, helping you quickly identify the most qualified talent. Our solution boosts recruitment efficiency and scalability, while maintaining the crucial human touch in final hiring decisions.</p>
                    </div>
                    <div>
                    <a href="/contactus"  className='sm:mb-0 cursor-pointer'>
                        <button className='btn text-white rounded-full px-10 py-3.5 bg-primary'>Get Started</button>
                    </a>
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
            <section id='connect' className=' xl:grid grid-cols-2 pb-20 mt-20'>
                <div className=' relative'>
                    <div className=' mb-8 mt-0 xl:mb-14 xl:mt-32'>
                        <h1 className='heading-2 font-bold'>Building stronger teams by connecting the right talent with the right opportunities.</h1>
                    </div>
                    <div className='mb-14'>
                        <p className='p-text'>Transform your recruitment approach with an AI-powered search platform designed to revolutionize the way you discover top-tier talent. With the power of AI, you can quickly and accurately pinpoint the best candidates across a range of sourcing channels, including the open web and major job boards, ensuring a precise match to your unique hiring criteria. Gain a distinct competitive edge by uncovering high-quality talent that others may miss, all while benefiting from our unwavering dedication to sourcing excellence. This advanced solution empowers you to stay ahead of the curve, securing the right talent faster and more efficiently than ever before.</p>
                    </div>
                    <div>
                    <a href="/contactus"  className='sm:mb-0 cursor-pointer'>
                        <button className='btn text-white rounded-full px-10 py-3.5 bg-primary'>Get Started</button>
                    </a>
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
            <section id='enrichment' className=' xl:grid grid-cols-2 pb-20 mt-20'>
                <div className=' relative'>
                    <div className=' mb-8 mt-0 xl:mb-14 xl:mt-32'>
                        <h1 className='heading-2 font-bold'>Enhancing every profile with enriched insights for smarter hiring decisions.</h1>
                    </div>
                    <div className='mb-14'>
                        <p className='p-text'>The solution enhances candidate profiles through comprehensive data enrichment and continuous updates. It aggregates information from various sources like resumes, social media, and external databases, providing a deeper understanding of each applicant’s skills, experience, and professional background. Additionally, the solution keeps profiles current by regularly updating them with the latest available data from multiple channels. By utilizing advanced algorithms, it extracts key competencies and relevant data points, offering a holistic view of candidates. This enriched and up-to-date data helps hiring teams make more informed decisions, improving the quality of hires while saving time. The solution ensures that every candidate profile is thorough, accurate, and aligned with your hiring needs.</p>
                    </div>
                    <div>
                    <a href="/contactus"  className='sm:mb-0 cursor-pointer'>
                        <button className='btn text-white rounded-full px-10 py-3.5 bg-primary'>Get Started</button>
                    </a>
                    </div>
                    <img src={sec2top} alt="image1" className="w-96 h-auto absolute -top-20 left-0" />
                </div>
                <div className='relative flex justify-center align-middle items-center sm:px-18 lg:px-28 mt-20'>
                    <div className=' '>
                        <img  src={enrichment} alt="solutionSec1" className=" bg-white  pb-4  w-full " />
                        <img src={sec2Group} alt="image1" className=" w-96 h-auto absolute -bottom-20 right-0" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
