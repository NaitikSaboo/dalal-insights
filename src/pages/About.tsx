export default function About() {
  return (
    <div className="min-h-screen bg-[#f7f9f7]">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/">
            <span className="text-xl font-bold text-gray-900 tracking-tight">Dalal</span>
            <span className="text-xl font-bold text-emerald-600 tracking-tight">Decoded</span>
          </a>
          <a
            href="/"
            className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Try it free →
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">

        {/* Hero */}
        <div className="text-center mb-14">
          <div className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full mb-4 border border-emerald-200">
            Built by a student, for retail investors
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">About DalalDecoded</h1>
          <p className="text-gray-500 text-lg">
            Making Indian stock earnings calls accessible to every retail investor.
          </p>
        </div>

        {/* Story */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">The Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Every quarter, thousands of Indian companies publish earnings call transcripts. These calls contain invaluable information about a company's health, future plans, and risks — but they're 30-40 pages long, filled with corporate jargon, and nearly impossible for the average retail investor to digest.
            </p>
            <p>
              Large institutional investors have teams of analysts who read and summarize these calls. Retail investors don't. That's the gap DalalDecoded fills.
            </p>
            <p>
              I built DalalDecoded as a student project to level the playing field — giving every retail investor access to the same quality of earnings call analysis that was previously only available to professionals.
            </p>
          </div>
        </div>

        {/* What we do */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">What DalalDecoded Does</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "AI-Powered Analysis", desc: "Uses advanced AI to read and understand earnings call transcripts, extracting the most important insights." },
              { title: "Growth Signals", desc: "Identifies positive indicators like deal wins, revenue growth, and new market opportunities." },
              { title: "Red Flags", desc: "Highlights risks, challenges, and warning signs that could affect the company's future performance." },
              { title: "Management Tone", desc: "Analyzes how management communicates — are they confident, cautious, or evasive?" },
              { title: "Investor Verdict", desc: "Gives a plain-English conclusion — Bullish, Cautiously Optimistic, or Bearish — with reasoning." },
              { title: "100% Free", desc: "No subscription, no login required. Just search and get your analysis instantly." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Built With</h2>
          <div className="flex flex-wrap gap-3">
            {["Python", "FastAPI", "Groq AI (LLaMA 3.3)", "React", "Tailwind CSS", "Vercel", "Render", "BeautifulSoup"].map((tech, i) => (
              <span key={i} className="bg-emerald-50 text-emerald-700 text-sm px-3 py-1.5 rounded-full border border-emerald-100">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 rounded-xl border border-amber-200 p-6 mb-8">
          <h2 className="text-sm font-semibold text-amber-800 mb-2">⚠️ Important Disclaimer</h2>
          <p className="text-sm text-amber-700 leading-relaxed">
            DalalDecoded is not registered with SEBI. All analysis provided is for informational and educational purposes only and does not constitute investment advice. Past performance is not indicative of future results. Always do your own research and consult a qualified financial advisor before making investment decisions.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors"
          >
            Start Analyzing Stocks →
          </a>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white mt-10">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-gray-800">Dalal</span>
            <span className="font-bold text-emerald-600">Decoded</span>
            <p className="text-xs text-gray-400 mt-1">AI-powered Indian stock earnings analysis</p>
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