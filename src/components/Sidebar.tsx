
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
import { ThemeToggle } from "./ThemeToggle";
import { useNavigate } from "react-router-dom";
interface SidebarProps {
  open: boolean;
  onToggle: () => void;
  className?: string;
}

export const Sidebar = ({ open, onToggle, className }: SidebarProps) => {
  const navigate = useNavigate();
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    {  icon: Users,
      label: "Attendance",
      href: "/attendance",
      onClick: () => navigate("/attendance"),
    },
    { icon: CalendarDays, label: "Leaves", 
      href: "/leaves",
      onClick : () => navigate("/leaves"),
     },
    { icon: Building2, label: "Organization",
       href: "/organization",
      onClick:() => navigate("/organization") },
    { icon: ClipboardList, label: "Tasks",
       href: "/tasks",
      onClick: () => navigate("/tasks")
     },
    { icon: Target,
       label: "Targets",
        href: "/targets",
        onClick: () => navigate("/targets"),
    },
    { icon: FileText, label: "Form", href: "/form",
      onClick: () => navigate("/form")
     },
    { icon: ShoppingCart, label: "Order",
       href: "/order",
      onClick: () => navigate("/order") },
    { icon: DollarSign, label: "Expenses",
       href: "/expenses" ,
       onClick: () =>navigate("/expenses")
      },
    { icon: Users, label: "Clients & Sites",
       href: "/clients",
       onClick: () => navigate("/clients")
      },
    { icon: BarChart2, label: "Reports",
       href: "/reports",
       onClick:()=>navigate("/reports"),
     },
  ];

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 h-screen bg-gradient-to-b from-background to-background/50 border-r z-40 backdrop-blur-sm",
        open ? "w-64" : "w-20",
        className
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b">
        <span className="flex items-center gap-0.5">
        <img 
        src="/logo.png" 
        alt="Unolo" 
        className={cn("h-8 w-auto", !open && "hidden")}
      />
        </span>
        <span className={cn("font-semibold text-xl text-foreground", !open && "hidden")}>
          Unolo
        </span>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="hover:bg-accent/50 lg:flex hidden"
          >
            <ChevronLeft
              className={cn(
                "h-4 w-4 transition-transform",
                !open && "rotate-180"
              )}
            />
          </Button>
        </div>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <div>
          {menuItems.map((item,index) => (
            <li key={index}
            onClick={() => {
              if (item.onClick) item.onClick(); // Trigger onClick if provided
              else navigate(item.href); // Fallback to href navigation
            }}
            >
              <a
                href={item.href}
                className="flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-accent/50 transition-colors group"
              >
                <item.icon className="h-5 w-5 text-foreground/70 group-hover:text-foreground" />
                <span
                  className={cn(
                    "text-foreground/70 font-medium group-hover:text-foreground",
                    !open && "hidden"
                  )}
                >
                  {item.label}
                </span>
              </a>
            </li>
          ))}
          </div>
          
        </ul>
      </nav>
    </aside>
  );
};
