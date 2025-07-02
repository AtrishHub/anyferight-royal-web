import React from 'react';

const CookiePolicy = () => {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text text-center">Cookie Policy</h1>
        <div className="bg-white glass-effect rounded-2xl p-8 md:p-12 shadow-lg">
          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> July 1, 2025
          </p>
          <p className="text-gray-600 mb-6">
            This Cookie Policy explains how AnyFreight Logistics uses cookies and similar technologies on our website.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">1. What Are Cookies?</h2>
          <p className="text-gray-600 mb-6">
            Cookies are small text files stored on your device to help websites remember user preferences, improve performance, and provide personalized experiences.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">2. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li><strong>Essential Cookies:</strong> Required for the website to function (e.g., login, navigation)</li>
            <li><strong>Performance Cookies:</strong> Help us analyze site traffic and performance</li>
            <li><strong>Functional Cookies:</strong> Remember your preferences</li>
            <li><strong>Marketing Cookies:</strong> May be used to deliver relevant ads or track user behavior across sites (only if consented)</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. How to Manage Cookies</h2>
          <p className="text-gray-600 mb-6">
            You can manage or disable cookies through your browser settings. Note: Disabling cookies may affect site functionality.
          </p>
          <p className="text-gray-600 mb-6">
            Popular browsers allow you to control cookies here:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies</li>
            <li><strong>Firefox:</strong> Preferences &gt; Privacy & Security</li>
            <li><strong>Safari:</strong> Preferences &gt; Privacy</li>
            <li><strong>Edge:</strong> Settings &gt; Site permissions &gt; Cookies and site data</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">4. Third-Party Cookies</h2>
          <p className="text-gray-600 mb-6">
            We may use services like Google Analytics to help us understand website usage. These third parties may set their own cookies subject to their privacy policies.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">5. Updates to This Policy</h2>
          <p className="text-gray-600 mb-6">
            We may update this Cookie Policy periodically. The updated date will be reflected at the top of the page.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">6. Contact</h2>
          <p className="text-gray-600 mb-2">
            If you have any questions about our use of cookies, please contact us:
            <br />
            <span className="block mt-2 font-medium">📧 <a href="mailto:info@anyfreightlogistic.com" className="text-gold-500 underline">info@anyfreightlogistic.com</a></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy; 