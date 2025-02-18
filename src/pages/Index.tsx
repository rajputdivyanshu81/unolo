
import { Card } from "@/components/ui/card";
import { DashboardLayout } from "@/components/DashboardLayout";

const Index = () => {
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
            </select>
            <select className="w-full sm:w-auto px-4 py-2 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
              <option>Live Location</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="p-4 sm:p-6 bg-card hover:bg-accent/5 transition-all">
            <h3 className="text-base sm:text-lg font-semibold mb-4">Real Time Status</h3>
            <div className="relative aspect-square bg-accent/5 rounded-full flex items-center justify-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">75%</div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 bg-card hover:bg-accent/5 transition-all">
            <h3 className="text-base sm:text-lg font-semibold mb-4">
              Punched In (Inactive) Employees
            </h3>
            <div className="text-3xl sm:text-4xl font-bold text-center mt-8 text-primary">3</div>
          </Card>

          <Card className="p-4 sm:p-6 bg-card hover:bg-accent/5 transition-all">
            <h3 className="text-base sm:text-lg font-semibold mb-4">Teamwise Attendance</h3>
            <div className="h-[150px] sm:h-[200px] flex items-center justify-center text-muted-foreground">
              Chart Coming Soon
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Card className="p-4 sm:p-6 bg-card hover:bg-accent/5 transition-all">
            <h3 className="text-base sm:text-lg font-semibold mb-4">Employees (9)</h3>
            <div className="h-[150px] sm:h-[200px] flex items-center justify-center text-muted-foreground">
              Employee List Coming Soon
            </div>
          </Card>

          <Card className="p-4 sm:p-6 bg-card hover:bg-accent/5 transition-all">
            <h3 className="text-base sm:text-lg font-semibold mb-4">
              Off Duty Employees (1)
            </h3>
            <div className="h-[150px] sm:h-[200px] flex items-center justify-center text-muted-foreground">
              Off Duty List Coming Soon
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
