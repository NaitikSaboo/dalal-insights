import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

interface InvestorVerdictProps {
  verdict: "Bullish" | "Cautiously Optimistic" | "Bearish";
  summary: string;
}

const InvestorVerdict = ({ verdict, summary }: InvestorVerdictProps) => {
  const colorMap = {
    Bullish: "text-primary bg-accent",
    "Cautiously Optimistic": "text-warning bg-warning/10",
    Bearish: "text-destructive bg-destructive/10",
  };

  return (
    <Card className="animate-fade-in border-2 border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-display">
          <Shield className="h-5 w-5 text-primary" />
          Investor Verdict
        </CardTitle>
      </CardHeader>
      <CardContent>
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-3 ${colorMap[verdict]}`}>
          {verdict}
        </span>
        <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
      </CardContent>
    </Card>
  );
};

export default InvestorVerdict;
