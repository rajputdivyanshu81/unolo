
import { Card } from "@/components/ui/card";
import { DashboardLayout } from "@/components/DashboardLayout";
import { BarChart2, Camera, FileText, ShoppingCart, Users } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Index = () => {
  const dailyData = [
    { date: '03-02', hours: 1.2 },
    { date: '06-02', hours: 0.8 },
    { date: '09-02', hours: 0.4 },
    { date: '12-02', hours: 1.0 },
    { date: '15-02', hours: 1.4 },
  ];

  const taskData = [
    { name: 'Completed', value: 60 },
    { name: 'Not Started', value: 20 },
    { name: 'Delayed', value: 20 },
  ];

  const COLORS = ['#8B4513', '#A0522D', '#CD853F'];

  const StatCard = ({ title, value, change, icon: Icon, yesterday }: any) => (
    <Card className="p-4 sm:p-6 bg-card hover:bg-accent/5 transition-all">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-foreground/80">{title}</h3>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-primary">{value}</span>
            <span className="text-sm text-muted-foreground">↑{change}%</span>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            {yesterday} Yesterday
          </div>
        </div>
        <div className="p-2 bg-primary/5 rounded-full">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
    </Card>
  );

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Realtime Dashboard
          </h1>
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <select className="w-full sm:w-auto px-4 py-2 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
              <option>Overview</option>
              <option>Live Location</option>
              <option>Timeline</option>
              <option>Card View</option>
              <option>Compliance Status</option>
              <option>Site Attendance</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Forms Filled"
            value="0"
            change="0"
            icon={FileText}
            yesterday="0"
          />
          <StatCard 
            title="Photos Uploaded"
            value="5"
            change="400"
            icon={Camera}
            yesterday="1"
          />
          <StatCard 
            title="New Clients"
            value="0"
            change="0"
            icon={Users}
            yesterday="0"
          />
          <StatCard 
            title="Orders Submitted"
            value="0"
            change="0"
            icon={ShoppingCart}
            yesterday="0"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Card className="p-4 sm:p-6 bg-card">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-base sm:text-lg font-semibold">Daily Average Working Hours</h3>
              <select className="px-3 py-1 rounded-md border bg-card text-sm">
                <option>This Month</option>
                <option>Last Month</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Bar dataKey="hours" fill="#8B4513" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 bg-card">
            <h3 className="text-base sm:text-lg font-semibold mb-6">Task Status Overview</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={taskData}
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {taskData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[0] }} />
                <span className="text-sm">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[1] }} />
                <span className="text-sm">Not Started</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[2] }} />
                <span className="text-sm">Delayed</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
