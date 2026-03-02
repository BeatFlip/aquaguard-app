import { NavLink } from "react-router";
import {
  LayoutDashboard,
  Droplets,
  Bell,
  Wrench,
  Calendar,
  Shield,
  Settings,
  X,
} from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/sensors", icon: Droplets, label: "Sensors" },
  { to: "/alerts", icon: Bell, label: "Alerts" },
  { to: "/maintenance", icon: Wrench, label: "Maintenance" },
  { to: "/services", icon: Calendar, label: "Services" },
  { to: "/insurance", icon: Shield, label: "Insurance" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col h-full">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Droplets className="text-white" size={24} />
            </div>
            <div>
              <h1 className="font-semibold text-lg text-foreground">AquaGuard</h1>
              <p className="text-xs text-muted-foreground">Leak Prevention</p>
            </div>
          </div>
          {/* Close button for mobile */}
          {onClose && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="lg:hidden"
            >
              <X size={20} />
            </Button>
          )}
        </div>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400"
                      : "text-foreground hover:bg-accent"
                  }`
                }
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-border">
        <div className="bg-blue-50 dark:bg-blue-950/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Shield size={16} className="text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-900 dark:text-blue-100">Protected</span>
          </div>
          <p className="text-xs text-blue-700 dark:text-blue-400">
            Your home is actively monitored by AquaGuard
          </p>
        </div>
      </div>
    </aside>
  );
}
