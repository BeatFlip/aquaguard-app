import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Droplets,
  Plus,
  Search,
  Filter,
  MapPin,
  Battery,
  Signal,
} from "lucide-react";

const sensors = [
  {
    id: "KS-001",
    location: "Kitchen Sink",
    room: "Kitchen",
    status: "normal",
    humidity: 45,
    temperature: 72,
    battery: 85,
    signal: "strong",
    lastReading: "2 mins ago",
  },
  {
    id: "MB-001",
    location: "Master Bathroom",
    room: "Master Bedroom",
    status: "warning",
    humidity: 72,
    temperature: 68,
    battery: 60,
    signal: "good",
    lastReading: "5 mins ago",
  },
  {
    id: "LR-001",
    location: "Laundry Room",
    room: "Laundry",
    status: "normal",
    humidity: 38,
    temperature: 70,
    battery: 92,
    signal: "strong",
    lastReading: "1 min ago",
  },
  {
    id: "GB-001",
    location: "Guest Bathroom",
    room: "Guest Bedroom",
    status: "normal",
    humidity: 42,
    temperature: 69,
    battery: 78,
    signal: "good",
    lastReading: "3 mins ago",
  },
  {
    id: "WH-001",
    location: "Water Heater",
    room: "Basement",
    status: "alert",
    humidity: 85,
    temperature: 75,
    battery: 88,
    signal: "strong",
    lastReading: "Just now",
  },
  {
    id: "BS-001",
    location: "Basement Floor",
    room: "Basement",
    status: "normal",
    humidity: 50,
    temperature: 65,
    battery: 15,
    signal: "weak",
    lastReading: "4 mins ago",
  },
];

export function Sensors() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">Sensors</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            Monitor and manage all your AquaGuard sensors
          </p>
        </div>
        <Button className="gap-2 w-full sm:w-auto">
          <Plus size={18} />
          Add Sensor
        </Button>
      </div>

      {/* Search and Filter */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="search"
              placeholder="Search sensors by location or ID..."
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter size={18} />
            Filter
          </Button>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Sensors (6)</TabsTrigger>
          <TabsTrigger value="alerts">Alerts (1)</TabsTrigger>
          <TabsTrigger value="warnings">Warnings (1)</TabsTrigger>
          <TabsTrigger value="normal">Normal (4)</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {sensors.map((sensor) => (
            <Card key={sensor.id} className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Sensor Icon & Info */}
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center ${
                      sensor.status === "alert"
                        ? "bg-red-50"
                        : sensor.status === "warning"
                        ? "bg-amber-50"
                        : "bg-blue-50"
                    }`}
                  >
                    <Droplets
                      className={
                        sensor.status === "alert"
                          ? "text-red-600"
                          : sensor.status === "warning"
                          ? "text-amber-600"
                          : "text-blue-600"
                      }
                      size={28}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {sensor.location}
                      </h3>
                      <Badge
                        className={
                          sensor.status === "alert"
                            ? "bg-red-100 text-red-700"
                            : sensor.status === "warning"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-green-100 text-green-700"
                        }
                      >
                        {sensor.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {sensor.room}
                      </span>
                      <span>ID: {sensor.id}</span>
                      <span>Last reading: {sensor.lastReading}</span>
                    </div>
                  </div>
                </div>

                {/* Sensor Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Humidity</p>
                    <p className="text-xl font-semibold text-foreground">
                      {sensor.humidity}%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Temperature</p>
                    <p className="text-xl font-semibold text-foreground">
                      {sensor.temperature}°F
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                      <Battery size={12} />
                      Battery
                    </p>
                    <p
                      className={`text-xl font-semibold ${
                        sensor.battery < 20
                          ? "text-red-600"
                          : sensor.battery < 50
                          ? "text-amber-600"
                          : "text-green-600"
                      }`}
                    >
                      {sensor.battery}%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                      <Signal size={12} />
                      Signal
                    </p>
                    <p className="text-sm font-medium text-foreground capitalize">
                      {sensor.signal}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex lg:flex-col gap-2">
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                  <Button variant="ghost" size="sm">
                    Settings
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="alerts">
          {sensors
            .filter((s) => s.status === "alert")
            .map((sensor) => (
              <Card key={sensor.id} className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center">
                    <Droplets className="text-red-600" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {sensor.location}
                    </h3>
                    <p className="text-sm text-muted-foreground">{sensor.room}</p>
                  </div>
                  <Badge className="bg-red-100 text-red-700">Alert</Badge>
                </div>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="warnings">
          {sensors
            .filter((s) => s.status === "warning")
            .map((sensor) => (
              <Card key={sensor.id} className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-amber-50 rounded-lg flex items-center justify-center">
                    <Droplets className="text-amber-600" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {sensor.location}
                    </h3>
                    <p className="text-sm text-muted-foreground">{sensor.room}</p>
                  </div>
                  <Badge className="bg-amber-100 text-amber-700">Warning</Badge>
                </div>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="normal">
          {sensors
            .filter((s) => s.status === "normal")
            .map((sensor) => (
              <Card key={sensor.id} className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Droplets className="text-blue-600" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {sensor.location}
                    </h3>
                    <p className="text-sm text-muted-foreground">{sensor.room}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Normal</Badge>
                </div>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}