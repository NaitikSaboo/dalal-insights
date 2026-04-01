export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f7f9f7]">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/">
            <span className="text-xl font-bold text-gray-900 tracking-tight">Dalal</span>
            <span className="text-xl font-bold text-emerald-600 tracking-tight">Decoded</span>
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: April 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p>Welcome to DalalDecoded ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect minimal information to provide our service:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Search queries:</strong> Company names and quarters you search for, used only to generate your analysis.</li>
              <li><strong>Usage data:</strong> Anonymous data about how you use the site (pages visited, time spent) collected via analytics tools.</li>
              <li><strong>Cookies:</strong> Small files stored on your device to improve your experience.</li>
            </ul>
            <p className="mt-3">We do NOT collect your name, email, phone number, or any personal identifying information unless you voluntarily provide it.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide and improve our AI-powered earnings analysis service</li>
              <li>To understand how users interact with our website</li>
              <li>To fix bugs and improve performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Third Party Services</h2>
            <p className="mb-3">We use the following third party services:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Groq AI:</strong> Powers our earnings call analysis. Your search queries are sent to Groq's API. See Groq's privacy policy at groq.com.</li>
              <li><strong>Google Analytics:</strong> Helps us understand website traffic anonymously.</li>
              <li><strong>Vercel:</strong> Hosts our website. See Vercel's privacy policy at vercel.com.</li>
              <li><strong>Affiliate links:</strong> We may include links to Groww, Zerodha or other financial platforms. If you click and sign up, we may earn a commission at no extra cost to you.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Cookies</h2>
            <p>We use cookies to improve your browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some parts of our site may not function properly.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Data Security</h2>
            <p>We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Children's Privacy</h2>
            <p>Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">8. Disclaimer</h2>
            <p>DalalDecoded is not registered with SEBI. The information provided on this website is for educational and informational purposes only and does not constitute investment advice. Always consult a qualified financial advisor before making investment decisions.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at: <span className="text-emerald-600">contact@dalaldecoded.com</span></p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white mt-10">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-gray-800">Dalal</span>
            <span className="font-bold text-emerald-600">Decoded</span>
          </div>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="/privacy-policy" className="hover:text-gray-600">Privacy Policy</a>
            <a href="/about" className="hover:text-gray-600">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}