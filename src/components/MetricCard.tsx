import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

const MetricCard = ({ icon: Icon, label, value, change, positive }: MetricCardProps) => (
  <Card className="p-5 animate-fade-in">
    <div className="flex items-start justify-between">
      <div className="p-2 rounded-lg bg-accent">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${positive ? "bg-accent text-primary" : "bg-destructive/10 text-destructive"}`}>
        {change}
      </span>
    </div>
    <p className="mt-3 text-2xl font-display font-bold text-foreground">{value}</p>
    <p className="text-sm text-muted-foreground">{label}</p>
  </Card>
);

export default MetricCard;
