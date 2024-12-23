import React from 'react';

function TermsOfUse() {
  return (
    <div style={{marginTop: '85px'}} className="w-full p-4 container m-auto">
      <h1 className="text-4xl font-bold text-green-600"></h1>

      <div className="bg-white-50 p-8 text-gray-800">
      <h1 className="text-4xl font-bold text-left mb-6">Terms of Use</h1>
      <p className="text-sm text-gray-500 text-left mb-6">
        Effective Date: <span className="font-semibold">December 10, 2024</span>
      </p>
      <div className="space-y-6">
        <p>
          Welcome to <span className="font-semibold">Mandal Solutions, LLC.</span> ("Company," "we," "our," or "us"). These Terms of Use ("Terms") govern your use of our website{" "}
          <span className="font-semibold">www.mandalsolution.com</span> ("Website") and the services we offer, including job postings, recruitment services, and related resources
          (collectively, the "Services"). By accessing or using our Website or Services, you agree to these Terms. If you do not agree, do not use the Website or Services.
        </p>

        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-semibold">1. Eligibility</h2>
          <p>
            By using our Services, you represent and warrant that you are at least 18 years old, have the legal capacity to enter into a binding contract, and will comply with these
            Terms and all applicable laws and regulations.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-semibold">2. Services</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Job postings for employers.</li>
            <li>Resume and candidate profile submissions for job seekers.</li>
            <li>Recruitment and talent acquisition consulting.</li>
          </ul>
          <p className="mt-2">
            Disclaimer: We do not guarantee job placement or specific outcomes for job seekers or employers.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-2xl font-semibold">3. User Accounts</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide accurate, current, and complete information during registration.</li>
            <li>Keep your login credentials confidential.</li>
            <li>Notify us immediately of any unauthorized use of your account.</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate accounts that violate these Terms.
          </p>
        </div>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Prohibited Activities</h2>
          <p>When using our Website or Services, you agree NOT to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Post false, misleading, or fraudulent information.</li>
            <li>Impersonate another person or entity.</li>
            <li>Use the Website or Services for any unlawful purpose.</li>
            <li>Transmit viruses, malware, or harmful code.</li>
            <li>Scrape, crawl, or otherwise extract data without our prior written consent.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
          <p>
            All content on the Website, including text, graphics, logos, and software, is owned by or licensed to the Company and is protected by copyright, trademark, and other
            intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Privacy</h2>
          <p>
            Your use of our Services is subject to our{" "}
            <a href="/PrivacyPolicy" className="text-blue-600 underline">
              Privacy Policy
            </a>
            , which describes how we collect, use, and protect your personal information.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
          <p>
            Our Website may contain links to third-party websites or services. We are not responsible for the content, policies, or practices of these third-party sites. Accessing
            third-party links is at your own risk.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, the Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not
            limited to lost profits, loss of data, or other intangible losses arising from your use of the Website or Services.
          </p>
        </section>

        {/* Section 9 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless the Company, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, or
            expenses arising out of your use of the Website or Services or any violation of these Terms.
          </p>
        </section>

        {/* Section 10 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the Website. Your continued use of the Website or Services
            after changes are posted constitutes your acceptance of the revised Terms.
          </p>
        </section>

        {/* Section 11 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
          <p>
            We may suspend or terminate your access to the Website or Services at our discretion, with or without notice, for any reason, including violation of these Terms.
          </p>
        </section>

        {/* Section 12 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of <span className="font-semibold">North Carolina</span>, without regard to its conflict of laws principles. Any legal
            action arising out of these Terms shall be filed in a court of competent jurisdiction located in{" "}
            <span className="font-semibold">Raleigh, North Carolina</span>.
          </p>
        </section>

        {/* Section 13 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms, please contact us at:
          </p>
          <ul className="list-none ml-6">
          <li>Mandal Solutions, LLC.</li>
          <li>3321 S Walnut Creek Pkwy</li>
          <li>Apt C</li>
          <li>Raleigh, NC 27606</li>
        </ul>
        </section>
      </div>
    </div>
      
    </div>
  );
}

export default TermsOfUse;
