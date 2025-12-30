import React, { useState } from "react";

export default function InvoiceApp() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  const invoices = [
    { id: "#RT3080", date: "19 Aug 2021", name: "Jensen Huang", amount: "£1,800.90", status: "Paid" },
    { id: "#XM9141", date: "20 Sep 2021", name: "Alex Grim", amount: "£556.00", status: "Pending" },
    { id: "#RG0314", date: "01 Oct 2021", name: "John Morrison", amount: "£14,002.33", status: "Paid" },
    { id: "#RT2080", date: "12 Oct 2021", name: "Jens Bond", amount: "£102.24", status: "Paid" },
    { id: "#AA1449", date: "14 Nov 2021", name: "Alan Rickman", amount: "£400.00", status: "Pending" },
    { id: "#TT9999", date: "30 Nov 2021", name: "Thomas Wayne", amount: "£1,400.88", status: "Paid" },
    { id: "#V3290", date: "01 Dec 2021", name: "Alana McDonald", amount: "£200.00", status: "Draft" }
  ];

  return (
    <div className={`flex min-h-screen ${darkMode ? "bg-[#141625] text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Sidebar */}
      <aside className={`w-20 flex flex-col justify-between items-center py-6 ${darkMode ? "bg-[#1E2139]" : "bg-white shadow"}`}>
        <div className="w-12 h-12 bg-purple-600 rounded-full"></div>
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src="profile.jpg" alt="User Profile" className="w-full h-full object-cover" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Invoices</h1>
            <p className="text-sm opacity-70">There are {invoices.length} total invoices</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <select className={`px-3 py-2 rounded ${darkMode ? "bg-[#1E2139] text-white" : "bg-white border"}`}>
              <option value="all">All</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="draft">Draft</option>
            </select>
            <button className="bg-purple-600 text-white px-4 py-2 rounded">+ New Invoice</button>
            <button onClick={toggleTheme} className="px-4 py-2 border rounded">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </header>

        <section className="space-y-4">
          {invoices.map((invoice, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-4 rounded-lg ${darkMode ? "bg-[#1E2139]" : "bg-white shadow"}`}
            >
              <span>{invoice.id}</span>
              <span className="hidden sm:block">Due {invoice.date}</span>
              <span className="hidden md:block">{invoice.name}</span>
              <span>{invoice.amount}</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                invoice.status === "Paid"
                  ? "bg-green-200 text-green-800"
                  : invoice.status === "Pending"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-gray-200 text-gray-800"
              }`}>
                {invoice.status}
              </span>
              <button className="text-lg">&rarr;</button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
