import { Bar, CartesianGrid, Cell, Legend, Line, Pie, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart, BarChart, PieChart } from "recharts";
import mockData from './../../../mockUpData';

// Analytics Component
const Analytics = () => {
  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Analytics Dashboard</h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Conversion Rate</h3>
          <p className="text-3xl font-bold text-blue-600">3.24%</p>
          <p className="text-sm text-green-600 mt-2">↑ 0.8% from last month</p>
        </section>
        
        <section className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Total Visitors</h3>
          <p className="text-3xl font-bold text-purple-600">45,231</p>
          <p className="text-sm text-green-600 mt-2">↑ 12% from last month</p>
        </section>
        
        <section className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Avg Order Value</h3>
          <p className="text-3xl font-bold text-green-600">$86.45</p>
          <p className="text-sm text-red-600 mt-2">↓ 2.1% from last month</p>
        </section>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Monthly Sales</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockData.monthlySales}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Category Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={mockData.categoryPerformance}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {mockData.categoryPerformance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </section>
      </section>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Best Selling Products</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mockData.topProducts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Best Performing Categories</h2>
        <section className="space-y-4">
          {mockData.categoryPerformance.map((category, idx) => (
            <section key={idx}>
              <section className="flex justify-between mb-2">
                <span className="font-medium">{category.name}</span>
                <span className="font-bold">{category.value}%</span>
              </section>
              <section className="w-full bg-gray-200 rounded-full h-2">
                <section 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{width: `${category.value}%`}}
                ></section>
              </section>
            </section>
          ))}
        </section>
      </section>
    </main>
  );
};
export default Analytics