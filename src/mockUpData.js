// Mock Data
const mockData = {
  kpis: {
    totalProducts: 248,
    totalOrders: 1456,
    totalRevenue: 125840,
    totalCustomers: 892
  },
  topProducts: [
    { id: 1, name: 'Wireless Headphones', sales: 324, revenue: 32400 },
    { id: 2, name: 'Smart Watch Pro', sales: 298, revenue: 89400 },
    { id: 3, name: 'Laptop Stand', sales: 267, revenue: 13350 }
  ],
  leastProducts: [
    { id: 1, name: 'USB Cable Type-C', sales: 12, revenue: 180 },
    { id: 2, name: 'Phone Case Blue', sales: 18, revenue: 360 },
    { id: 3, name: 'Screen Protector', sales: 24, revenue: 240 }
  ],
  products: [
    { id: 1, name: 'Wireless Headphones', price: 99.99, category: 'Electronics', subcategory: 'Audio', stock: 45, images: ['img1.jpg'], colors: ['Black', 'White'], description: 'Premium wireless headphones' },
    { id: 2, name: 'Smart Watch Pro', price: 299.99, category: 'Electronics', subcategory: 'Wearables', stock: 23, images: ['img2.jpg'], colors: ['Silver', 'Gold'], description: 'Advanced smartwatch' },
    { id: 3, name: 'Laptop Stand', price: 49.99, category: 'Accessories', subcategory: 'Office', stock: 8, images: ['img3.jpg'], colors: ['Gray'], description: 'Ergonomic laptop stand' },
    { id: 4, name: 'USB Cable Type-C', price: 15.00, category: 'Accessories', subcategory: 'Cables', stock: 150, images: ['img4.jpg'], colors: ['Black'], description: 'Fast charging cable' }
  ],
  orders: [
    { id: 'ORD-001', customer: 'John Doe', products: ['Wireless Headphones'], total: 99.99, date: '2024-11-15', status: 'Delivered' },
    { id: 'ORD-002', customer: 'Jane Smith', products: ['Smart Watch Pro', 'Laptop Stand'], total: 349.98, date: '2024-11-18', status: 'Processing' },
    { id: 'ORD-003', customer: 'Bob Johnson', products: ['USB Cable Type-C'], total: 15.00, date: '2024-11-19', status: 'Pending' }
  ],
  monthlySales: [
    { month: 'Jan', sales: 12500 },
    { month: 'Feb', sales: 15200 },
    { month: 'Mar', sales: 18900 },
    { month: 'Apr', sales: 16300 },
    { month: 'May', sales: 21400 },
    { month: 'Jun', sales: 19800 }
  ],
  categoryPerformance: [
    { name: 'Electronics', value: 45 },
    { name: 'Accessories', value: 30 },
    { name: 'Clothing', value: 15 },
    { name: 'Home', value: 10 }
  ]
};
export default mockData