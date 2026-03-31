import { useState } from "react";
import { TrendingUp, IndianRupee, Handshake, Users } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import MetricCard from "@/components/MetricCard";
import SignalsCard from "@/components/SignalsCard";
import ToneAnalysis from "@/components/ToneAnalysis";
import InvestorVerdict from "@/components/InvestorVerdict";

const mockData: Record<string, {
  metrics: { icon: any; label: string; value: string; change: string; positive: boolean }[];
  growth: string[];
  risks: string[];
  tone: { score: number; summary: string };
  verdict: { verdict: "Bullish" | "Cautiously Optimistic" | "Bearish"; summary: string };
}> = {
  default: {
    metrics: [
      { icon: TrendingUp, label: "Revenue Growth", value: "₹38,994 Cr", change: "+4.7% QoQ", positive: true },
      { icon: IndianRupee, label: "Net Profit", value: "₹6,806 Cr", change: "+8.4% QoQ", positive: true },
      { icon: Handshake, label: "Large Deal Wins", value: "$4.1B", change: "Record High", positive: true },
      { icon: Users, label: "Attrition Rate", value: "12.5%", change: "↓ from 14.2%", positive: true },
    ],
    growth: [
      "Generative AI pipeline crossed $1B in TCV — fastest growing segment",
      "Financial services vertical grew 6.2% — strongest in 5 quarters",
      "European market share expanded with 3 new marquee clients",
      "Cloud migration deals accelerating, 40% of large deals include cloud",
    ],
    risks: [
      "BFSI segment in North America showing near-term softness",
      "Subcontracting costs rose 180bps due to niche skill gaps",
      "Currency headwinds expected to impact margins by 40-60bps",
      "Delayed decision-making in telecom vertical persists",
    ],
    tone: {
      score: 7.5,
      summary:
        "Management conveyed measured confidence, highlighting strong deal wins and AI momentum while acknowledging macro uncertainties. The CEO struck an optimistic tone on medium-term growth levers but was cautious about near-term demand visibility in discretionary spending.",
    },
    verdict: {
      verdict: "Cautiously Optimistic",
      summary:
        "Strong deal pipeline and AI momentum provide a solid foundation for growth, but near-term headwinds in discretionary spending and currency impacts warrant measured optimism. The improving attrition trend and margin expansion are positives for long-term investors.",
    },
  },
};

const Index = () => {
  const [result, setResult] = useState<null | { company: string; quarter: string }>(null);

  const handleSearch = (company: string, quarter: string) => {
    setResult({ company, quarter });
  };

  const data = mockData.default;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container max-w-5xl py-6">
          <h1 className="text-2xl font-display font-bold text-foreground tracking-tight">
            Dalal<span className="text-primary">Decoded</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Decode Indian stock earnings calls in seconds
          </p>
        </div>
      </header>

      <main className="container max-w-5xl py-8 space-y-8">
        {/* Search */}
        <section>
          <SearchBar onSearch={handleSearch} />
        </section>

        {result && (
          <>
            {/* Company badge */}
            <div className="text-center animate-fade-in">
              <h2 className="text-xl font-display font-bold text-foreground">
                {result.company}
              </h2>
              <p className="text-sm text-muted-foreground">{result.quarter} Earnings Summary</p>
            </div>

            {/* Metric cards */}
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {data.metrics.map((m, i) => (
                <MetricCard key={i} {...m} />
              ))}
            </section>

            {/* Signals */}
            <section className="grid md:grid-cols-2 gap-4">
              <SignalsCard type="growth" items={data.growth} />
              <SignalsCard type="risk" items={data.risks} />
            </section>

            {/* Tone */}
            <section>
              <ToneAnalysis {...data.tone} />
            </section>

            {/* Verdict */}
            <section>
              <InvestorVerdict {...data.verdict} />
            </section>
          </>
        )}

        {!result && (
          <div className="text-center py-20 animate-fade-in">
            <p className="text-muted-foreground text-lg">
              Enter a company name and select a quarter to get started
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
