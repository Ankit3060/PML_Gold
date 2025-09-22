import React from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { IoCloudDownloadOutline } from "react-icons/io5";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default function Portfolio() {
  const data = [
    { metal: "Gold", weight: 0.0883, invested: 1000, current: 1100 },
    { metal: "Silver", weight: 0.15, invested: 500, current: 450 },
  ];
  const invested = data.reduce((sum, item) => sum + item.invested, 0);
  const currentValue = data.reduce((sum, item) => sum + item.current, 0);
  const pnl = currentValue - invested;
  const pnlPercent = ((pnl / invested) * 100).toFixed(2);

  const pieData = {
    labels: ["Gold", "Silver"],
    datasets: [
      {
        data: [7000, 3000],
        backgroundColor: ["#FFD700", "#C0C0C0"],
      },
    ],
  };

  const goldData = {
    labels: ["Start", "1 Month", "2 Month"],
    datasets: [
      {
        label: "Gold Value (₹)",
        data: [1000, 950, 1100],
        borderColor: "#FFD700",
        backgroundColor: "#FFD700",
        tension: 0.3,
        fill: false,
      },
    ],
  };

  const silverData = {
    labels: ["Start", "1 Month", "2 Month"],
    datasets: [
      {
        label: "Silver Value (₹)",
        data: [500, 520, 480],
        borderColor: "#C0C0C0",
        backgroundColor: "#C0C0C0",
        tension: 0.3,
        fill: false,
      },
    ],
  };

  const chartOptionsLine = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
      enabled: true,
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (context) {
          return `${context.dataset.label}: ₹${context.formattedValue}`;
        },
      },
    },
    },
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="p-4  space-y-8">
      <h1 className="text-2xl text-[#456682] md:text-3xl font-bold mb-4 text-center md:text-left">
        PORTFOLIO
      </h1>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-2 bg-[#456682] text-[#FFFFFF] p-4 rounded-2xl shadow-md text-center">
        <div>
          <h2 className="text-sm md:text-lg font-semibold">Invested</h2>
          <p className="text-base md:text-xl">₹{invested}</p>
        </div>
        <div>
          <h2 className="text-sm md:text-lg font-semibold">Current Value</h2>
          <p className="text-base md:text-xl">₹{currentValue}</p>
        </div>
        <div>
          <h2 className="text-sm md:text-lg font-semibold">P&L</h2>
          <p
            className={`flex items-center justify-center text-[15px] md:text-xl font-semibold ${
              pnl >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {pnl >= 0 ? (
              <>
                +₹{pnl} ({pnlPercent}%){" "}
                <TiArrowSortedUp className="ml-1 md:ml-2" />
              </>
            ) : (
              <>
                -₹{Math.abs(pnl)} ({pnlPercent}%){" "}
                <TiArrowSortedDown className="ml-1 md:ml-2" />
              </>
            )}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-4 rounded-2xl shadow-md overflow-x-auto">
        <div className="flex flex-col md:flex-row md:justify-between mb-2 text-xs md:text-sm text-gray-600">
          <p>Last updated: Gold – 2025-09-22 | Silver – 2025-09-22</p>
          <a
            href="#"
            className="text-blue-600 flex items-center gap-2 underline mt-2 md:mt-0"
          >
            <IoCloudDownloadOutline />
            Download XLSX
          </a>
        </div>
        <table className="w-full border-collapse text-xs md:text-base min-w-[500px]">
          <thead>
            <tr className="bg-[#456682] text-white text-left">
              <th className="p-2">Metal</th>
              <th className="p-2">Metal Weight</th>
              <th className="p-2">Invested Amount</th>
              <th className="p-2">Current Value</th>
              <th className="p-2">P&L</th>
              <th className="p-2">P&L Change</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr className="border-t" key={item.metal}>
                <td className="p-2">{item.metal}</td>
                <td className="p-2">{item.weight} g</td>
                <td className="p-2">₹{item.invested}</td>
                <td className="p-2">₹{item.current}</td>
                <td
                  className={`p-2 ${
                    item.current - item.invested >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.current - item.invested >= 0 ? "+" : "-"}₹
                  {Math.abs(item.current - item.invested)}
                </td>
                <td
                  className={`p-2 ${
                    item.current - item.invested >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.current - item.invested >= 0 ? "+" : "-"}
                  {(
                    (Math.abs(item.current - item.invested) / item.invested) *
                    100
                  ).toFixed(2)}
                  %
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-2xl shadow-md h-64">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Holdings Distribution
          </h2>
          <div className="h-48">
            <Pie data={pieData} options={chartOptions} />
          </div>
        </div>

        {/* Gold Chart */}
        <div className="bg-white p-4 rounded-2xl shadow-md h-64">
          <h2 className="text-lg font-semibold mb-4 text-center">Gold</h2>
          <div className="h-48">
            <Line data={goldData} options={chartOptionsLine} />
          </div>
        </div>

        {/* Silver Chart */}
        <div className="bg-white p-4 rounded-2xl shadow-md h-64">
          <h2 className="text-lg font-semibold mb-4 text-center">Silver</h2>
          <div className="h-48">
            <Line data={silverData} options={chartOptionsLine} />
          </div>
        </div>
      </div>
    </div>
  );
}
