import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Droplets, AlertCircle, CheckCircle } from "lucide-react";

interface SensorStatusCardProps {
  location: string;
  status: "normal" | "warning" | "alert";
  lastReading: string;
  humidity: number;
}

export function SensorStatusCard({
  location,
  status,
  lastReading,
  humidity,
}: SensorStatusCardProps) {
  const statusConfig = {
    normal: {
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/50",
      badge: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400",
      label: "Normal",
    },
    warning: {
      icon: AlertCircle,
      color: "text-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-950/50",
      badge: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
      label: "Warning",
    },
    alert: {
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/50",
      badge: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400",
      label: "Alert",
    },
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <Card className="p-3 sm:p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-8 h-8 sm:w-10 sm:h-10 ${config.bgColor} rounded-lg flex items-center justify-center`}>
          <Droplets className={config.color} size={18} />
        </div>
        <Badge className={`${config.badge} text-xs`}>{config.label}</Badge>
      </div>

      <h3 className="font-medium text-sm sm:text-base text-foreground mb-2">{location}</h3>

      <div className="flex items-center justify-between text-xs sm:text-sm">
        <div>
          <p className="text-muted-foreground">Humidity</p>
          <p className="font-semibold text-foreground">{humidity}%</p>
        </div>
        <div className="text-right">
          <p className="text-muted-foreground">Last reading</p>
          <p className="text-xs text-muted-foreground">{lastReading}</p>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-border flex items-center gap-1 text-xs text-muted-foreground">
        <StatusIcon size={12} className={config.color} />
        <span className="truncate">Sensor ID: {location.toLowerCase().replace(/\s+/g, '-')}-001</span>
      </div>
    </Card>
  );
}
