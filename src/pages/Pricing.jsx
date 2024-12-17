import React, { useState } from 'react';
import Cancel from '../assets/svg/Cancel.svg';
import CheckMark from '../assets/svg/Check Mark.svg';

function Pricing() {
  const [isMonthly, setisMonthly] = useState(true);

  return (
    <div style={{marginTop: '85px'}} className="w-full p-4 container m-auto">
      <section className="mb-16">
        <div className="flex justify-center">
          <div className="text-center w-full">
            <h1 className="heading-3 font-semibold mb-4">Pricing Plans</h1>
            <p className="mb-6 text-center text-xl">Choose Your Plan and Start Growing Today!</p>
            <div className={`flex justify-center ${isMonthly ? 'mb-7' : 'mb-0' } `}>
            <div className="flex mb-4 border border-primary rounded-full">
              <button
                onClick={() => setisMonthly(true)} // Wrap state update in a function
                className={` rounded-l-full cursor-pointer w-28 text-lg font-semibold py-1 ${isMonthly ? 'bg-primary text-white' : 'bg-white text-primary'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setisMonthly(false)} // Wrap state update in a function
                className={` rounded-r-full cursor-pointer w-28 text-lg font-semibold py-1 ${!isMonthly ? 'bg-primary text-white' : 'bg-white text-primary'}`}
              >
                Yearly
              </button>
            </div>
            </div>
            {
              !isMonthly ? <p className=' text-center text-xl'>Get dicounted price on yearly subscription</p> : null
            }
          </div>
        </div>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8'>
          <div className='border border-gray-300 rounded-md'>
            <div className='border-b border-gray-300 p-4 flex items-center'>
              <div className=' text-black font-semibold text-xl'>Basic Plan</div>
              <div className='ml-4 flex gap-1 items-center rounded-full px-4 font-semibold text-base border border-sky-400 '>
                <div style={{minWidth: '6px', minHeight: '6px', maxHeight: '6px', maxWidth: '6px'}} className=' bg-success rounded-full'></div>
                <div className=' text-base font-semibold'>Active</div>
              </div>
            </div>
            <div className='p-4 border-b border-gray-300'>
              <p className='mb-4 text-base font-semibold'>Features</p>
              <div className='flex items-center gap-4 mb-4'>
                <img src={CheckMark} alt="CheckMark" className="rounded-icon" />
                <p className=' font-medium text-lg'>Resume Parsing</p>
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <img src={CheckMark} alt="CheckMark" className="rounded-icon" />
                <p className=' font-medium text-lg'>Job Description Parsing</p>
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <img src={CheckMark} alt="CheckMark" className="rounded-icon" />
                <p className=' font-medium text-lg'>Scoring</p>
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <img src={Cancel} alt="Cancel" className="rounded-icon" />
                <p className=' font-medium text-lg'>Connect</p>
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <img src={Cancel} alt="Cancel" className="rounded-icon" />
                <p className=' font-medium text-lg'>Enrichment</p>
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <img src={Cancel} alt="Cancel" className="rounded-icon" />
                <p className=' font-medium text-lg'>Applicant on Demand</p>
              </div>
            </div>
            <div className='p-4'>
              <button disabled className='text-white font-semibold text-xl bg-primary opacity-75 py-4 rounded-md w-full '>Current Plan</button>
            </div>
          </div>
          <div className='border border-gray-300 rounded-md'>
            <div className='border-b border-gray-300 p-4 flex items-center'>
              <div className=' text-black font-semibold text-xl'>Premium Plan</div>
            </div>
            <div className='p-4 border-b border-gray-300'>
              <p className='mb-4 text-base font-semibold'>Features</p>
              <div className='flex items-center gap-4 mb-4'>
                <img src={CheckMark} alt="CheckMark" className="rounded-icon" />
                <p className=' font-medium text-lg'>Resume Parsing</p>
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <img src={CheckMark} alt="CheckMark" className="rounded-icon" />
                <p className=' font-medium text-lg'>Job Description Parsing</p>
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <img src={CheckMark} alt="CheckMark" className="rounded-icon" />
                <p className=' font-medium text-lg'>Scoring</p>
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <img src={CheckMark} alt="CheckMark" className="rounded-icon" />
                <p className=' font-medium text-lg'>Connect</p>
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <img src={Cancel} alt="Cancel" className="rounded-icon" />
                <p className=' font-medium text-lg'>Enrichment</p>
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <img src={Cancel} alt="Cancel" className="rounded-icon" />
                <p className=' font-medium text-lg'>Applicant on Demand</p>
              </div>
            </div>
            <div className='p-4'>
              <button className='text-white font-semibold text-xl bg-primary py-4 rounded-md w-full '>Contact Us</button>
            </div>
          </div>
          <div className='border border-gray-300 rounded-md'>
            <div className='border-b border-gray-300 p-4 flex items-center'>
              <div className=' text-black font-semibold text-xl'>Enterprise Plan</div>
            </div>
            <div className='p-4 border-b border-gray-300'>
              <p className='mb-4 text-base font-semibold'>Features</p>
              <div className='flex items-center gap-4 mb-4'>
                <img src={CheckMark} alt="CheckMark" className="rounded-icon" />
                <p className=' font-medium text-lg'>Resume Parsing</p>
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <img src={CheckMark} alt="CheckMark" className="rounded-icon" />
                <p className=' font-medium text-lg'>Job Description Parsing</p>
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <img src={CheckMark} alt="CheckMark" className="rounded-icon" />
                <p className=' font-medium text-lg'>Scoring</p>
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <img src={CheckMark} alt="CheckMark" className="rounded-icon" />
                <p className=' font-medium text-lg'>Connect</p>
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <img src={CheckMark} alt="CheckMark" className="rounded-icon" />
                <p className=' font-medium text-lg'>Enrichment</p>
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <img src={CheckMark} alt="CheckMark" className="rounded-icon" />
                <p className=' font-medium text-lg'>Applicant on Demand</p>
              </div>
            </div>
            <div className='p-4'>
              <button className='text-white font-semibold text-xl bg-primary py-4 rounded-md w-full '>Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
