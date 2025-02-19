import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Search, FileText, Download, Calendar, BarChart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Report {
  id: string;
  title: string;
  type: "Financial" | "Performance" | "Analytics";
  generatedDate: string;
  status: "Ready" | "Processing" | "Failed";
  size: string;
  downloads: number;
}

export const ReportsView = () => {
  const [reports] = useState<Report[]>([
    {
      id: "REP-001",
      title: "Monthly Financial Summary",
      type: "Financial",
      generatedDate: "2024-03-15",
      status: "Ready",
      size: "2.5 MB",
      downloads: 15
    },
    {
      id: "REP-002",
      title: "Employee Performance Q1",
      type: "Performance",
      generatedDate: "2024-03-14",
      status: "Processing",
      size: "Pending",
      downloads: 0
    },
    {
      id: "REP-003",
      title: "Website Traffic Analysis",
      type: "Analytics",
      generatedDate: "2024-03-13",
      status: "Failed",
      size: "N/A",
      downloads: 0
    }
  ]);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-xl sm:text-2xl font-semibold">Reports Dashboard</h1>
          <button className="px-4 py-2 bg-primary text-black rounded-md">
            Generate New Report
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Available Reports</h3>
            <div className="flex items-center justify-center h-32">
              <FileText className="h-12 w-12 text-primary mb-2" />
              <span className="text-6xl font-bold ml-4">25</span>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Total Downloads</h3>
            <div className="flex items-center justify-center h-32">
              <Download className="h-12 w-12 text-green-500 mb-2" />
              <span className="text-6xl font-bold ml-4">142</span>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Report Categories</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <BarChart className="h-4 w-4 text-blue-500 mr-2" />
                  Financial
                </span>
                <span>10</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 text-green-500 mr-2" />
                  Performance
                </span>
                <span>8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <BarChart className="h-4 w-4 text-purple-500 mr-2" />
                  Analytics
                </span>
                <span>7</span>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="text- lg font-semibold">Recent Reports</h3>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search Reports"
                className="pl-9"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Report Title</th>
                  <th className="text-left py-2">Type</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Generated Date</th>
                  <th className="text-left py-2">Size</th>
                  <th className="text-left py-2">Downloads</th>
                  <th className="text-left py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <FileText className="h-4 w-4" />
                        </div>
                        {report.title}
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        report.type === "Financial" ? "bg-blue-100 text-blue-800" :
                        report.type === "Performance" ? "bg-green-100 text-green-800" :
                        "bg-purple-100 text-purple-800"
                      }`}>
                        {report.type}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        report.status === "Ready" ? "bg-green-100 text-green-800" :
                        report.status === "Processing" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="py-4">{report.generatedDate}</td>
                    <td className="py-4">{report.size}</td>
                    <td className="py-4">{report.downloads}</td>
                    <td className="py-4">
                      {report.status === "Ready" && (
                        <button className="text-primary hover:text-primary/80">
                          <Download className="h-4 w-4" />
                        </button>
                      )}
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

export default ReportsView;