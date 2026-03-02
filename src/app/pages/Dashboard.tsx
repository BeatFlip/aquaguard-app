import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Droplets,
  AlertTriangle,
  CheckCircle,
  TrendingDown,
  Wrench,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { SensorStatusCard } from "../components/SensorStatusCard";
import { WaterUsageChart } from "../components/WaterUsageChart";
import { RiskIndicator } from "../components/RiskIndicator";
import { RecentAlerts } from "../components/RecentAlerts";

export function Dashboard() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">Dashboard</h1>
        <p className="text-sm sm:text-base text-muted-foreground mt-1">
          Welcome back! Here's what's happening with your home.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        <Card className="p-4 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground">Active Sensors</p>
              <p className="text-2xl sm:text-3xl font-semibold mt-2 text-foreground">6</p>
              <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                <CheckCircle size={14} />
                <span className="hidden sm:inline">All operational</span>
                <span className="sm:hidden">All OK</span>
              </p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Droplets className="text-blue-600" size={20} />
            </div>
          </div>
        </Card>

        <Card className="p-4 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground">Active Alerts</p>
              <p className="text-2xl sm:text-3xl font-semibold mt-2 text-foreground">3</p>
              <p className="text-xs text-amber-600 mt-2 flex items-center gap-1">
                <AlertTriangle size={14} />
                <span className="hidden sm:inline">Requires attention</span>
                <span className="sm:hidden">Attention</span>
              </p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="text-amber-600" size={20} />
            </div>
          </div>
        </Card>

        <Card className="p-4 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground">Leak Risk</p>
              <p className="text-2xl sm:text-3xl font-semibold mt-2 text-foreground">Low</p>
              <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                <TrendingDown size={14} />
                -12%
              </p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingDown className="text-green-600" size={20} />
            </div>
          </div>
        </Card>

        <Card className="p-4 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground">Next Maintenance</p>
              <p className="text-2xl sm:text-3xl font-semibold mt-2 text-foreground">3</p>
              <p className="text-xs text-muted-foreground mt-2">days</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Wrench className="text-purple-600" size={20} />
            </div>
          </div>
        </Card>
      </div>

      {/* Sensor Status & Water Usage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2">
          <Card className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg font-semibold text-foreground">
                Water Usage & Risk Analysis
              </h2>
              <Badge variant="outline" className="text-xs">Last 7 days</Badge>
            </div>
            <WaterUsageChart />
          </Card>
        </div>

        <div>
          <Card className="p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">
              Overall Risk Status
            </h2>
            <RiskIndicator />
          </Card>
        </div>
      </div>

      {/* Sensor Status Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base sm:text-lg font-semibold text-foreground">
            Sensor Status Overview
          </h2>
          <Button variant="ghost" className="gap-2 text-sm hidden sm:flex">
            View all sensors
            <ArrowRight size={16} />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <SensorStatusCard
            location="Kitchen Sink"
            status="normal"
            lastReading="2 mins ago"
            humidity={45}
          />
          <SensorStatusCard
            location="Master Bathroom"
            status="warning"
            lastReading="5 mins ago"
            humidity={72}
          />
          <SensorStatusCard
            location="Laundry Room"
            status="normal"
            lastReading="1 min ago"
            humidity={38}
          />
          <SensorStatusCard
            location="Guest Bathroom"
            status="normal"
            lastReading="3 mins ago"
            humidity={42}
          />
          <SensorStatusCard
            location="Water Heater"
            status="alert"
            lastReading="Just now"
            humidity={85}
          />
          <SensorStatusCard
            location="Basement Floor"
            status="normal"
            lastReading="4 mins ago"
            humidity={50}
          />
        </div>
      </div>

      {/* Recent Alerts & Upcoming Maintenance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg font-semibold text-foreground">
              Recent Alerts
            </h2>
            <Button variant="ghost" size="sm" className="gap-2">
              View all
              <ArrowRight size={14} />
            </Button>
          </div>
          <RecentAlerts />
        </Card>

        <Card className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg font-semibold text-foreground">
              Upcoming Maintenance
            </h2>
            <Button variant="ghost" size="sm" className="gap-2">
              View all
              <ArrowRight size={14} />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4 pb-4 border-b border-border">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="text-blue-600" size={20} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">
                  Quarterly Sensor Inspection
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Professional check of all 12 sensors
                </p>
                <p className="text-xs text-muted-foreground mt-2">Due: March 7, 2026</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 pb-4 border-b border-border">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Wrench className="text-purple-600" size={20} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">
                  Replace Kitchen Sensor Battery
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Battery level at 15%
                </p>
                <p className="text-xs text-muted-foreground mt-2">Due: March 5, 2026</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-green-600" size={20} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">
                  System Software Update
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  New features and improvements available
                </p>
                <p className="text-xs text-muted-foreground mt-2">Due: March 10, 2026</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}