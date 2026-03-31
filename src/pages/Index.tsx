import { useState } from "react";
import { TrendingUp, TrendingDown, IndianRupee, Users, Handshake, Search, Loader2, AlertTriangle, ChevronDown, Github, Twitter } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const QUARTERS = ["Q1 FY26", "Q4 FY25", "Q3 FY25", "Q2 FY25", "Q1 FY25", "Q4 FY24", "Q3 FY24"];

const POPULAR = ["TCS", "Infosys", "HDFC Bank", "Reliance", "Wipro", "ICICI Bank", "Zomato"];

type Verdict = "Bullish" | "Cautiously Optimistic" | "Bearish";

interface AnalysisResult {
  companyName: string;
  exchange: string;
  sector: string;
  metrics: { label: string; value: string; change: string; positive: boolean }[];
  growthSignals: string[];
  redFlags: string[];
  tone: { score: number; label: string; keywords: string[]; summary: string };
  verdict: { verdict: Verdict; summary: string };
}

const verdictColors: Record<Verdict, { bg: string; text: string; border: string }> = {
  Bullish: { bg: "bg-emerald-50", text: "text-emerald-800", border: "border-emerald-300" },
  "Cautiously Optimistic": { bg: "bg-amber-50", text: "text-amber-800", border: "border-amber-300" },
  Bearish: { bg: "bg-red-50", text: "text-red-800", border: "border-red-300" },
};

