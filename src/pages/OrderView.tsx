import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Search, Package, TrendingUp, Truck, Clock, DollarSign, ShoppingCart, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
  total: number;
  orderDate: string;
  deliveryDate?: string;
  shippingAddress: string;
  trackingNumber?: string;
}

export const OrderView = () => {
  const [orders] = useState<Order[]>([
    {
      id: "ORD-001",
      customer: {
        name: "John Smith",
        email: "john.smith@example.com",
        avatar: "JS"
      },
      items: [
        { name: "Premium Headphones", quantity: 1, price: 299.99 },
        { name: "Wireless Mouse", quantity: 2, price: 49.99 }
      ],
      status: "Processing",
      total: 399.97,
      orderDate: "2024-03-15",
      shippingAddress: "123 Main St, New York, NY 10001",
      trackingNumber: "TRK123456789"
    },
    {
      id: "ORD-002",
      customer: {
        name: "Emma Wilson",
        email: "emma.w@example.com",
        avatar: "EW"
      },
      items: [
        { name: "Smart Watch", quantity: 1, price: 199.99 }
      ],
      status: "Shipped",
      total: 199.99,
      orderDate: "2024-03-14",
      deliveryDate: "2024-03-18",
      shippingAddress: "456 Oak Ave, Los Angeles, CA 90001",
      trackingNumber: "TRK987654321"
    },
    {
      id: "ORD-003",
      customer: {
        name: "Michael Chen",
        email: "m.chen@example.com",
        avatar: "MC"
      },
      items: [
        { name: "Laptop Stand", quantity: 1, price: 79.99 },
        { name: "Keyboard", quantity: 1, price: 129.99 },
        { name: "Mouse Pad", quantity: 2, price: 19.99 }
      ],
      status: "Pending",
      total: 249.96,
      orderDate: "2024-03-16",
      shippingAddress: "789 Pine St, Chicago, IL 60601"
    }
  ]);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">Order Management</h1>
            <p className="text-muted-foreground mt-1">Track and manage customer orders</p>
          </div>
          <button className="px-4 py-2 bg-primary text-black rounded-md flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            New Order
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Total Orders</p>
                <h3 className="text-2xl font-bold mt-2">1,234</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-200 dark:bg-blue-700 flex items-center justify-center">
                <Package className="h-5 w-5 text-blue-700 dark:text-blue-300" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-blue-600 dark:text-blue-400">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>12% increase</span>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">Revenue</p>
                <h3 className="text-2xl font-bold mt-2">$52,389</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-200 dark:bg-green-700 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-green-700 dark:text-green-300" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600 dark:text-green-400">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>8% increase</span>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900 dark:to-yellow-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Processing</p>
                <h3 className="text-2xl font-bold mt-2">28</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-yellow-200 dark:bg-yellow-700 flex items-center justify-center">
                <Clock className="h-5 w-5 text-yellow-700 dark:text-yellow-300" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Shipped</p>
                <h3 className="text-2xl font-bold mt-2">156</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-200 dark:bg-purple-700 flex items-center justify-center">
                <Truck className="h-5 w-5 text-purple-700 dark:text-purple-300" />
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="text-lg font-semibold">Recent Orders</h3>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search orders"
                className="pl-9"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Order ID</th>
                  <th className="text-left py-2">Customer</th>
                  <th className="text-left py-2">Items</th>
                  <th className="text-left py-2">Total</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Shipping</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="py-4">
                      <div className="font-medium">{order.id}</div>
                      <div className="text-sm text-muted-foreground">{order.orderDate}</div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">
                          {order.customer.avatar}
                        </div>
                        <div>
                          <div className="font-medium">{order.customer.name}</div>
                          <div className="text-sm text-muted-foreground">{order.customer.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="space-y-1">
                        {order.items.map((item, index) => (
                          <div key={index} className="text-sm">
                            {item.quantity}x {item.name}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="font-medium">${order.total.toFixed(2)}</div>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        order.status === "Delivered" ? "bg-green-100 text-green-800" :
                        order.status === "Shipped" ? "bg-blue-100 text-blue-800" :
                        order.status === "Processing" ? "bg-yellow-100 text-yellow-800" :
                        order.status === "Cancelled" ? "bg-red-100 text-red-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                        <div>
                          <div className="text-sm">{order.shippingAddress}</div>
                          {order.trackingNumber && (
                            <div className="text-sm text-muted-foreground mt-1">
                              Tracking: {order.trackingNumber}
                            </div>
                          )}
                        </div>
                      </div>
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

export default OrderView;