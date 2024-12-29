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
                        <p className='p-text'>Our AI-driven resume parsing service automates the extraction of key information like skills, experience, education, and contact details from resumes. It supports multiple file formats and efficiently processes large volumes of resumes, saving time for your HR team. With advanced natural language processing, the system ensures accurate data extraction, reducing manual errors. The solution is customizable for various industries, improving recruitment speed and efficiency. It integrates seamlessly with existing systems via an easy-to-use API, helping you find top candidates faster.</p>
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
                        <p className='p-text'>Job description parsing service streamlines the creation and management of job postings by automatically extracting key details like job titles, skills, responsibilities, qualifications, and location. It ensures consistency and structure across all listings. Supporting various file formats, the service provides parsed data in a structured format for easy integration with your recruitment systems. Customizable to meet industry-specific needs, it saves time and reduces manual effort. Available via API, it integrates seamlessly with your ATS, improving job matching and recruitment efficiency, ultimately leading to faster hires and better outcomes.</p>
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
                        <p className='p-text'>AI-powered candidate scoring service is designed to efficiently handle high-volume inbound applications, streamlining your recruitment process by automatically matching resumes with job descriptions. Using advanced machine learning algorithms, the system analyzes resumes for key skills, experience, and keywords, assigning a compatibility score based on how well candidates align with job requirements. This technology significantly reduces manual screening time, ensuring a consistent, unbiased evaluation of applicants. It ranks candidates and highlights top matches, helping you quickly identify the most qualified talent. Our solution boosts recruitment efficiency and scalability, while maintaining the crucial human touch in final hiring decisions.</p>
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
                        <p className='p-text'>The solution strengthens candidate profiles by enriching them with comprehensive data and ongoing updates. It collects information from resumes, social media, and external sources to provide a deeper insight into each applicant's skills, experience, and background. Profiles are kept current through regular updates from multiple channels. Using advanced algorithms, the solution identifies key competencies and relevant data points for a well-rounded view of candidates. This enriched, up-to-date information enables hiring teams to make more informed decisions, enhancing hiring quality and efficiency. Ultimately, it ensures that profiles are thorough, accurate, and aligned with hiring requirements.</p>
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
