
import { Card } from "@/components/ui/card";
import { DashboardLayout } from "@/components/DashboardLayout";
import { BarChart } from "recharts";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-brown-900">
            Realtime Dashboard
          </h1>
          <div className="flex space-x-4">
            <select className="px-4 py-2 rounded-lg border bg-white">
              <option>Overview</option>
            </select>
            <select className="px-4 py-2 rounded-lg border bg-white">
              <option>Live Location</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Real Time Status</h3>
            <div className="relative aspect-square">
              {/* We'll add the circular progress here */}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              Punched In (Inactive) Employees
            </h3>
            <div className="text-4xl font-bold text-center mt-8">3</div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Teamwise Attendance</h3>
            {/* Team attendance content */}
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Employees (9)</h3>
            {/* Employees table */}
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              Off Duty Employees (1)
            </h3>
            {/* Off duty employees table */}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
