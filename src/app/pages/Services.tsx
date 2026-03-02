import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Calendar,
  Clock,
  User,
  Phone,
  MapPin,
  Wrench,
  CheckCircle,
  Star,
} from "lucide-react";

const serviceProviders = [
  {
    id: 1,
    name: "John Smith",
    specialty: "Leak Detection & Repair",
    rating: 4.9,
    reviews: 124,
    image: "JS",
    certified: true,
    available: "Next Day",
  },
  {
    id: 2,
    name: "Sarah Williams",
    specialty: "Plumbing & Water Systems",
    rating: 4.8,
    reviews: 98,
    image: "SW",
    certified: true,
    available: "Same Day",
  },
  {
    id: 3,
    name: "Mike Johnson",
    specialty: "Sensor Installation",
    rating: 4.7,
    reviews: 87,
    image: "MJ",
    certified: true,
    available: "2-3 Days",
  },
];

const upcomingAppointments = [
  {
    id: 1,
    service: "Quarterly Sensor Inspection",
    technician: "John Smith",
    date: "March 7, 2026",
    time: "2:00 PM - 3:00 PM",
    status: "confirmed",
  },
];

export function Services() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">Services</h1>
        <p className="text-sm sm:text-base text-muted-foreground mt-1">
          Schedule professional inspections and repairs
        </p>
      </div>

      {/* Upcoming Appointments */}
      {upcomingAppointments.length > 0 && (
        <Card className="p-4 sm:p-6 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="text-blue-600" size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                Upcoming Appointment
              </h3>
              <p className="text-sm sm:text-base text-foreground mb-2">
                {upcomingAppointments[0].service}
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <User size={14} />
                  <span className="hidden sm:inline">{upcomingAppointments[0].technician}</span>
                  <span className="sm:hidden">Technician</span>
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span className="hidden sm:inline">{upcomingAppointments[0].date}</span>
                  <span className="sm:hidden">Mar 7</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  2:00 PM
                </span>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Button size="sm" className="flex-1 sm:flex-none">View Details</Button>
                <Button size="sm" variant="outline" className="flex-1 sm:flex-none">
                  Reschedule
                </Button>
                <Button size="sm" variant="ghost" className="hidden sm:inline-flex">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Service Request Form */}
      <Card className="p-4 sm:p-6">
        <h2 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">
          Request a Service
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="service-type">Service Type</Label>
              <select
                id="service-type"
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background text-foreground"
              >
                <option>Select a service...</option>
                <option>Sensor Installation</option>
                <option>Leak Inspection</option>
                <option>System Maintenance</option>
                <option>Emergency Repair</option>
                <option>Sensor Replacement</option>
                <option>Consultation</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferred-date">Preferred Date</Label>
              <Input type="date" id="preferred-date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferred-time">Preferred Time</Label>
              <select
                id="preferred-time"
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background text-foreground"
              >
                <option>Select a time...</option>
                <option>Morning (8:00 AM - 12:00 PM)</option>
                <option>Afternoon (12:00 PM - 5:00 PM)</option>
                <option>Evening (5:00 PM - 8:00 PM)</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="urgency">Urgency</Label>
              <select
                id="urgency"
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background text-foreground"
              >
                <option>Normal</option>
                <option>Urgent (24-48 hours)</option>
                <option>Emergency (Same Day)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location/Sensor</Label>
            <Input
              id="location"
              placeholder="e.g., Kitchen Sink, Master Bathroom"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Please describe the issue or service needed..."
              rows={4}
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit">Submit Request</Button>
            <Button type="button" variant="outline">
              Save as Draft
            </Button>
          </div>
        </form>
      </Card>

      {/* Certified Service Providers */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Certified Service Providers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceProviders.map((provider) => (
            <Card key={provider.id} className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                  {provider.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">
                      {provider.name}
                    </h3>
                    {provider.certified && (
                      <CheckCircle className="text-blue-600" size={16} />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {provider.specialty}
                  </p>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="text-yellow-500 fill-yellow-500" size={14} />
                    <span className="font-medium text-foreground">
                      {provider.rating}
                    </span>
                    <span className="text-muted-foreground">({provider.reviews})</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <Badge variant="outline" className="text-green-700 border-green-300">
                  Available: {provider.available}
                </Badge>
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  Book Now
                </Button>
                <Button size="sm" variant="outline">
                  Profile
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Service History */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Service History
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4 pb-4 border-b border-border">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="text-green-600" size={20} />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-foreground">
                Basement Sensor Calibration
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                Technician: Mike Johnson
              </p>
              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                <span>March 1, 2026</span>
                <span>Completed</span>
                <span className="flex items-center gap-1">
                  <Star className="text-yellow-500 fill-yellow-500" size={12} />
                  5.0
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 pb-4 border-b border-border">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="text-green-600" size={20} />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-foreground">
                Annual System Inspection
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                Technician: Sarah Williams
              </p>
              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                <span>December 15, 2025</span>
                <span>Completed</span>
                <span className="flex items-center gap-1">
                  <Star className="text-yellow-500 fill-yellow-500" size={12} />
                  4.9
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="text-green-600" size={20} />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-foreground">
                Initial System Installation
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                Technician: John Smith
              </p>
              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                <span>September 10, 2025</span>
                <span>Completed</span>
                <span className="flex items-center gap-1">
                  <Star className="text-yellow-500 fill-yellow-500" size={12} />
                  5.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}