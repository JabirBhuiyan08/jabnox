import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | JABNOX</title>
        <meta name="description" content="JABNOX Privacy Policy - Learn how we protect and handle your personal information." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-300">
            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>At JABNOX, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Personal information (name, email, phone number)</li>
                <li>Business information (company name, business type)</li>
                <li>Payment information (processed securely via Stripe)</li>
                <li>Usage data and analytics</li>
                <li>Communication data (chat logs, support tickets)</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>To provide and improve our services</li>
                <li>To communicate with you about projects</li>
                <li>To process payments</li>
                <li>To send invoices and receipts</li>
                <li>For customer support</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">4. Data Protection</h2>
              <p>We implement appropriate security measures to protect your personal information including:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>SSL encryption for all data transmission</li>
                <li>Secure payment processing via Stripe</li>
                <li>Regular security audits</li>
                <li>Limited access to personal data</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">5. Third-Party Services</h2>
              <p>We may share data with trusted third parties for:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Payment processing (Stripe)</li>
                <li>Web hosting and infrastructure</li>
                <li>Analytics (for improving our services)</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Access your personal data</li>
                <li>Request data correction</li>
                <li>Request data deletion</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">7. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-2">Email: jabirbhuiyan08@gmail.com</p>
            </section>

            <p className="text-sm text-gray-400 mt-8">Last updated: April 2026</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;