import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const quarters = ["Q1 FY25", "Q2 FY25", "Q3 FY25", "Q4 FY25"];

const companies = [
  "Infosys", "TCS", "Wipro", "HCL Tech", "Reliance Industries",
  "HDFC Bank", "ICICI Bank", "Bajaj Finance", "Asian Paints", "Titan Company",
];

interface SearchBarProps {
  onSearch: (company: string, quarter: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [company, setCompany] = useState("");
  const [quarter, setQuarter] = useState(quarters[2]);

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl mx-auto">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search company (e.g. Infosys)"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          list="company-list"
          className="w-full h-11 pl-10 pr-4 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <datalist id="company-list">
          {companies.map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>
      </div>
      <select
        value={quarter}
        onChange={(e) => setQuarter(e.target.value)}
        className="h-11 px-4 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {quarters.map((q) => (
          <option key={q} value={q}>{q}</option>
        ))}
      </select>
      <Button
        onClick={() => company && onSearch(company, quarter)}
        className="h-11 px-6 font-semibold"
      >
        Decode
      </Button>
    </div>
  );
};

export default SearchBar;
