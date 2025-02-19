
import { Card } from "@/components/ui/card";
import { DashboardLayout } from "@/components/DashboardLayout";
import { BarChart2, Camera, FileText, ShoppingCart, Users } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
    <Card className="p-4 sm:p-6 bg-gradient-to-br from-card to-card/95 hover:from-accent/5 hover:to-accent/10 transition-all duration-300 shadow-lg hover:shadow-xl border border-border/50">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-foreground/80">{title}</h3>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{value}</span>
            <span className="text-sm text-muted-foreground animate-pulse">↑{change}%</span>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            {yesterday} Yesterday
          </div>
        </div>
        <div className="p-3 bg-primary/5 rounded-xl rotate-3 hover:rotate-0 transition-transform duration-300">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </Card>
  );

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-br from-background to-accent/5 p-6 rounded-lg border border-border/50">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Realtime Dashboard
          </h1>
          <div className="flex flex-wrap gap-3 w-full sm:w-auto">
            <Link to="/attendance">
              <Button variant="outline" className="bg-card hover:bg-accent/10 transition-colors duration-300 shadow-sm hover:shadow-md">
                View Attendance Details
              </Button>
            </Link>
            <select className="w-full sm:w-auto px-4 py-2 rounded-lg border bg-card hover:bg-accent/10 transition-colors duration-300 shadow-sm hover:shadow-md focus:ring-2 focus:ring-primary/20 outline-none">
              <option>Overview</option>
              <option>Live Location</option>
              <option>Timeline</option>
              <option>Card View</option>
              <option>Compliance Status</option>
              <option>Site Attendance</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-br from-card to-card/95 hover:from-accent/5 hover:to-accent/10 transition-all duration-300 shadow-lg hover:shadow-xl border border-border/50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Daily Average Working Hours
              </h3>
              <select className="px-4 py-2 rounded-lg border bg-card hover:bg-accent/10 transition-colors duration-300 shadow-sm hover:shadow-md focus:ring-2 focus:ring-primary/20 outline-none">
                <option>This Month</option>
                <option>Last Month</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }} 
                  />
                  <Bar 
                    dataKey="hours" 
                    fill="#8B4513"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-card/95 hover:from-accent/5 hover:to-accent/10 transition-all duration-300 shadow-lg hover:shadow-xl border border-border/50">
            <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6">
              Task Status Overview
            </h3>
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
                      <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[index % COLORS.length]}
                        className="hover:opacity-80 transition-opacity duration-300"
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {taskData.map((item, index) => (
                <div key={item.name} className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/5 transition-colors">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: COLORS[index] }} 
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="text-xs text-muted-foreground">{item.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
