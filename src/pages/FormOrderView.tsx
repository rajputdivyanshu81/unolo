import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Search, FileText, Clock, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface FormOrder {
  id: string;
  title: string;
  status: "Pending" | "In Progress" | "Completed";
  requestedBy: string;
  priority: "High" | "Medium" | "Low";
  submittedDate: string;
}

export const FormOrderView = () => {
  const [orders] = useState<FormOrder[]>([
    {
      id: "FO-001",
      title: "Employee Onboarding Form",
      status: "In Progress",
      requestedBy: "HR Department",
      priority: "High",
      submittedDate: "2024-03-15"
    },
    {
      id: "FO-002",
      title: "Leave Application Form",
      status: "Pending",
      requestedBy: "John Smith",
      priority: "Medium",
      submittedDate: "2024-03-14"
    },
    {
      id: "FO-003",
      title: "Expense Claim Form",
      status: "Completed",
      requestedBy: "Finance Team",
      priority: "Low",
      submittedDate: "2024-03-13"
    }
  ]);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-xl sm:text-2xl font-semibold">Form Order Management</h1>
          <button className="px-4 py-2 bg-primary text-black rounded-md">
            New Form Order
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Pending Orders</h3>
            <div className="flex items-center justify-center h-32">
              <Clock className="h-12 w-12 text-yellow-500 mb-2" />
              <span className="text-6xl font-bold ml-4">5</span>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">In Progress</h3>
            <div className="flex items-center justify-center h-32">
              <FileText className="h-12 w-12 text-blue-500 mb-2" />
              <span className="text-6xl font-bold ml-4">3</span>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Completed</h3>
            <div className="flex items-center justify-center h-32">
              <CheckCircle className="h-12 w-12 text-green-500 mb-2" />
              <span className="text-6xl font-bold ml-4">12</span>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="text-lg font-semibold">Form Orders</h3>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search Orders"
                className="pl-9"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Order ID</th>
                  <th className="text-left py-2">Title</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Priority</th>
                  <th className="text-left py-2">Requested By</th>
                  <th className="text-left py-2">Submitted Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="py-4">{order.id}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <FileText className="h-4 w-4" />
                        </div>
                        {order.title}
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        order.status === "Completed" ? "bg-green-100 text-green-800" :
                        order.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        order.priority === "High" ? "bg-red-100 text-red-800" :
                        order.priority === "Medium" ? "bg-yellow-100 text-yellow-800" :
                        "bg-green-100 text-green-800"
                      }`}>
                        {order.priority}
                      </span>
                    </td>
                    <td className="py-4">{order.requestedBy}</td>
                    <td className="py-4">{order.submittedDate}</td>
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

export default FormOrderView;