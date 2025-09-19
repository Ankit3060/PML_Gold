import React, { useState } from "react";
import { FaCheckCircle, FaCloudDownloadAlt } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { MdError } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const transactions = [
  {
    date: "2025-06-09T10:15:00",
    metal: "Gold",
    type: "Buy",
    txnId: "TxnId123456",
    amount: 1020,
    status: "success",
    icon: "/GoldIcon.svg",
  },
  {
    date: "2025-06-09T12:30:00",
    metal: "Silver",
    type: "Sell",
    txnId: "TxnId654321",
    amount: 1500,
    status: "pending",
    icon: "/SilverIcon.svg",
  },
  {
    date: "2025-06-09T14:00:00",
    metal: "Wallet",
    type: "Fund Added",
    txnId: "TxnId987654",
    amount: 2000,
    status: "failed",
    icon: "/walletIcon.svg",
  },
  {
    date: "2025-06-09T16:20:00",
    metal: "Wallet",
    type: "Withdraw",
    txnId: "TxnId112233",
    amount: 1000,
    status: "success",
    icon: "/walletIcon.svg",
  },
  {
    date: "2025-06-10T09:45:00",
    metal: "Gold",
    type: "Buy",
    txnId: "TxnId445566",
    amount: 3200,
    status: "success",
    icon: "/GoldIcon.svg",
  },
  {
    date: "2025-06-10T11:10:00",
    metal: "Gold",
    type: "Sell",
    txnId: "TxnId778899",
    amount: 2500,
    status: "failed",
    icon: "/GoldIcon.svg",
  },
  {
    date: "2025-06-10T13:25:00",
    metal: "Silver",
    type: "Buy",
    txnId: "TxnId223344",
    amount: 800,
    status: "pending",
    icon: "/SilverIcon.svg",
  },
  {
    date: "2025-06-11T08:30:00",
    metal: "Wallet",
    type: "Fund Added",
    txnId: "TxnId998877",
    amount: 1200,
    status: "success",
    icon: "/walletIcon.svg",
  },
  {
    date: "2025-06-11T15:50:00",
    metal: "Gold",
    type: "Payout",
    txnId: "TxnId334455",
    amount: 500,
    status: "pending",
    icon: "/GoldIcon.svg",
  },
  {
    date: "2025-06-12T10:05:00",
    metal: "Silver",
    type: "Buy",
    txnId: "TxnId667788",
    amount: 950,
    status: "success",
    icon: "/SilverIcon.svg",
  },
  {
    date: "2025-06-12T12:40:00",
    metal: "Wallet",
    type: "Withdraw",
    txnId: "TxnId776655",
    amount: 1800,
    status: "failed",
    icon: "/walletIcon.svg",
  },
  {
    date: "2025-06-12T17:25:00",
    metal: "Silver",
    type: "Sell",
    txnId: "TxnId554433",
    amount: 4000,
    status: "success",
    icon: "/SilverIcon.svg",
  },
];

export default function TransactionTable() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredTxns, setFilteredTxns] = useState(transactions);

  const renderStatusIcon = (status) => {
    switch (status) {
      case "success":
        return <FaCheckCircle className="text-green-500 text-xl" />;
      case "failed":
        return <MdError className="text-red-400 text-xl" />;
      case "pending":
        return <BiTimeFive className="text-[#456682] text-xl" />;
      default:
        return null;
    }
  };

  const applyFilters = () => {
    let filtered = transactions;

    if (statusFilter !== "all") {
      filtered = filtered.filter((t) => t.status === statusFilter);
    }
    if (typeFilter !== "all") {
      filtered = filtered.filter((t) => t.type === typeFilter);
    }
    if (startDate) {
      filtered = filtered.filter((t) => new Date(t.date) >= startDate);
    }
    if (endDate) {
      filtered = filtered.filter((t) => new Date(t.date) <= endDate);
    }

    setFilteredTxns(filtered);
  };

  return (
    <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-xl">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6 items-center justify-center">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Select start date"
          maxDate={new Date()}
          className="border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          placeholderText="Select end date"
          maxDate={new Date()}
          className="border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <select
          className="border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="success">Success</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>
        <select
          className="border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
          <option value="Fund Added">Fund Added</option>
          <option value="Withdraw">Withdraw</option>
        </select>
        <button
          onClick={applyFilters}
          className="bg-[#456682] text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Go ➜
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-[#456682] shadow-sm">
        <table className="w-full min-w-[600px] text-sm border">
          <thead>
            <tr className="bg-[#456682] text-left text-white uppercase text-xs tracking-wide">
              <th className="p-4">Date</th>
              <th className="p-4">Metal</th>
              <th className="p-2 sm:p-4 whitespace-nowrap">Transaction Type</th>
              <th className="sm:p-4 pl-1 ">Transaction ID</th>
              <th className="sm:p-4 p-5">INR</th>
              <th className="p-4">Status</th>
              <th className="p-4">Download</th>
            </tr>
          </thead>
          <tbody className="text-center sm:text-left">
            {filteredTxns.map((txn, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-[#dae8f2]"
                } hover:bg-blue-50 transition`}
              >
                <td className="p-4 text-gray-600 whitespace-nowrap">
                  {new Date(txn.date).toLocaleString()}
                </td>
                <td className="p-4 font-medium text-gray-800 flex sm:items-center gap-2">
                  {txn.icon && (
                    <img src={txn.icon} alt={txn.metal} className="w-5 h-5" />
                  )}
                  {txn.metal}
                </td>
                <td className="p-4">{txn.type}</td>
                <td className="p-4 text-gray-500">{txn.txnId}</td>
                <td className="lg:p-4  font-semibold">₹ {txn.amount}</td>
                <td className="p-4 justify-center sm:justify-start">{renderStatusIcon(txn.status)}</td>
                <td className="p-4 text-[#456682]">
                  <FaCloudDownloadAlt className="text-xl cursor-pointer transition" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
