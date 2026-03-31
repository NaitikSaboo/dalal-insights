import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp, AlertTriangle } from "lucide-react";

interface SignalsCardProps {
  type: "growth" | "risk";
  items: string[];
}

const SignalsCard = ({ type, items }: SignalsCardProps) => {
  const isGrowth = type === "growth";

  return (
    <Card className="animate-fade-in h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-display">
          {isGrowth ? (
            <TrendingUp className="h-5 w-5 text-primary" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-warning" />
          )}
          {isGrowth ? "Growth Signals" : "Red Flags"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2.5">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground">
              <span className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${isGrowth ? "bg-primary" : "bg-warning"}`} />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SignalsCard;
