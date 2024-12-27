import React from 'react';
import platformsec1 from '../assets/svg/platform-sec1.svg';
import platformsec2 from '../assets/svg/platform-sec2.svg';
import sec2Group from '../assets/svg/sec2Group.svg';
import sec2top from '../assets/svg/sec2top.svg';

function Services() {
    document.title = 'Services'
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
                        <p className='p-text'>Recruitment as a Service (RaaS) offers a comprehensive, scalable solution for businesses seeking to hire talent across all industries and roles. We handle every step of the recruitment process, from job description creation to candidate sourcing, screening, and placement. Whether you need operational staff, technical experts, marketing professionals, or executives, our platform ensures access to a wide range of qualified candidates. Our service streamlines hiring, reduces costs, and provides valuable insights for informed decisions. RaaS adapts to your business needs, allowing you to focus on growth while we manage your talent acquisition efficiently and effectively.</p>
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
                        <p className='p-text'>We offer a flexible and results-oriented service model where compensation is directly linked to performance, providing businesses with the ability to access skilled professionals for specific tasks or projects on demand. Our pay-for-performance approach ensures that payment is tied to the successful completion of tasks and the achievement of predefined goals, offering businesses a cost-effective solution. Whether you're in need of high-demand roles such as nurses, drivers, or security professionals, we provide the expertise required to meet your specific needs. With this model, you can hire professionals as needed without long-term commitments or overhead costs, while ensuring high-quality results. Our team is committed to delivering top-tier performance, prioritizing measurable outcomes and helping your business achieve its objectives. This approach allows businesses to remain agile, ensuring they have the right talent in place when required and only pay for results.</p>
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
