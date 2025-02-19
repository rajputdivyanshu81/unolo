import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Search, DollarSign, TrendingUp, PieChart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
  status: "Pending" | "Approved" | "Rejected";
  submittedBy: string;
}

export const ExpenseView = () => {
  const [expenses] = useState<Expense[]>([
    {
      id: "EXP-001",
      description: "Office Supplies",
      amount: 250.00,
      category: "Supplies",
      date: "2024-03-15",
      status: "Approved",
      submittedBy: "John Doe"
    },
    {
      id: "EXP-002",
      description: "Client Meeting Lunch",
      amount: 120.50,
      category: "Meals",
      date: "2024-03-14",
      status: "Pending",
      submittedBy: "Jane Smith"
    },
    {
      id: "EXP-003",
      description: "Software License",
      amount: 599.99,
      category: "Software",
      date: "2024-03-13",
      status: "Rejected",
      submittedBy: "Mike Johnson"
    }
  ]);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-xl sm:text-2xl font-semibold">Expense Management</h1>
          <button className="px-4 py-2 bg-primary text-black rounded-md">
            Submit Expense
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Total Expenses</h3>
            <div className="flex items-center justify-center h-32">
              <DollarSign className="h-12 w-12 text-primary mb-2" />
              <span className="text-6xl font-bold ml-4">970.49</span>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Monthly Trend</h3>
            <div className="flex items-center justify-center h-32">
              <TrendingUp className="h-12 w-12 text-green-500 mb-2" />
              <span className="text-6xl font-bold ml-4">+15%</span>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Category Split</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Supplies</span>
                <span>35%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Meals</span>
                <span>25%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Software</span>
                <span>40%</span>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="text-lg font-semibold">Recent Expenses</h3>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search Expenses"
                className="pl-9"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">ID</th>
                  <th className="text-left py-2">Description</th>
                  <th className="text-left py-2">Amount</th>
                  <th className="text-left py-2">Category</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Date</th>
                  <th className="text-left py-2">Submitted By</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense.id} className="border-b">
                    <td className="py-4">{expense.id}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <DollarSign className="h-4 w-4" />
                        </div>
                        {expense.description}
                      </div>
                    </td>
                    <td className="py-4">${expense.amount.toFixed(2)}</td>
                    <td className="py-4">{expense.category}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        expense.status === "Approved" ? "bg-green-100 text-green-800" :
                        expense.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {expense.status}
                      </span>
                    </td>
                    <td className="py-4">{expense.date}</td>
                    <td className="py-4">{expense.submittedBy}</td>
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

export default ExpenseView;