import React from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

// Register the necessary components for ChartJS
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const AdminDashboard = () => {
  // Pie chart data
  const pieData = {
    labels: ["Shirts", "Shoes", "Bags"],
    datasets: [
      {
        data: [300, 200, 100],
        backgroundColor: ["#3b82f6", "#14b8a6", "#9333ea"],
      },
    ],
  };

  // Line chart data
  const lineData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Organic",
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: "#14b8a6",
        tension: 0.1,
      },
      {
        label: "Paid",
        data: [40, 45, 60, 65, 50],
        fill: false,
        borderColor: "#9333ea",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2 className="my-6 text-3xl font-semibold text-gray-700">Dashboard</h2>

      {/* Cards */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {/* Card 1 */}
        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs ">
          <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
          </div>
          <div>
            <p className="mb-2 text-lg font-medium text-gray-600">
              Total clients
            </p>
            <p className="text-2xl font-semibold text-gray-700">6389</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs ">
          <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div>
            <p className="mb-2 text-lg font-medium text-gray-600">
              Account balance
            </p>
            <p className="text-2xl font-semibold text-gray-700">$ 46,760.89</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs ">
          <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          </div>
          <div>
            <p className="mb-2 text-lg font-medium text-gray-600">New sales</p>
            <p className="text-2xl font-semibold text-gray-700">376</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs ">
          <div className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div>
            <p className="mb-2 text-lg font-medium text-gray-600">
              Pending contacts
            </p>
            <p className="text-2xl font-semibold text-gray-700">35</p>
          </div>
        </div>
      </div>
      {/* <h2 className="my-6 text-3xl font-semibold text-gray-700">Charts</h2> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        {/* Revenue chart */}
        <div className="max-w-[500px] p-4 bg-white rounded-lg shadow-xs">
          <h4 className="mb-4 font-semibold text-gray-800">Revenue</h4>
          <Pie data={pieData} />
          <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full"></span>
              <span>Shirts</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"></span>
              <span>Shoes</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 mr-1 bg-c-green-600 rounded-full"></span>
              <span>Bags</span>
            </div>
          </div>
        </div>

        {/* Traffic chart */}
        <div className="max-w-[800px] p-4 bg-white rounded-lg shadow-xs">
          <h4 className="mb-4 font-semibold text-gray-800">Traffic</h4>
          <Line data={lineData} />
          <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
              <span>Organic</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 mr-1 bg-c-green-600 rounded-full"></span>
              <span>Paid</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
