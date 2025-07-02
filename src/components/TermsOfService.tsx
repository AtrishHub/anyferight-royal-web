import React from 'react';

const TermsOfService = () => {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text text-center">Terms and Conditions</h1>
        <div className="bg-white glass-effect rounded-2xl p-8 md:p-12 shadow-lg">
          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> July 1, 2025
          </p>
          <p className="text-gray-600 mb-6">
            Welcome to AnyFreight Logistics. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">1. Company Information</h2>
          <p className="text-gray-600 mb-6">
            <span className="block font-medium">AnyFreight Logistics</span>
            <span className="block">🌐 Website: <a href="https://www.anyfreightlogistic.com" className="text-gold-500 underline">www.anyfreightlogistic.com</a></span>
            <span className="block">📧 Email: <a href="mailto:info@anyfreightlogistic.com" className="text-gold-500 underline">info@anyfreightlogistic.com</a></span>
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">2. Use of Website</h2>
          <p className="text-gray-600 mb-2">You agree to use our website for lawful purposes only. You may not use it to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Post or transmit unlawful, harmful, or offensive material</li>
            <li>Attempt to gain unauthorized access to our systems or data</li>
            <li>Interfere with the site's functionality or security</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. Services Disclaimer</h2>
          <p className="text-gray-600 mb-6">
            While we aim to provide accurate and up-to-date information, we make no guarantees about the completeness or accuracy of content on our site. Shipping rates, delivery times, and availability may vary and are subject to change.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">4. Intellectual Property</h2>
          <p className="text-gray-600 mb-6">
            All content, trademarks, logos, and graphics are the property of AnyFreight Logistics or licensed to us. You may not copy, modify, or distribute our content without prior written consent.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">5. Limitation of Liability</h2>
          <p className="text-gray-600 mb-6">
            We are not liable for any damages (direct, indirect, incidental, or consequential) arising from your use of our website or services.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">6. Third-Party Links</h2>
          <p className="text-gray-600 mb-6">
            Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">7. Governing Law</h2>
          <p className="text-gray-600 mb-6">
            These Terms are governed by the laws of Canada and the United States, depending on your location. Any disputes shall be resolved in the applicable jurisdiction.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">8. Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We may update these Terms at any time. Continued use of our website after changes means you accept the new Terms.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">9. Contact Us</h2>
          <p className="text-gray-600 mb-2">
            For any questions or concerns, contact:
            <br />
            <span className="block mt-2 font-medium">📧 <a href="mailto:info@anyfreightlogistic.com" className="text-gold-500 underline">info@anyfreightlogistic.com</a></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService; 