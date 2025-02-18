
import { Card } from "@/components/ui/card";
import { DashboardLayout } from "@/components/DashboardLayout";
import { BarChart } from "recharts";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-brown-900 bg-gradient-to-r from-brown-700 to-brown-900 bg-clip-text text-transparent">
            Realtime Dashboard
          </h1>
          <div className="flex space-x-4">
            <select className="px-4 py-2 rounded-lg border bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors">
              <option>Overview</option>
            </select>
            <select className="px-4 py-2 rounded-lg border bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors">
              <option>Live Location</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-brown-50 to-white border-brown-100 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold mb-4 text-brown-800">Real Time Status</h3>
            <div className="relative aspect-square bg-brown-50/50 rounded-full flex items-center justify-center">
              <div className="text-3xl font-bold text-brown-700">75%</div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-brown-50 to-white border-brown-100 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold mb-4 text-brown-800">
              Punched In (Inactive) Employees
            </h3>
            <div className="text-4xl font-bold text-center mt-8 text-brown-700">3</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-brown-50 to-white border-brown-100 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold mb-4 text-brown-800">Teamwise Attendance</h3>
            <div className="h-[200px] flex items-center justify-center text-brown-400">
              Chart Coming Soon
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-br from-brown-50 to-white border-brown-100 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold mb-4 text-brown-800">Employees (9)</h3>
            <div className="h-[200px] flex items-center justify-center text-brown-400">
              Employee List Coming Soon
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-brown-50 to-white border-brown-100 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold mb-4 text-brown-800">
              Off Duty Employees (1)
            </h3>
            <div className="h-[200px] flex items-center justify-center text-brown-400">
              Off Duty List Coming Soon
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
