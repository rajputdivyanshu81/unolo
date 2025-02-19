import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Search, Globe, Activity, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface ClientSite {
  id: string;
  name: string;
  url: string;
  status: "Online" | "Issues" | "Offline";
  lastChecked: string;
  uptime: string;
  responseTime: string;
}

export const ClientSitesView = () => {
  const [sites] = useState<ClientSite[]>([
    {
      id: "SITE-001",
      name: "Main E-commerce Platform",
      url: "https://example-store.com",
      status: "Online",
      lastChecked: "2 minutes ago",
      uptime: "99.9%",
      responseTime: "250ms"
    },
    {
      id: "SITE-002",
      name: "Corporate Website",
      url: "https://example-corp.com",
      status: "Issues",
      lastChecked: "5 minutes ago",
      uptime: "98.5%",
      responseTime: "450ms"
    },
    {
      id: "SITE-003",
      name: "Customer Portal",
      url: "https://portal.example.com",
      status: "Offline",
      lastChecked: "1 minute ago",
      uptime: "95.0%",
      responseTime: "0ms"
    }
  ]);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-xl sm:text-2xl font-semibold">Client Sites Monitor</h1>
          <button className="px-4 py-2 bg-primary text-black rounded-md">
            Add New Site
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Sites Overview</h3>
            <div className="flex items-center justify-center h-32">
              <Globe className="h-12 w-12 text-primary mb-2" />
              <span className="text-6xl font-bold ml-4">15</span>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Average Uptime</h3>
            <div className="flex items-center justify-center h-32">
              <Activity className="h-12 w-12 text-green-500 mb-2" />
              <span className="text-6xl font-bold ml-4">97.8%</span>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Active Alerts</h3>
            <div className="flex items-center justify-center h-32">
              <AlertTriangle className="h-12 w-12 text-yellow-500 mb-2" />
              <span className="text-6xl font-bold ml-4">2</span>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="text-lg font-semibold">Monitored Sites</h3>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search Sites"
                className="pl-9"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Site Name</th>
                  <th className="text-left py-2">URL</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Uptime</th>
                  <th className="text-left py-2">Response Time</th>
                  <th className="text-left py-2">Last Checked</th>
                </tr>
              </thead>
              <tbody>
                {sites.map((site) => (
                  <tr key={site.id} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Globe className="h-4 w-4" />
                        </div>
                        {site.name}
                      </div>
                    </td>
                    <td className="py-4">
                      <a href={site.url} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        {site.url}
                      </a>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        site.status === "Online" ? "bg-green-100 text-green-800" :
                        site.status === "Issues" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {site.status}
                      </span>
                    </td>
                    <td className="py-4">{site.uptime}</td>
                    <td className="py-4">{site.responseTime}</td>
                    <td className="py-4 text-muted-foreground">{site.lastChecked}</td>
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

export default ClientSitesView;