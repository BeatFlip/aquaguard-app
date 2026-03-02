import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  AlertTriangle,
  AlertCircle,
  Info,
  CheckCircle,
  Clock,
  MapPin,
} from "lucide-react";

const alerts = [
  {
    id: 1,
    severity: "high",
    title: "Elevated Humidity - Water Heater",
    description: "Humidity levels at 85% detected near water heater. Immediate inspection recommended.",
    location: "Basement - Water Heater",
    sensorId: "WH-001",
    timestamp: "2 mins ago",
    status: "active",
    recommendations: [
      "Schedule immediate professional inspection",
      "Check for visible leaks around water heater",
      "Verify water heater connections are secure",
    ],
  },
  {
    id: 2,
    severity: "medium",
    title: "Unusual Usage Pattern Detected",
    description: "Water usage 23% higher than average today. May indicate a slow leak.",
    location: "Master Bathroom",
    sensorId: "MB-001",
    timestamp: "15 mins ago",
    status: "active",
    recommendations: [
      "Check all faucets for drips",
      "Inspect toilet for running water",
      "Monitor usage over next 24 hours",
    ],
  },
  {
    id: 3,
    severity: "low",
    title: "Sensor Battery Low",
    description: "Kitchen sensor battery at 15% - replacement recommended within 5 days.",
    location: "Kitchen Sink",
    sensorId: "KS-001",
    timestamp: "1 hour ago",
    status: "active",
    recommendations: [
      "Order replacement batteries",
      "Schedule battery replacement",
    ],
  },
  {
    id: 4,
    severity: "medium",
    title: "Weak Signal Strength",
    description: "Basement sensor showing weak connection to hub. May affect monitoring reliability.",
    location: "Basement Floor",
    sensorId: "BS-001",
    timestamp: "3 hours ago",
    status: "acknowledged",
    recommendations: [
      "Check sensor placement",
      "Consider adding a signal repeater",
      "Verify hub is powered on",
    ],
  },
  {
    id: 5,
    severity: "high",
    title: "Rapid Humidity Increase",
    description: "Humidity jumped from 42% to 78% in 10 minutes at guest bathroom.",
    location: "Guest Bathroom",
    sensorId: "GB-001",
    timestamp: "Yesterday",
    status: "resolved",
    recommendations: [
      "Verified as shower usage",
      "Normal pattern detected",
    ],
  },
];

export function Alerts() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">Alerts</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            Monitor and manage all system alerts and notifications
          </p>
        </div>
        <Button variant="outline" className="w-full sm:w-auto">Mark all as read</Button>
      </div>

      {/* Alert Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
        <Card className="p-4 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="text-red-600" size={24} />
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">1</p>
              <p className="text-sm text-muted-foreground">High Priority</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="text-amber-600" size={24} />
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">2</p>
              <p className="text-sm text-muted-foreground">Medium Priority</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Info className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">1</p>
              <p className="text-sm text-muted-foreground">Low Priority</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">1</p>
              <p className="text-sm text-muted-foreground">Resolved Today</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Alerts List with Tabs */}
      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Active (3)</TabsTrigger>
          <TabsTrigger value="acknowledged">Acknowledged (1)</TabsTrigger>
          <TabsTrigger value="resolved">Resolved (1)</TabsTrigger>
          <TabsTrigger value="all">All (5)</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {alerts
            .filter((alert) => alert.status === "active")
            .map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
        </TabsContent>

        <TabsContent value="acknowledged" className="space-y-4">
          {alerts
            .filter((alert) => alert.status === "acknowledged")
            .map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
        </TabsContent>

        <TabsContent value="resolved" className="space-y-4">
          {alerts
            .filter((alert) => alert.status === "resolved")
            .map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          {alerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function AlertCard({ alert }: { alert: typeof alerts[0] }) {
  const severityConfig = {
    high: {
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      badge: "bg-red-100 text-red-700",
      border: "border-red-200",
    },
    medium: {
      icon: AlertCircle,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      badge: "bg-amber-100 text-amber-700",
      border: "border-amber-200",
    },
    low: {
      icon: Info,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      badge: "bg-blue-100 text-blue-700",
      border: "border-blue-200",
    },
  };

  const config = severityConfig[alert.severity as keyof typeof severityConfig];
  const Icon = config.icon;

  return (
    <Card className={`p-6 border-l-4 ${config.border}`}>
      <div className="space-y-4">
        {/* Alert Header */}
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 ${config.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <Icon className={config.color} size={24} />
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg font-semibold text-foreground">
                {alert.title}
              </h3>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Badge className={config.badge}>{alert.severity}</Badge>
                {alert.status === "resolved" && (
                  <Badge className="bg-green-100 text-green-700">Resolved</Badge>
                )}
                {alert.status === "acknowledged" && (
                  <Badge className="bg-gray-100 text-foreground">Acknowledged</Badge>
                )}
              </div>
            </div>
            
            <p className="text-foreground mb-3">{alert.description}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {alert.location}
              </span>
              <span>Sensor: {alert.sensorId}</span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {alert.timestamp}
              </span>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        {alert.recommendations.length > 0 && (
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-foreground mb-2">
              Recommended Actions
            </h4>
            <ul className="space-y-2">
              {alert.recommendations.map((rec, index) => (
                <li key={index} className="text-sm text-foreground flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          {alert.status === "active" && (
            <>
              <Button size="sm">Acknowledge</Button>
              <Button size="sm" variant="outline">
                Schedule Service
              </Button>
              <Button size="sm" variant="ghost">
                Mark as Resolved
              </Button>
            </>
          )}
          {alert.status === "acknowledged" && (
            <>
              <Button size="sm">Mark as Resolved</Button>
              <Button size="sm" variant="outline">
                View Details
              </Button>
            </>
          )}
          {alert.status === "resolved" && (
            <Button size="sm" variant="outline">
              View Resolution Details
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}