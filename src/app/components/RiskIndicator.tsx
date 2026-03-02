import { Progress } from "./ui/progress";
import { TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

export function RiskIndicator() {
  const riskScore = 28; // Out of 100
  const riskLevel = riskScore < 30 ? "low" : riskScore < 60 ? "medium" : "high";

  const riskConfig = {
    low: {
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-950/50",
      icon: CheckCircle,
      label: "Low Risk",
      message: "Your home is well-protected. All systems are operating normally.",
    },
    medium: {
      color: "text-amber-600",
      bgColor: "bg-amber-100 dark:bg-amber-950/50",
      icon: AlertTriangle,
      label: "Medium Risk",
      message: "Some sensors are detecting elevated moisture levels. Monitor closely.",
    },
    high: {
      color: "text-red-600",
      bgColor: "bg-red-100 dark:bg-red-950/50",
      icon: AlertTriangle,
      label: "High Risk",
      message: "Immediate attention required. Multiple sensors detecting anomalies.",
    },
  };

  const config = riskConfig[riskLevel];
  const Icon = config.icon;

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-center">
        <div className={`w-20 h-20 sm:w-24 sm:h-24 ${config.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
          <Icon className={config.color} size={40} />
        </div>
        <h3 className={`text-xl sm:text-2xl font-semibold ${config.color} mb-2`}>
          {config.label}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Risk Score: {riskScore}/100
        </p>
      </div>

      <div className="space-y-2">
        <Progress value={riskScore} className="h-2" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Low</span>
          <span>Medium</span>
          <span>High</span>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
        <p className="text-xs sm:text-sm text-foreground">
          {config.message}
        </p>
      </div>

      <div className="space-y-3">
        <h4 className="text-xs sm:text-sm font-medium text-foreground">Risk Factors</h4>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Moisture Levels</span>
            <span className="text-green-600 font-medium">Good</span>
          </div>
          <Progress value={25} className="h-1" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Pipe Age</span>
            <span className="text-amber-600 font-medium">Moderate</span>
          </div>
          <Progress value={55} className="h-1" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Usage Patterns</span>
            <span className="text-green-600 font-medium">Normal</span>
          </div>
          <Progress value={20} className="h-1" />
        </div>
      </div>
    </div>
  );
}
