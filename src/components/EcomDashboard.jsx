export default function EcomDashboard() {
  const stats = [
    { title: "Total Sales", value: "$45,230", change: "+12.5%" },
    { title: "Orders", value: "1,240", change: "+3.4%" },
    { title: "Customers", value: "820", change: "+5.2%" },
    { title: "Refunds", value: "$1,250", change: "-2.1%" },
  ];

  const topProducts = [
    { id: 1, name: "Wireless Headphones", price: "$120", sales: "230" },
    { id: 2, name: "Smart Watch", price: "$99", sales: "180" },
    { id: 3, name: "Bluetooth Speaker", price: "$80", sales: "150" },
    { id: 4, name: "Gaming Mouse", price: "$50", sales: "120" },
  ];

  const recentOrders = [
    { id: "#1023", customer: "John Doe", total: "$230", status: "Shipped" },
    { id: "#1024", customer: "Jane Smith", total: "$120", status: "Processing" },
    { id: "#1025", customer: "Michael Lee", total: "$99", status: "Delivered" },
    { id: "#1026", customer: "Sara Wilson", total: "$150", status: "Cancelled" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      {/* Header */}
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
          + Add Product
        </button>
      </header>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-xl shadow p-5 flex flex-col justify-between"
          >
            <span className="text-sm text-gray-500">{stat.title}</span>
            <span className="block text-3xl font-bold text-gray-800">{stat.value}</span>
            <span
              className={`text-sm mt-1 ${
                stat.change.startsWith("+") ? "text-green-500" : "text-red-500"
              }`}
            >
              {stat.change}
            </span>
          </div>
        ))}
      </section>

      {/* Content Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
        {/* Top Products */}
        <div className="bg-white rounded-xl shadow p-6 lg:col-span-2 overflow-auto">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Top Products</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-100">
                <th className="p-3">Product</th>
                <th className="p-3">Price</th>
                <th className="p-3">Sales</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-3">{product.name}</td>
                  <td className="p-3">{product.price}</td>
                  <td className="p-3">{product.sales}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow p-6 overflow-auto">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Recent Orders</h2>
          <ul className="space-y-4">
            {recentOrders.map((order) => (
              <li
                key={order.id}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-semibold text-gray-800">{order.customer}</p>
                  <p className="text-xs text-gray-500">{order.id}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">{order.total}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      order.status === "Shipped"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "Delivered"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
