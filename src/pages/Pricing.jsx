import React, { useState } from 'react';
import Cancel from '../assets/svg/Cancel.svg';
import CheckMark from '../assets/svg/Check Mark.svg';

function Pricing() {
  document.title = 'Pricing'
  const [isMonthly, setisMonthly] = useState(true);

  return (
    <div className="w-full p-4 container m-auto mt-16">
      <section className="mb-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Pricing Plans</h1>
          <p className="text-lg text-gray-600 mb-4">Choose Your Plan and Start Growing Today!</p>
          <div className="inline-flex mb-6 border border-primary rounded-full overflow-hidden">
            <button
              onClick={() => setisMonthly(true)}
              className={`px-6 py-2 text-lg font-medium transition-colors duration-300 ${isMonthly ? 'bg-primary text-white' : 'text-primary bg-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setisMonthly(false)}
              className={`px-6 py-2 text-lg font-medium transition-colors duration-300 ${!isMonthly ? 'bg-primary text-white' : 'text-primary bg-white'}`}
            >
              Yearly
            </button>
          </div>
          {!isMonthly && (
            <p className="text-center text-base text-green-600 font-medium">Get discounted price on yearly subscription</p>
          )}
        </div>

        {/* Added max-w-6xl and mx-auto for centering and width control */}
        <div className="grid gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: 'Basic Plan',
              features: ['Resume Parser', 'Job Parser', 'Sourcing'],
              missing: ['Scoring', 'Enrichment', 'Talent on Demand'],
              status: 'Active',
            },
            {
              title: 'Premium Plan',
              features: ['Resume Parser', 'Job Parser', 'Sourcing', 'Scoring'],
              missing: ['Enrichment', 'Talent on Demand'],
            },
            {
              title: 'Enterprise Plan',
              features: [
                'All in Premium Plan',
                'ATS integration',
                'SSO',
                'Career site',
                'Job publish',
                'Custom development',
              ],
              missing: [],
            },
          ].map((plan, i) => (
            <div key={i} className={`border border-gray-300 rounded-xl shadow-sm hover:shadow-lg transition duration-300 `}>
              <div className="border-b border-gray-200 p-4 flex justify-between items-center bg-gray-50 rounded-t-xl">
                <h2 className="text-xl font-semibold text-gray-800">{plan.title}</h2>
                {plan.status && (
                  <span className="text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">Active</span>
                )}
              </div>
              <div className="p-5">
                <p className="mb-3 text-base font-semibold text-gray-700">Features</p>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 mb-2">
                    <img src={CheckMark} alt="Check" className="w-5 h-5" />
                    <span className="text-gray-700 text-base">{feature}</span>
                  </div>
                ))}
                {plan.missing.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 mb-2">
                    <img src={Cancel} alt="Cancel" className="w-5 h-5" />
                    <span className="text-gray-400 text-base">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-5">
                <a href="/contactus">
                  <button className="w-full bg-primary text-white font-semibold py-2.5 rounded-md text-lg hover:bg-primary/90 transition">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>

  );
}

export default Pricing;