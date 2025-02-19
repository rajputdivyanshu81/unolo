import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Search, CheckSquare, Clock, BarChart, Users, Tag, Calendar, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  status: "To Do" | "In Progress" | "In Review" | "Completed";
  dueDate: string;
  assignee: {
    name: string;
    avatar: string;
  };
  tags: string[];
  progress: number;
}

export const TasksView = () => {
  const [tasks] = useState<Task[]>([
    {
      id: "TSK001",
      title: "Redesign Landing Page",
      description: "Update the main landing page with new branding guidelines",
      priority: "High",
      status: "In Progress",
      dueDate: "2024-03-25",
      assignee: {
        name: "Alex Morgan",
        avatar: "AM"
      },
      tags: ["Design", "Frontend"],
      progress: 60
    },
    {
      id: "TSK002",
      title: "API Integration",
      description: "Integrate payment gateway API with the checkout system",
      priority: "High",
      status: "To Do",
      dueDate: "2024-03-28",
      assignee: {
        name: "Ryan Chen",
        avatar: "RC"
      },
      tags: ["Backend", "API"],
      progress: 0
    },
    {
      id: "TSK003",
      title: "User Testing",
      description: "Conduct user testing for the new feature release",
      priority: "Medium",
      status: "In Review",
      dueDate: "2024-03-22",
      assignee: {
        name: "Sarah Wilson",
        avatar: "SW"
      },
      tags: ["QA", "Testing"],
      progress: 80
    }
  ]);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">Task Management</h1>
            <p className="text-muted-foreground mt-1">Track and manage project tasks</p>
          </div>
          <button className="px-4 py-2 bg-primary text-black rounded-md flex items-center gap-2">
            <CheckSquare className="h-4 w-4" />
            Create Task
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Total Tasks</p>
                <h3 className="text-2xl font-bold mt-2">24</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-200 dark:bg-blue-700 flex items-center justify-center">
                <CheckSquare className="h-5 w-5 text-blue-700 dark:text-blue-300" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900 dark:to-yellow-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">In Progress</p>
                <h3 className="text-2xl font-bold mt-2">8</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-yellow-200 dark:bg-yellow-700 flex items-center justify-center">
                <Clock className="h-5 w-5 text-yellow-700 dark:text-yellow-300" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">Completed</p>
                <h3 className="text-2xl font-bold mt-2">12</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-200 dark:bg-green-700 flex items-center justify-center">
                <BarChart className="h-5 w-5 text-green-700 dark:text-green-300" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900 dark:to-red-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-red-600 dark:text-red-400">Overdue</p>
                <h3 className="text-2xl font-bold mt-2">4</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-red-200 dark:bg-red-700 flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-red-700 dark:text-red-300" />
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="text-lg font-semibold">All Tasks</h3>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tasks"
                className="pl-9"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Task</th>
                  <th className="text-left py-2">Priority</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Due Date</th>
                  <th className="text-left py-2">Assignee</th>
                  <th className="text-left py-2">Progress</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id} className="border-b">
                    <td className="py-4">
                      <div>
                        <div className="font-medium">{task.title}</div>
                        <div className="text-sm text-muted-foreground">{task.description}</div>
                        <div className="flex gap-2 mt-2">
                          {task.tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        task.priority === "High" ? "bg-red-100 text-red-800" :
                        task.priority === "Medium" ? "bg-yellow-100 text-yellow-800" :
                        "bg-green-100 text-green-800"
                      }`}>
                        {task.priority}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        task.status === "To Do" ? "bg-gray-100 text-gray-800" :
                        task.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                        task.status === "In Review" ? "bg-purple-100 text-purple-800" :
                        "bg-green-100 text-green-800"
                      }`}>
                        {task.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        {task.dueDate}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">
                          {task.assignee.avatar}
                        </div>
                        <span>{task.assignee.name}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-primary h-2.5 rounded-full"
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1">{task.progress}%</span>
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

export default TasksView;