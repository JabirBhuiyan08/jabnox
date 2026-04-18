import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | JABNOX</title>
        <meta name="description" content="JABNOX Terms of Service - Terms and conditions for using our services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-300">
            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using JABNOX website and services, you accept and agree to be bound by the terms and provisions of this agreement.</p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">2. Services Provided</h2>
              <p>JABNOX provides the following services:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Custom web development (MERN Stack)</li>
                <li>WordPress website development</li>
                <li>Graphic design services</li>
                <li>Social media marketing</li>
                <li>SEO services</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">3. Project Process</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Client submits project requirements via contact form or WhatsApp</li>
                <li>We provide a quote and timeline</li>
                <li>Upon payment, development begins</li>
                <li>Client reviews and requests revisions</li>
                <li>Final delivery after approval</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">4. Payment Terms</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>50% advance payment to start project</li>
                <li>50% upon project completion</li>
                <li>Payments via bank transfer or Stripe</li>
                <li>Prices are in USD unless otherwise stated</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">5. Revisions Policy</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Starter Package: 1 revision round</li>
                <li>Business Package: 2 revision rounds</li>
                <li>Premium Package: 3 revision rounds</li>
                <li>Additional revisions: $30/hour</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">6. Delivery Timeline</h2>
              <p>Delivery times vary by package:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Landing Page: 3-5 business days</li>
                <li>Full Website: 7-10 business days</li>
                <li>Custom System: 14-21 business days</li>
              </ul>
              <p className="mt-2">Delays may occur if client feedback takes longer than 48 hours.</p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">7. Intellectual Property</h2>
              <p>Upon full payment, clients receive full ownership of:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Source code (for custom MERN projects)</li>
                <li>Design files</li>
                <li>Admin panel access</li>
                <li>Content management rights</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">8. Support & Maintenance</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Free support period varies by package</li>
                <li>Monthly maintenance: $29/month</li>
                <li>Bug fixes: Free within support period</li>
                <li>New features: Quoted separately</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">9. Limitation of Liability</h2>
              <p>JABNOX shall not be liable for:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Indirect or consequential losses</li>
                <li>Loss of profits or revenue</li>
                <li>Data loss due to third-party services</li>
                <li>Downtime during maintenance</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">10. Contact Information</h2>
              <p>For questions about these terms:</p>
              <p className="mt-2">Email: jabirbhuiyan08@gmail.com</p>
              <p>WhatsApp: +8801749424565</p>
            </section>

            <p className="text-sm text-gray-400 mt-8">Last updated: April 2026</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;