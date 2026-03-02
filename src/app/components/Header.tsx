import { Bell, User, Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-card border-b border-border px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="lg:hidden"
        >
          <Menu size={24} />
        </Button>

        {/* Search - Hidden on mobile */}
        <div className="hidden sm:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="search"
              placeholder="Search sensors, alerts, or maintenance tasks..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Mobile Logo */}
        <div className="flex lg:hidden items-center gap-2 flex-1">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">💧</span>
          </div>
          <span className="font-semibold text-foreground">AquaGuard</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search button on mobile */}
          <Button variant="ghost" size="icon" className="sm:hidden">
            <Search size={20} />
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-xs">
              3
            </Badge>
          </Button>

          <div className="hidden sm:block h-8 w-px bg-border" />

          <div className="hidden sm:flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Sarah Johnson</p>
              <p className="text-xs text-muted-foreground">Premium Plan</p>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <div className="w-9 h-9 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <User size={18} className="text-blue-600 dark:text-blue-400" />
              </div>
            </Button>
          </div>

          {/* Mobile user button */}
          <Button variant="ghost" size="icon" className="sm:hidden rounded-full">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <User size={16} className="text-blue-600 dark:text-blue-400" />
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
