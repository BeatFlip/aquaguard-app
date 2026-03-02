import { AlertTriangle, AlertCircle, Info } from "lucide-react";
import { Badge } from "./ui/badge";

const alerts = [
  {
    id: 1,
    type: "warning",
    title: "Elevated Humidity - Water Heater",
    message: "Humidity levels at 85% detected near water heater",
    time: "2 mins ago",
    severity: "high",
  },
  {
    id: 2,
    type: "warning",
    title: "Unusual Usage Pattern",
    message: "Water usage 23% higher than average today",
    time: "15 mins ago",
    severity: "medium",
  },
  {
    id: 3,
    type: "info",
    title: "Sensor Battery Low",
    message: "Kitchen sensor battery at 15% - replacement recommended",
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
              <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
