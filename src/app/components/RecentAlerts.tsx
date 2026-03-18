import { AlertTriangle, AlertCircle, Info, Phone } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const alerts = [
  {
    id: 1,
    type: "warning",
    title: "Elevated Humidity - Water Heater",
    message: "Humidity at 85% near your water heater.",
    nextStep: "Call assistance to schedule an inspection.",
    time: "2 mins ago",
    severity: "high",
  },
  {
    id: 2,
    type: "warning",
    title: "Unusual Usage Pattern",
    message: "Water usage is 23% above normal today.",
    nextStep: "Check faucets for drips. Call assistance if usage stays high.",
    time: "15 mins ago",
    severity: "medium",
  },
  {
    id: 3,
    type: "info",
    title: "Sensor Battery Low",
    message: "Kitchen sensor battery at 15%.",
    nextStep: "Replace battery within 5 days.",
    time: "1 hour ago",
    severity: "low",
  },
];

export function RecentAlerts() {
  return (
    <div className="space-y-4">
      {alerts.map((alert) => {
        const severityConfig = {
          high: {
            icon: AlertTriangle,
            color: "text-red-600",
            bgColor: "bg-red-50 dark:bg-red-950/50",
            badge: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400",
          },
          medium: {
            icon: AlertCircle,
            color: "text-amber-600",
            bgColor: "bg-amber-50 dark:bg-amber-950/50",
            badge: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
          },
          low: {
            icon: Info,
            color: "text-blue-600",
            bgColor: "bg-blue-50 dark:bg-blue-950/50",
            badge: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
          },
        };

        const config = severityConfig[alert.severity as keyof typeof severityConfig];
        const Icon = config.icon;

        return (
          <div
            key={alert.id}
            className="flex items-start gap-3 sm:gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
          >
            <div className={`w-8 h-8 sm:w-10 sm:h-10 ${config.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <Icon className={config.color} size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <p className="font-medium text-sm sm:text-base text-foreground line-clamp-1">{alert.title}</p>
                <Badge className={`${config.badge} flex-shrink-0 text-xs`}>
                  {alert.severity}
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{alert.message}</p>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="font-medium">Next step:</span> {alert.nextStep}
              </p>
              <div className="flex items-center gap-2 mt-1.5">
                <p className="text-xs text-muted-foreground">{alert.time}</p>
                {alert.severity === "high" && (
                  <Button variant="ghost" size="sm" className="h-6 px-2 text-xs gap-1">
                    <Phone size={12} />
                    Call
                  </Button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
