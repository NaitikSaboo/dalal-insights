import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mic } from "lucide-react";

interface ToneAnalysisProps {
  score: number;
  summary: string;
}

const ToneAnalysis = ({ score, summary }: ToneAnalysisProps) => {
  const percentage = (score / 10) * 100;

  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-display">
          <Mic className="h-5 w-5 text-primary" />
          Management Tone Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-3">
          <div className="flex-1 h-3 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="text-xl font-display font-bold text-foreground">{score}/10</span>
        </div>
        <p className="text-sm text-muted-foreground">{summary}</p>
      </CardContent>
    </Card>
  );
};

export default ToneAnalysis;
