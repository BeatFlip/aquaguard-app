import { useState } from "react";
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
  ChevronDown,
  ChevronUp,
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
    signal: "Strong",
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
    signal: "Good",
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
    signal: "Strong",
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
    signal: "Good",
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
    signal: "Strong",
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
    signal: "Weak",
    lastReading: "4 mins ago",
  },
];

type Sensor = typeof sensors[0];

const statusStyles: Record<string, { bg: string; icon: string; badge: string }> = {
  alert: { bg: "bg-red-50", icon: "text-red-600", badge: "bg-red-100 text-red-700" },
  warning: { bg: "bg-amber-50", icon: "text-amber-600", badge: "bg-amber-100 text-amber-700" },
  normal: { bg: "bg-blue-50", icon: "text-blue-600", badge: "bg-green-100 text-green-700" },
};

function batteryColor(pct: number) {
  return pct < 20 ? "text-red-600" : pct < 50 ? "text-amber-600" : "text-green-600";
}

function SensorCard({ sensor }: { sensor: Sensor }) {
  const [expanded, setExpanded] = useState(false);
  const styles = statusStyles[sensor.status] ?? statusStyles.normal;

  return (
    <Card className="p-4">
      {/* ── Mobile layout ── */}
      <div className="sm:hidden">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-10 h-10 ${styles.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <Droplets className={styles.icon} size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-sm font-semibold text-foreground">{sensor.location}</h3>
              <Badge className={`${styles.badge} text-xs`}>{sensor.status}</Badge>
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
              <MapPin size={11} />
              {sensor.room}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-3">
          <div>
            <p className="text-xs text-muted-foreground">Humidity</p>
            <p className="text-sm font-semibold text-foreground">{sensor.humidity}%</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Battery size={11} /> Battery
            </p>
            <p className={`text-sm font-semibold ${batteryColor(sensor.battery)}`}>
              {sensor.battery}%
            </p>
          </div>
        </div>

        {expanded && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-3 pt-3 border-t border-border">
            <div>
              <p className="text-xs text-muted-foreground">Temperature</p>
              <p className="text-sm font-semibold text-foreground">{sensor.temperature}°F</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Signal size={11} /> Signal
              </p>
              <p className="text-sm font-medium text-foreground">{sensor.signal}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Sensor ID</p>
              <p className="text-xs font-medium text-foreground">{sensor.id}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Last Reading</p>
              <p className="text-xs font-medium text-foreground">{sensor.lastReading}</p>
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-1 text-xs h-8"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <><ChevronUp size={13} /> Close</> : <><ChevronDown size={13} /> Details</>}
          </Button>
          {expanded && (
            <Button variant="ghost" size="sm" className="text-xs h-8">
              Settings
            </Button>
          )}
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden sm:flex items-center gap-4">
        <div className={`w-11 h-11 ${styles.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
          <Droplets className={styles.icon} size={22} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="text-sm font-semibold text-foreground">{sensor.location}</h3>
            <Badge className={`${styles.badge} text-xs`}>{sensor.status}</Badge>
          </div>
          <p className="text-xs text-muted-foreground flex items-center gap-3">
            <span className="flex items-center gap-1">
              <MapPin size={11} />
              {sensor.room}
            </span>
            <span>ID: {sensor.id}</span>
            <span>Last reading: {sensor.lastReading}</span>
          </p>
        </div>

        <div className="flex items-center gap-6 flex-shrink-0">
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Humidity</p>
            <p className="text-sm font-semibold text-foreground">{sensor.humidity}%</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Temperature</p>
            <p className="text-sm font-semibold text-foreground">{sensor.temperature}°F</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-0.5 flex items-center gap-1">
              <Battery size={11} /> Battery
            </p>
            <p className={`text-sm font-semibold ${batteryColor(sensor.battery)}`}>
              {sensor.battery}%
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-0.5 flex items-center gap-1">
              <Signal size={11} /> Signal
            </p>
            <p className="text-sm font-medium text-foreground">{sensor.signal}</p>
          </div>
        </div>

        <div className="flex flex-col gap-1 flex-shrink-0">
          <Button variant="outline" size="sm" className="text-xs h-8">Details</Button>
          <Button variant="ghost" size="sm" className="text-xs h-8">Settings</Button>
        </div>
      </div>
    </Card>
  );
}

function SensorList({ items }: { items: Sensor[] }) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-muted-foreground text-center py-8">
        No sensors in this category.
      </p>
    );
  }
  return (
    <div className="space-y-2">
      {items.map((sensor) => (
        <SensorCard key={sensor.id} sensor={sensor} />
      ))}
    </div>
  );
}

export function Sensors() {
  const [query, setQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);

  const filtered = sensors.filter((s) => {
    const matchesQuery =
      query === "" ||
      s.location.toLowerCase().includes(query.toLowerCase()) ||
      s.id.toLowerCase().includes(query.toLowerCase()) ||
      s.room.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filterStatus.length === 0 || filterStatus.includes(s.status);
    return matchesQuery && matchesFilter;
  });

  function toggleFilter(status: string) {
    setFilterStatus((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  }

  const counts = {
    all: filtered.length,
    alerts: filtered.filter((s) => s.status === "alert").length,
    warnings: filtered.filter((s) => s.status === "warning").length,
    normal: filtered.filter((s) => s.status === "normal").length,
  };

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
      <Card className="p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={16}
            />
            <Input
              type="search"
              placeholder="Search by location, room or ID..."
              className="pl-9 h-9 text-sm"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <Button
            variant={showFilter ? "default" : "outline"}
            size="sm"
            className="gap-2 h-9"
            onClick={() => setShowFilter(!showFilter)}
          >
            <Filter size={15} />
            Filter
            {filterStatus.length > 0 && (
              <span className="ml-1 bg-white text-primary rounded-full w-4 h-4 flex items-center justify-center text-xs font-semibold">
                {filterStatus.length}
              </span>
            )}
          </Button>
        </div>

        {showFilter && (
          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground self-center">Status:</p>
            {(["alert", "warning", "normal"] as const).map((status) => (
              <button
                key={status}
                onClick={() => toggleFilter(status)}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                  filterStatus.includes(status)
                    ? statusStyles[status].badge + " border-transparent"
                    : "border-border text-muted-foreground hover:border-foreground"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
            {filterStatus.length > 0 && (
              <button
                onClick={() => setFilterStatus([])}
                className="px-3 py-1 rounded-full text-xs text-muted-foreground hover:text-foreground"
              >
                Clear
              </button>
            )}
          </div>
        )}
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="all" className="space-y-3">
        <TabsList className="w-full overflow-x-auto flex">
          <TabsTrigger value="all" className="flex-1 min-w-fit text-xs sm:text-sm">
            All Sensors ({counts.all})
          </TabsTrigger>
          <TabsTrigger value="alerts" className="flex-1 min-w-fit text-xs sm:text-sm">
            Alerts ({counts.alerts})
          </TabsTrigger>
          <TabsTrigger value="warnings" className="flex-1 min-w-fit text-xs sm:text-sm">
            Warnings ({counts.warnings})
          </TabsTrigger>
          <TabsTrigger value="normal" className="flex-1 min-w-fit text-xs sm:text-sm">
            Normal ({counts.normal})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <SensorList items={filtered} />
        </TabsContent>
        <TabsContent value="alerts">
          <SensorList items={filtered.filter((s) => s.status === "alert")} />
        </TabsContent>
        <TabsContent value="warnings">
          <SensorList items={filtered.filter((s) => s.status === "warning")} />
        </TabsContent>
        <TabsContent value="normal">
          <SensorList items={filtered.filter((s) => s.status === "normal")} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
