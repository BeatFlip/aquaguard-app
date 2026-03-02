import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Wrench,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  Battery,
  Droplets,
  Zap,
} from "lucide-react";

const maintenanceTasks = [
  {
    id: 1,
    title: "Replace Kitchen Sensor Battery",
    description: "Battery level at 15% - replacement recommended",
    type: "battery",
    priority: "high",
    dueDate: "March 5, 2026",
    daysRemaining: 3,
    estimatedTime: "5 minutes",
    status: "pending",
  },
  {
    id: 2,
    title: "Quarterly Sensor Inspection",
    description: "Professional check of all 12 sensors",
    type: "inspection",
    priority: "medium",
    dueDate: "March 7, 2026",
    daysRemaining: 5,
    estimatedTime: "45 minutes",
    status: "scheduled",
    technician: "John Smith",
  },
  {
    id: 3,
    title: "System Software Update",
    description: "New features and improvements available",
    type: "software",
    priority: "low",
    dueDate: "March 10, 2026",
    daysRemaining: 8,
    estimatedTime: "10 minutes",
    status: "pending",
  },
  {
    id: 4,
    title: "Clean Water Heater Sensor",
    description: "Remove dust and debris for optimal performance",
    type: "cleaning",
    priority: "medium",
    dueDate: "March 12, 2026",
    daysRemaining: 10,
    estimatedTime: "15 minutes",
    status: "pending",
  },
  {
    id: 5,
    title: "Basement Sensor Recalibration",
    description: "Monthly sensor accuracy check completed",
    type: "calibration",
    priority: "medium",
    dueDate: "March 1, 2026",
    status: "completed",
    completedDate: "March 1, 2026",
  },
];

export function Maintenance() {
  const pendingTasks = maintenanceTasks.filter((t) => t.status === "pending").length;
  const scheduledTasks = maintenanceTasks.filter((t) => t.status === "scheduled").length;
  const completedTasks = maintenanceTasks.filter((t) => t.status === "completed").length;

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">Maintenance</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            Keep your AquaGuard system running smoothly
          </p>
        </div>
        <Button className="gap-2 w-full sm:w-auto">
          <Calendar size={18} />
          Schedule Service
        </Button>
      </div>

      {/* Maintenance Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <Clock className="text-amber-600" size={24} />
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">{pendingTasks}</p>
              <p className="text-sm text-muted-foreground">Pending Tasks</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">{scheduledTasks}</p>
              <p className="text-sm text-muted-foreground">Scheduled</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">{completedTasks}</p>
              <p className="text-sm text-muted-foreground">Completed This Month</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Maintenance Schedule */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          System Health Score
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Overall Maintenance Status</span>
            <span className="text-sm font-medium text-green-600">Excellent - 94%</span>
          </div>
          <Progress value={94} className="h-3" />
          <p className="text-sm text-muted-foreground">
            Your system is well-maintained. Keep up with scheduled tasks to maintain optimal protection.
          </p>
        </div>
      </Card>

      {/* Tasks List */}
      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList className="w-full">
          <TabsTrigger value="upcoming" className="flex-1">Upcoming ({pendingTasks + scheduledTasks})</TabsTrigger>
          <TabsTrigger value="pending" className="flex-1">Pending ({pendingTasks})</TabsTrigger>
          <TabsTrigger value="scheduled" className="flex-1">Scheduled ({scheduledTasks})</TabsTrigger>
          <TabsTrigger value="completed" className="flex-1">Completed ({completedTasks})</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {maintenanceTasks
            .filter((task) => task.status !== "completed")
            .map((task) => (
              <MaintenanceTaskCard key={task.id} task={task} />
            ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          {maintenanceTasks
            .filter((task) => task.status === "pending")
            .map((task) => (
              <MaintenanceTaskCard key={task.id} task={task} />
            ))}
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          {maintenanceTasks
            .filter((task) => task.status === "scheduled")
            .map((task) => (
              <MaintenanceTaskCard key={task.id} task={task} />
            ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {maintenanceTasks
            .filter((task) => task.status === "completed")
            .map((task) => (
              <MaintenanceTaskCard key={task.id} task={task} />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function MaintenanceTaskCard({ task }: { task: typeof maintenanceTasks[0] }) {
  const typeConfig = {
    battery: { icon: Battery, color: "text-purple-600", bgColor: "bg-purple-50" },
    inspection: { icon: Wrench, color: "text-blue-600", bgColor: "bg-blue-50" },
    software: { icon: Zap, color: "text-green-600", bgColor: "bg-green-50" },
    cleaning: { icon: Droplets, color: "text-cyan-600", bgColor: "bg-cyan-50" },
    calibration: { icon: CheckCircle, color: "text-muted-foreground", bgColor: "bg-gray-50" },
  };

  const priorityConfig = {
    high: "bg-red-100 text-red-700",
    medium: "bg-amber-100 text-amber-700",
    low: "bg-blue-100 text-blue-700",
  };

  const config = typeConfig[task.type as keyof typeof typeConfig];
  const Icon = config.icon;

  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 ${config.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
          <Icon className={config.color} size={24} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="mb-2">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">{task.title}</h3>
              {task.status !== "completed" && task.priority && (
                <Badge className={priorityConfig[task.priority as keyof typeof priorityConfig]}>
                  {task.priority}
                </Badge>
              )}
              {task.status === "scheduled" && (
                <Badge className="bg-blue-100 text-blue-700">Scheduled</Badge>
              )}
              {task.status === "completed" && (
                <Badge className="bg-green-100 text-green-700">Completed</Badge>
              )}
            </div>
          </div>

          <p className="text-sm text-foreground mb-3">{task.description}</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
            {task.status !== "completed" && (
              <>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  Due: {task.dueDate}
                </span>
                {task.daysRemaining !== undefined && (
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {task.daysRemaining} days remaining
                  </span>
                )}
                <span>Est. time: {task.estimatedTime}</span>
              </>
            )}
            {task.status === "completed" && (
              <span className="flex items-center gap-1 text-green-600">
                <CheckCircle size={14} />
                Completed: {task.completedDate}
              </span>
            )}
            {task.technician && (
              <span>Technician: {task.technician}</span>
            )}
          </div>

          {task.status === "pending" && (
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Schedule Now</Button>
              <Button size="sm" variant="outline">
                Mark as Complete
              </Button>
              <Button size="sm" variant="ghost">
                Postpone
              </Button>
            </div>
          )}

          {task.status === "scheduled" && (
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="outline">
                View Appointment
              </Button>
              <Button size="sm" variant="ghost">
                Reschedule
              </Button>
            </div>
          )}

          {task.status === "completed" && (
            <Button size="sm" variant="outline">
              View Details
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}