import React, { useEffect } from 'react';
import platformsec1 from '../assets/svg/platform-sec1.svg';
import platformsec2 from '../assets/svg/platform-sec2.svg';
import sec2Group from '../assets/svg/sec2Group.svg';
import sec2top from '../assets/svg/sec2top.svg';

function Services() {
    document.title = 'Services'
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
            <section id='recruitment-as-services' className=' xl:grid grid-cols-2 pb-8 xl:pb-44'>
              
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
                        <p className='p-text'>Recruitment as a Service (RaaS) offers a scalable solution for businesses to hire across various industries and roles. We handle the entire recruitment process, including job descriptions, sourcing, screening, and placement. Whether you need operational, technical, marketing, or executive talent, our platform connects you with qualified candidates. RaaS streamlines hiring, reduces costs, and provides insights for informed decisions. It adapts to your business needs, allowing you to focus on growth while we manage talent acquisition efficiently.</p>
                    </div>
                    <div>
                    <a href="/contactus"  className='sm:mb-0 cursor-pointer'>
                        <button className='btn text-white rounded-full px-10 py-3.5 bg-primary'>Get Started</button>
                    </a>
                    </div>
                    <img src={sec2Group} alt="image1" className="hidden xl:block w-96 h-auto absolute -bottom-72 right-0" />
                </div>
            </section>
            <section id='applicant-on-demand' className=' xl:grid grid-cols-2 pb-44'>
                <div className='relative'>
                    <div className=' mb-8 mt-0 xl:mb-14 xl:mt-32'>
                        <h1 className='heading-2 font-bold'>Connecting You with the Right Opportunities, On Demand.</h1>
                    </div>
                    <div className='mb-14'>
                        <p className='p-text'>We offer a flexible, results-driven service model where compensation is linked to performance, allowing businesses to access skilled professionals for specific tasks or projects on demand. Our pay-for-performance approach ensures payment is tied to the successful completion of tasks and achievement of goals, providing a cost-effective solution. Whether you need nurses, drivers, or security professionals, we deliver the expertise required for your needs. This model allows businesses to hire professionals as needed, without long-term commitments or overhead costs, ensuring high-quality results. Our team focuses on top-tier performance and measurable outcomes, helping your business meet its objectives. This approach ensures agility, so businesses have the right talent when needed, paying only for results.</p>
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
                        <img  src={platformsec2} alt="platformsec2" className=" bg-white  pb-4  w-full " />
                        <img src={sec2Group} alt="image1" className=" w-96 h-auto absolute -bottom-72 right-0" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
