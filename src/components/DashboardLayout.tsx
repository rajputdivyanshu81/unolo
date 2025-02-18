
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => {
    if (window.innerWidth >= 1024) {
      setSidebarOpen(!sidebarOpen);
    } else {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <div className="h-screen flex overflow-hidden bg-background">
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        open={window.innerWidth >= 1024 ? sidebarOpen : mobileOpen} 
        onToggle={toggleSidebar}
        className={cn(
          "transition-transform duration-300 ease-in-out lg:translate-x-0",
          !mobileOpen && "-translate-x-full lg:translate-x-0"
        )}
      />

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 overflow-y-auto transition-all duration-300 ease-in-out",
          "w-full px-4 py-16 lg:py-8",
          sidebarOpen ? "lg:ml-64" : "lg:ml-20"
        )}
      >
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
};
