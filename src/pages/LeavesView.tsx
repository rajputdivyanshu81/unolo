import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Search, Calendar, Clock, Users, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Leave {
  id: string;
  employee: {
    name: string;
    avatar: string;
    department: string;
  };
  type: "Annual" | "Sick" | "Personal" | "Maternity" | "Paternity";
  startDate: string;
  endDate: string;
  duration: number;
  status: "Approved" | "Pending" | "Rejected";
  reason: string;
}

export const LeavesView = () => {
  const [leaves] = useState<Leave[]>([
    {
      id: "L001",
      employee: {
        name: "Sarah Wilson",
        avatar: "SW",
        department: "Engineering"
      },
      type: "Annual",
      startDate: "2024-03-20",
      endDate: "2024-03-25",
      duration: 5,
      status: "Approved",
      reason: "Family vacation"
    },
    {
      id: "L002",
      employee: {
        name: "Michael Chen",
        avatar: "MC",
        department: "Design"
      },
      type: "Sick",
      startDate: "2024-03-18",
      endDate: "2024-03-19",
      duration: 2,
      status: "Pending",
      reason: "Medical appointment"
    },
    {
      id: "L003",
      employee: {
        name: "Emily Brooks",
        avatar: "EB",
        department: "Marketing"
      },
      type: "Personal",
      startDate: "2024-03-22",
      endDate: "2024-03-22",
      duration: 1,
      status: "Rejected",
      reason: "Personal commitment"
    }
  ]);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">Leave Management</h1>
            <p className="text-muted-foreground mt-1">Track and manage employee leave requests</p>
          </div>
          <button className="px-4 py-2 bg-primary text-black rounded-md flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Request Leave
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">Available Leave Balance</p>
                <h3 className="text-2xl font-bold mt-2">15 Days</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-200 dark:bg-green-700 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-green-700 dark:text-green-300" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600 dark:text-green-400">
              <Clock className="h-4 w-4 mr-1" />
              Last updated 2 hours ago
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Pending Requests</p>
                <h3 className="text-2xl font-bold mt-2">3 Leaves</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-200 dark:bg-blue-700 flex items-center justify-center">
                <Clock className="h-5 w-5 text-blue-700 dark:text-blue-300" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-blue-600 dark:text-blue-400">
              <Users className="h-4 w-4 mr-1" />
              From 2 departments
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Team on Leave</p>
                <h3 className="text-2xl font-bold mt-2">5 People</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-200 dark:bg-purple-700 flex items-center justify-center">
                <Users className="h-5 w-5 text-purple-700 dark:text-purple-300" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-purple-600 dark:text-purple-400">
              <Calendar className="h-4 w-4 mr-1" />
              This week
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="text-lg font-semibold">Leave Requests</h3>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search requests"
                className="pl-9"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Employee</th>
                  <th className="text-left py-2">Leave Type</th>
                  <th className="text-left py-2">Duration</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Reason</th>
                  <th className="text-left py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leaves.map((leave) => (
                  <tr key={leave.id} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">
                          {leave.employee.avatar}
                        </div>
                        <div>
                          <div className="font-medium">{leave.employee.name}</div>
                          <div className="text-sm text-muted-foreground">{leave.employee.department}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        leave.type === "Annual" ? "bg-blue-100 text-blue-800" :
                        leave.type === "Sick" ? "bg-red-100 text-red-800" :
                        "bg-purple-100 text-purple-800"
                      }`}>
                        {leave.type}
                      </span>
                    </td>
                    <td className="py-4">
                      <div>
                        <div className="font-medium">{leave.duration} days</div>
                        <div className="text-sm text-muted-foreground">
                          {leave.startDate} - {leave.endDate}
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        leave.status === "Approved" ? "bg-green-100 text-green-800" :
                        leave.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {leave.status}
                      </span>
                    </td>
                    <td className="py-4">{leave.reason}</td>
                    <td className="py-4">
                      <div className="flex gap-2">
                        <button className="p-1 hover:bg-gray-100 rounded-full">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded-full">
                          <XCircle className="h-4 w-4 text-red-600" />
                        </button>
                      </div>
                    </td>
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

export default LeavesView;