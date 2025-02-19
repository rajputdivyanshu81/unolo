
import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";
import { Bell, Menu, MessageSquare, User } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setSidebarOpen(!sidebarOpen);
    }
  };

  const handleNotification = () => {
    toast({
      title: "Notifications",
      description: "You have 3 unread notifications",
    });
  };

  const handleMessage = () => {
    toast({
      title: "Messages",
      description: "You have 2 unread messages",
    });
  };

  return (
    <div className="h-screen flex overflow-hidden bg-background">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 right-0 left-0 h-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40 border-b">
        <div className={cn(
          "h-full flex items-center justify-between px-4 transition-all duration-300 ease-in-out",
          sidebarOpen ? "lg:ml-64" : "lg:ml-20"
        )}>
          {/* Left side - Mobile Menu Button */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Right side - Notifications, Messages, and User */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-accent/10 transition-colors duration-200"
              onClick={handleNotification}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full animate-pulse" />
            </Button>

            {/* Messages */}
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-accent/10 transition-colors duration-200"
              onClick={handleMessage}
            >
              <MessageSquare className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full animate-pulse" />
            </Button>

            {/* User Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative h-8 w-8 rounded-full hover:bg-accent/10 transition-colors duration-200"
                >
                  <div className="flex items-center justify-center h-full w-full bg-primary/10 rounded-full">
                    <User className="h-4 w-4" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-1">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Help</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive cursor-pointer">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        open={isMobile ? mobileOpen : sidebarOpen} 
        onToggle={toggleSidebar}
        className={cn(
          "transition-transform duration-300 ease-in-out lg:translate-x-0 z-50",
          !mobileOpen && isMobile && "-translate-x-full"
        )}
      />

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 overflow-y-auto transition-all duration-300 ease-in-out",
          "w-full px-4 pt-20 pb-8",
          sidebarOpen ? "lg:ml-64" : "lg:ml-20"
        )}
      >
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
};
