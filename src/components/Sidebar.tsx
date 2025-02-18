
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  ClipboardList,
  Target,
  FileText,
  ShoppingCart,
  DollarSign,
  Building2,
  BarChart2,
  ChevronLeft,
} from "lucide-react";
import { Button } from "./ui/button";

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ open, onToggle }: SidebarProps) => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Users, label: "Attendance", href: "/attendance" },
    { icon: CalendarDays, label: "Leaves", href: "/leaves" },
    { icon: Building2, label: "Organization", href: "/organization" },
    { icon: ClipboardList, label: "Tasks", href: "/tasks" },
    { icon: Target, label: "Targets", href: "/targets" },
    { icon: FileText, label: "Form", href: "/form" },
    { icon: ShoppingCart, label: "Order", href: "/order" },
    { icon: DollarSign, label: "Expenses", href: "/expenses" },
    { icon: Users, label: "Clients & Sites", href: "/clients" },
    { icon: BarChart2, label: "Reports", href: "/reports" },
  ];

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 h-screen bg-brown-50 border-r transition-all duration-300 ease-in-out z-30",
        open ? "w-64" : "w-20"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b">
        <span className={cn("font-semibold text-xl", !open && "hidden")}>
          Unolo
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="hover:bg-brown-100"
        >
          <ChevronLeft
            className={cn(
              "h-4 w-4 transition-transform",
              !open && "rotate-180"
            )}
          />
        </Button>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-brown-100 transition-colors"
              >
                <item.icon className="h-5 w-5 text-brown-700" />
                <span
                  className={cn(
                    "text-brown-800 font-medium",
                    !open && "hidden"
                  )}
                >
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
