import { Helmet } from "react-helmet-async";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | JABNOX</title>
        <meta name="description" content="JABNOX Cookie Policy - Learn how we use cookies and similar technologies." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Cookie Policy</h1>
          
          <div className="space-y-6 text-gray-300">
            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">1. What Are Cookies</h2>
              <p>Cookies are small text files stored on your device when you visit websites. They help remember your preferences and improve your browsing experience.</p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Cookies</h2>
              <p>JABNOX uses cookies for:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Essential website functionality</li>
                <li>Authentication and security</li>
                <li>Analyzing website traffic</li>
                <li>Improving user experience</li>
                <li>Remembering your preferences</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-lg font-medium text-white mt-4 mb-2">Essential Cookies</h3>
              <p>Required for basic website functionality. Cannot be disabled.</p>
              
              <h3 className="text-lg font-medium text-white mt-4 mb-2">Analytics Cookies</h3>
              <p>Help us understand how visitors interact with our website.</p>
              
              <h3 className="text-lg font-medium text-white mt-4 mb-2">Functional Cookies</h3>
              <p>Remember your preferences and settings.</p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">4. Third-Party Cookies</h2>
              <p>We use services that may set cookies:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Google Analytics (analytics)</li>
                <li>Payment processors (Stripe)</li>
                <li>Social media platforms (when you share)</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">5. Managing Cookies</h2>
              <p>You can control or delete cookies:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Browser settings - Most browsers allow cookie management</li>
                <li>Incognito mode - Limits cookie storage</li>
                <li>Third-party blockers - Some extensions block tracking</li>
              </ul>
              <p className="mt-2">Note: Disabling essential cookies may affect website functionality.</p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">6. Cookie List</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-white">session_id</p>
                  <p className="text-sm">Essential - Maintains your login session</p>
                </div>
                <div>
                  <p className="font-medium text-white">csrf_token</p>
                  <p className="text-sm">Essential - Security protection</p>
                </div>
                <div>
                  <p className="font-medium text-white">_ga</p>
                  <p className="text-sm">Analytics - Google Analytics user ID</p>
                </div>
                <div>
                  <p className="font-medium text-white">_gid</p>
                  <p className="text-sm">Analytics - 24-hour analytics</p>
                </div>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">7. Updates to This Policy</h2>
              <p>We may update this policy periodically. Any changes will be posted on this page.</p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">8. Contact Us</h2>
              <p>Questions about our cookie policy:</p>
              <p className="mt-2">Email: jabirbhuiyan08@gmail.com</p>
            </section>

            <p className="text-sm text-gray-400 mt-8">Last updated: April 2026</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;