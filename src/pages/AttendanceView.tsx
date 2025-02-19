
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Employee {
  id: string;
  initials: string;
  name: string;
  status: string;
  lastLocation?: string;
  lastUpdate?: string;
  team?: string;
}

export const AttendanceView = () => {
  const [employees] = useState<Employee[]>([
    {
      id: "KV",
      initials: "KV",
      name: "Kumar Viswas",
      status: "Never Marked Attendance",
      lastLocation: "NA",
    },
    {
      id: "MT",
      initials: "MT",
      name: "Mayur Tyagi",
      status: "Punched In",
      lastLocation: "514 The Palm Springs Plaza, Golf Course Rd, DLF Phase 5, Sector 54",
      lastUpdate: "7 hours ago",
    },
    {
      id: "MB",
      initials: "MB",
      name: "Mohan Bishnoi",
      status: "Punched Out",
      lastLocation: "Vikas Marg, South City II, Sector 49, Gurugram",
      lastUpdate: "2 months ago",
    },
  ]);

  const [offDutyEmployees] = useState<Employee[]>([
    {
      id: "RS",
      initials: "RS",
      name: "Rahul Singh",
      team: "default",
      status: "Weekly Off",
    },
  ]);

  const teamwiseAttendance = [
    { team: "Bond", present: 0, total: 1 },
    { team: "default", present: 2, total: 5 },
    { team: "Om Bhagwan", present: 1, total: 0 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-xl sm:text-2xl font-semibold">Realtime Dashboard</h1>
          <button className="px-4 py-2 bg-primary text-black rounded-md">
            Attendance Status
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Real Time Status */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Real Time Status</h3>
            <div className="relative aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl font-bold">9</div>
              </div>
              <div className="absolute inset-0">
                <div className="w-full h-full rounded-full border-8 border-primary/20" />
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-primary border-l-transparent border-b-transparent rotate-45" />
              </div>
            </div>
            <div className="mt-4 flex justify-between text-sm">
              <div>
                <div className="font-semibold">3</div>
                <div className="text-muted-foreground">Punched In</div>
              </div>
              <div>
                <div className="font-semibold">6</div>
                <div className="text-muted-foreground">Punched Out</div>
              </div>
            </div>
          </Card>

          {/* Inactive Employees */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              Punched In (Inactive) Employees
            </h3>
            <div className="flex items-center justify-center h-32">
              <span className="text-6xl font-bold">3</span>
            </div>
          </Card>

          {/* Teamwise Attendance */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Teamwise Attendance</h3>
            <div className="space-y-4">
              {teamwiseAttendance.map((team) => (
                <div key={team.team} className="flex justify-between items-center">
                  <span>{team.team}</span>
                  <div className="flex gap-4">
                    <span>{team.present}</span>
                    <span>{team.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Employees List */}
        <Card className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="text-lg font-semibold">Employees (9)</h3>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search Here"
                className="pl-9"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Employee</th>
                  <th className="text-left py-2">Attendance</th>
                  <th className="text-left py-2">Last Location</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          {employee.initials}
                        </div>
                        {employee.name}
                      </div>
                    </td>
                    <td className="py-4">{employee.status}</td>
                    <td className="py-4">
                      <div>
                        {employee.lastLocation}
                        {employee.lastUpdate && (
                          <div className="text-sm text-muted-foreground">
                            {employee.lastUpdate}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Off Duty Employees */}
        <Card className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="text-lg font-semibold">Off Duty Employees (1)</h3>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search Here"
                className="pl-9"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Employee</th>
                  <th className="text-left py-2">Team Name</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {offDutyEmployees.map((employee) => (
                  <tr key={employee.id} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          {employee.initials}
                        </div>
                        {employee.name}
                      </div>
                    </td>
                    <td className="py-4">{employee.team}</td>
                    <td className="py-4">{employee.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AttendanceView;
