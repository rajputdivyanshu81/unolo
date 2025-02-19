import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Search, Target, TrendingUp, Users, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface TargetMetric {
  id: string;
  name: string;
  target: number;
  achieved: number;
  status: "On Track" | "At Risk" | "Behind";
  lastUpdate: string;
}

export const TargetView = () => {
  const [metrics] = useState<TargetMetric[]>([
    {
      id: "1",
      name: "Q1 Sales Target",
      target: 100000,
      achieved: 75000,
      status: "On Track",
      lastUpdate: "2 days ago"
    },
    {
      id: "2",
      name: "New Client Acquisition",
      target: 50,
      achieved: 30,
      status: "At Risk",
      lastUpdate: "1 day ago"
    },
    {
      id: "3",
      name: "Customer Retention",
      target: 95,
      achieved: 92,
      status: "Behind",
      lastUpdate: "5 days ago"
    }
  ]);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-xl sm:text-2xl font-semibold">Target Dashboard</h1>
          <button className="px-4 py-2 bg-primary text-black rounded-md">
            Add New Target
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Overall Progress</h3>
            <div className="relative aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl font-bold">75%</div>
              </div>
              <div className="absolute inset-0">
                <div className="w-full h-full rounded-full border-8 border-primary/20" />
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-primary border-l-transparent border-b-transparent rotate-[270deg]" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Active Targets</h3>
            <div className="flex items-center justify-center h-32">
              <Target className="h-12 w-12 text-primary mb-2" />
              <span className="text-6xl font-bold ml-4">12</span>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Status Overview</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                  On Track
                </span>
                <span>5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
                  At Risk
                </span>
                <span>4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                  Behind
                </span>
                <span>3</span>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="text-lg font-semibold">Active Targets</h3>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search Targets"
                className="pl-9"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Target Name</th>
                  <th className="text-left py-2">Progress</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Last Update</th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((metric) => (
                  <tr key={metric.id} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Target className="h-4 w-4" />
                        </div>
                        {metric.name}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-gray-200 rounded-full">
                          <div 
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${(metric.achieved / metric.target) * 100}%` }}
                          />
                        </div>
                        <span>{Math.round((metric.achieved / metric.target) * 100)}%</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        metric.status === "On Track" ? "bg-green-100 text-green-800" :
                        metric.status === "At Risk" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {metric.status}
                      </span>
                    </td>
                    <td className="py-4 text-muted-foreground">{metric.lastUpdate}</td>
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

export default TargetView;