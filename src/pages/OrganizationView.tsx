import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Search, Building2, Users, Briefcase, BarChart, Settings, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Department {
  id: string;
  name: string;
  head: {
    name: string;
    avatar: string;
    title: string;
  };
  employeeCount: number;
  budget: number;
  projects: number;
  location: string;
}

export const OrganizationView = () => {
  const [departments] = useState<Department[]>([
    {
      id: "DEP-001",
      name: "Engineering",
      head: {
        name: "Robert Chen",
        avatar: "RC",
        title: "Director of Engineering"
      },
      employeeCount: 45,
      budget: 850000,
      projects: 12,
      location: "San Francisco, CA"
    },
    {
      id: "DEP-002",
      name: "Marketing",
      head: {
        name: "Sarah Johnson",
        avatar: "SJ",
        title: "Marketing Director"
      },
      employeeCount: 28,
      budget: 450000,
      projects: 8,
      location: "New York, NY"
    },
    {
      id: "DEP-003",
      name: "Human Resources",
      head: {
        name: "Michael Brooks",
        avatar: "MB",
        title: "HR Director"
      },
      employeeCount: 15,
      budget: 250000,
      projects: 5,
      location: "Chicago, IL"
    }
  ]);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">Organization Overview</h1>
            <p className="text-muted-foreground mt-1">Manage departments and company structure</p>
          </div>
          <button className="px-4 py-2 bg-primary text-black rounded-md flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Organization Settings
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900 dark:to-indigo-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Departments</p>
                <h3 className="text-2xl font-bold mt-2">8</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-indigo-200 dark:bg-indigo-700 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-indigo-700 dark:text-indigo-300" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Total Employees</p>
                <h3 className="text-2xl font-bold mt-2">248</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-200 dark:bg-emerald-700 flex items-center justify-center">
                <Users className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-amber-600 dark:text-amber-400">Active Projects</p>
                <h3 className="text-2xl font-bold mt-2">32</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-amber-200 dark:bg-amber-700 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-amber-700 dark:text-amber-300" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900 dark:to-rose-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-rose-600 dark:text-rose-400">Total Budget</p>
                <h3 className="text-2xl font-bold mt-2">$2.4M</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-rose-200 dark:bg-rose-700 flex items-center justify-center">
                <BarChart className="h-5 w-5 text-rose-700 dark:text-rose-300" />
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="text-lg font-semibold">Departments</h3>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search departments"
                className="pl-9"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((department) => (
              <Card key={department.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{department.name}</h4>
                      <p className="text-sm text-muted-foreground">Department {department.id}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">
                      {department.head.avatar}
                    </div>
                    <div>
                      <div className="font-medium">{department.head.name}</div>
                      <div className="text-sm text-muted-foreground">{department.head.title}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 border-y">
                    <div>
                      <p className="text-sm text-muted-foreground">Employees</p>
                      <p className="font-medium">{department.employeeCount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Projects</p>
                      <p className="font-medium">{department.projects}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Budget</p>
                      <p className="font-medium">${(department.budget / 1000).toFixed(1)}k</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Utilization</p>
                      <p className="font-medium">87%</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {department.location}
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-primary/10 hover:bg-primary/20 rounded-md text-sm font-medium">
                      View Details
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-md">
                      <Mail className="h-4 w-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-md">
                      <Phone className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default OrganizationView;