export default function Index() {
  const [company, setCompany] = useState("");
  const [quarter, setQuarter] = useState(QUARTERS[1]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState("");

  const handleAnalyze = async (co?: string) => {
    const target = co || company;
    if (!target.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch(`${API_URL}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company: target.trim(), quarter }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "Something went wrong");
      }
      const data = await res.json();
      setResult(data);
      if (co) setCompany(co);
    } catch (e: any) {
      setError(e.message || "Failed to analyze. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toneWidth = `${(result?.tone.score || 0) * 10}%`;
  const vc = result ? verdictColors[result.verdict.verdict] : null;

  return (
    <div className="min-h-screen bg-[#f7f9f7] font-sans">

      {/* Navbar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Dalal</span>
            <span className="text-xl font-bold text-emerald-600 tracking-tight">Decoded</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#how" className="text-sm text-gray-500 hover:text-gray-800 hidden md:block">How it works</a>
            <a
              href="https://zerodha.com?referral=dalaldecoded"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Open Free Demat ↗
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-14 pb-10 text-center">
        <div className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full mb-4 border border-emerald-200">
          Powered by Google Gemini AI
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Decode any earnings call<br />
          <span className="text-emerald-600">in seconds</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
          Stop reading 40-page transcripts. Get AI-powered summaries of Indian stock earnings calls — growth signals, red flags, management tone and investor verdict.
        </p>

        {/* Search */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-3 flex flex-col md:flex-row gap-3 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={company}
              onChange={e => setCompany(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleAnalyze()}
              placeholder="Enter company name or NSE symbol..."
              className="w-full pl-9 pr-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-400 bg-gray-50"
            />
          </div>
          <div className="relative">
            <select
              value={quarter}
              onChange={e => setQuarter(e.target.value)}
              className="appearance-none pl-4 pr-8 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-emerald-400 cursor-pointer"
            >
              {QUARTERS.map(q => <option key={q}>{q}</option>)}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <button
            onClick={() => handleAnalyze()}
            disabled={loading || !company.trim()}
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 justify-center"
          >
            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Analyzing...</> : "Decode →"}
          </button>
        </div>

        {/* Popular chips */}
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          <span className="text-xs text-gray-400 self-center">Popular:</span>
          {POPULAR.map(p => (
            <button
              key={p}
              onClick={() => handleAnalyze(p)}
              className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full hover:border-emerald-400 hover:text-emerald-700 transition-colors"
            >
              {p}
            </button>
          ))}
        </div>
      </section>

      {/* Error */}
      {error && (
        <div className="max-w-2xl mx-auto px-6 mb-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      )}

      {/* Loading skeleton */}
      {loading && (
        <div className="max-w-5xl mx-auto px-6 space-y-5 pb-16 animate-pulse">
          <div className="h-8 bg-gray-200 rounded-xl w-48 mx-auto" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => <div key={i} className="h-24 bg-gray-200 rounded-xl" />)}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="h-48 bg-gray-200 rounded-xl" />
            <div className="h-48 bg-gray-200 rounded-xl" />
          </div>
          <div className="h-32 bg-gray-200 rounded-xl" />
          <div className="h-28 bg-gray-200 rounded-xl" />
        </div>
      )}

      {/* Results */}
      {result && !loading && (
        <div className="max-w-5xl mx-auto px-6 pb-20 space-y-5">

          {/* Company header */}
          <div className="text-center mb-2">
            <div className="flex items-center justify-center gap-2 mb-1">
              <h2 className="text-2xl font-bold text-gray-900">{result.companyName}</h2>
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">{result.exchange}</span>
            </div>
            <p className="text-sm text-gray-500">{result.sector} · {quarter} Earnings Summary</p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {result.metrics.map((m, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                <div className={`text-xs font-medium mb-2 ${m.positive ? "text-emerald-600" : "text-red-500"}`}>
                  {m.positive ? "↑" : "↓"} {m.change}
                </div>
                <div className="text-xl font-bold text-gray-900 mb-1">{m.value}</div>
                <div className="text-xs text-gray-500">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Signals + Risks */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <h3 className="font-semibold text-gray-800 text-sm">Growth Signals</h3>
              </div>
              <ul className="space-y-3">
                {result.growthSignals.map((s, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <h3 className="font-semibold text-gray-800 text-sm">Red Flags</h3>
              </div>
              <ul className="space-y-3">
                {result.redFlags.map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tone */}
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800 text-sm">Management Tone Analysis</h3>
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                {result.tone.score}/10 — {result.tone.label}
              </span>
            </div>
            <div className="bg-gray-100 rounded-full h-2 mb-2">
              <div
                className="bg-emerald-500 h-2 rounded-full transition-all duration-700"
                style={{ width: toneWidth }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mb-4">
              <span>Bearish</span><span>Neutral</span><span>Bullish</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {result.tone.keywords.map((k, i) => (
                <span key={i} className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100">
                  "{k}"
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{result.tone.summary}</p>
          </div>

          {/* Verdict */}
          {vc && (
            <div className={`rounded-xl border-2 p-5 ${vc.bg} ${vc.border}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${vc.bg} ${vc.text} ${vc.border}`}>
                  {result.verdict.verdict}
                </span>
                <h3 className={`font-semibold text-sm ${vc.text}`}>Investor Verdict</h3>
              </div>
              <p className={`text-sm leading-relaxed ${vc.text}`}>{result.verdict.summary}</p>
            </div>
          )}

          {/* Affiliate CTA */}
          <div className="bg-gray-900 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold mb-1">Ready to invest based on this analysis?</p>
              <p className="text-gray-400 text-sm">Open a free Zerodha account — India's #1 stock broker</p>
            </div>
            <a
              href="https://zerodha.com?referral=dalaldecoded"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-emerald-400 transition-colors whitespace-nowrap flex-shrink-0"
            >
              Open Free Account ↗
            </a>
          </div>
        </div>
      )}

      {/* How it works */}
      {!result && !loading && (
        <section id="how" className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-10">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Enter a company", desc: "Type any NSE/BSE listed company name or ticker symbol" },
              { step: "2", title: "AI reads the concall", desc: "Our AI scrapes and analyzes the latest earnings call transcript" },
              { step: "3", title: "Get instant insights", desc: "Receive growth signals, red flags, tone analysis and investor verdict" },
            ].map(s => (
              <div key={s.step} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm text-center">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold mx-auto mb-4">{s.step}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white mt-10">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-gray-800">Dalal</span>
            <span className="font-bold text-emerald-600">Decoded</span>
            <p className="text-xs text-gray-400 mt-1">AI-powered Indian stock earnings analysis</p>
          </div>
          <p className="text-xs text-gray-400 text-center">
            Not SEBI registered. For informational purposes only. Not investment advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
