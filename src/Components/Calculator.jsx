import React, { useState } from "react";
import { AiFillGold } from "react-icons/ai";
import { MdCurrencyExchange } from "react-icons/md";
import { GiTakeMyMoney, GiReceiveMoney } from "react-icons/gi";

export default function Calculator() {
  const [tab, setTab] = useState("gold");
  const [mode, setMode] = useState("rupees");
  const [amount, setAmount] = useState("");
  const [action, setAction] = useState("buy");
  const [phone, setPhone] = useState("");

  const prices = {
    gold: { price: 11323.14, purity: "24K 99.99%" },
    silver: { price: 135.45, purity: "99.9%" },
  };

  const livePrice = prices[tab].price;
  const purity = prices[tab].purity;

  const wallet = {
    gold: { rupees: 2000, grams: (2000 / prices.gold.price).toFixed(4) },
    silver: { rupees: 2000, grams: (2000 / prices.silver.price).toFixed(4) },
  };

  // conversions
  const grams =
    mode === "rupees" && amount
      ? (parseFloat(amount) / livePrice).toFixed(4)
      : "";
  const rupees =
    mode === "grams" && amount
      ? (parseFloat(amount) * livePrice).toFixed(2)
      : "";

  const handleModeChange = (newMode) => {
    if (newMode === mode) return;

    if (amount && !isNaN(amount)) {
      const amt = parseFloat(amount);
      if (newMode === "grams") {
        setAmount((amt / livePrice).toFixed(4));
      } else {
        setAmount((amt * livePrice).toFixed(2));
      }
    }
    setMode(newMode);
  };

const handleClick = () => {
  if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  const amt = parseFloat(amount);

  // ---- Transfer ----
  if (action === "transfer") {
    if (!phone) {
      alert("Enter phone number");
      return;
    }
    if (amt > wallet[tab].rupees) {
      alert(
        `You cannot transfer more than ₹${wallet[tab].rupees} from your ${tab} wallet.`
      );
      return;
    }
    alert(`Transferred ₹${amt} from your ${tab} wallet to ${phone}`);
    return;
  }

  // ---- Conversion ----
  if (action === "conversion") {
    if (mode === "rupees") {
      if (amt > wallet[tab].rupees) {
        alert(
          `You cannot convert more than ₹${wallet[tab].rupees} from your ${tab} wallet.`
        );
        return;
      }
      if (tab === "gold") {
        const silverGrams = (amt / prices.silver.price).toFixed(4);
        alert(`Converted ₹${amt} of Gold into ${silverGrams}g Silver`);
      } else {
        const goldGrams = (amt / prices.gold.price).toFixed(4);
        alert(`Converted ₹${amt} of Silver into ${goldGrams}g Gold`);
      }
    } else {
      if (amt > parseFloat(wallet[tab].grams)) {
        alert(
          `You cannot convert more than ${wallet[tab].grams}g from your ${tab} wallet.`
        );
        return;
      }
      if (tab === "gold") {
        const silverGrams = ((amt * livePrice) / prices.silver.price).toFixed(4);
        alert(`Converted ${amt}g Gold into ${silverGrams}g Silver`);
      } else {
        const goldGrams = ((amt * livePrice) / prices.gold.price).toFixed(4);
        alert(`Converted ${amt}g Silver into ${goldGrams}g Gold`);
      }
    }
    return;
  }

  // ---- Buy / Sell ----
  let gramsValue, rupeesValue;
  if (mode === "rupees") {
    rupeesValue = amt.toFixed(2);
    gramsValue = (amt / livePrice).toFixed(4);

    // sell validation (Rupees mode)
    if (action === "sell" && amt > wallet[tab].rupees) {
      alert(
        `You cannot sell more than ₹${wallet[tab].rupees} from your ${tab} wallet.`
      );
      return;
    }
  } else {
    gramsValue = amt.toFixed(4);
    rupeesValue = (amt * livePrice).toFixed(2);

    // Sell validation (Grams mode)
    if (action === "sell" && amt > parseFloat(wallet[tab].grams)) {
      alert(
        `You cannot sell more than ${wallet[tab].grams}g from your ${tab} wallet.`
      );
      return;
    }
  }

  const actionText = action === "buy" ? "bought" : "sold";
  const metal = tab === "gold" ? "Gold" : "Silver";

  alert(
    `You have successfully ${actionText} ${gramsValue}g of ${metal} at ₹${rupeesValue}.`
  );
};


  return (
    <div className="w-full max-w-lg mx-auto bg-white shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-2xl p-6">
      {/* Tabs for Gold / Silver */}
      <div className="flex justify-between mb-4 gap-4">
        <button
          onClick={() => setTab("gold")}
          className={`w-1/2 py-2 text-center cursor-pointer font-medium rounded-lg ${
            tab === "gold"
              ? "bg-yellow-400 text-black"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Gold
        </button>
        <button
          onClick={() => setTab("silver")}
          className={`w-1/2 py-2 text-center cursor-pointer font-medium rounded-lg ${
            tab === "silver"
              ? "bg-blue-200 text-black"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Silver
        </button>
      </div>

      {/* Action Toggle */}
      <div className="flex flex-wrap justify-between gap-2 mb-5">
        {["buy", "sell", "conversion", "transfer"].map((opt) => (
          <button
            key={opt}
            onClick={() => setAction(opt)}
            className={`flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 sm:py-2 rounded-lg font-medium text-xs sm:text-sm md:text-base transition 
        ${
          action === opt
            ? "bg-blue-100 text-blue-600"
            : "bg-gray-100 text-gray-500"
        }
      `}
          >
            {opt === "buy" && (
              <GiReceiveMoney
                className={`${
                  tab === "gold" ? "text-yellow-500" : "text-gray-500"
                } text-sm sm:text-base md:text-lg`}
              />
            )}
            {opt === "sell" && (
              <AiFillGold
                className={`${
                  tab === "gold" ? "text-yellow-500" : "text-gray-500"
                } text-sm sm:text-base md:text-lg`}
              />
            )}
            {opt === "conversion" && (
              <MdCurrencyExchange
                className={`${
                  tab === "gold" ? "text-yellow-500" : "text-gray-500"
                } text-sm sm:text-base md:text-lg`}
              />
            )}
            {opt === "transfer" && (
              <GiTakeMyMoney className="text-green-500 text-sm sm:text-base md:text-lg" />
            )}
            <span className="capitalize">{opt}</span>
          </button>
        ))}
      </div>

      {/* Live Price */}
      <div className="flex justify-between bg-gray-100 p-3 sm:p-4 rounded-lg mb-5 text-sm">
        <div className="flex flex-col text-left">
          <span className="font-semibold text-gray-600">Live Price</span>
          <span className="text-blue-900 font-bold">₹ {livePrice}/g</span>
        </div>
        <div className="flex flex-col text-right">
          <span className="font-semibold text-gray-600">Purity</span>
          <span className="text-[#dfaf10]">{purity}</span>
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-blue-900 text-white rounded-xl p-4 sm:p-5 mb-4">
        {action === "transfer" ? (
          // Transfer UI
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Enter Friend's Phone Number"
              value={phone}
              maxLength={10}
              minLength={10}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 rounded-lg text-white focus:outline-none border border-white-300"
            />
            <div className="relative w-full sm:w-1/2">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl">
                ₹
              </span>
              <input
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                maxLength={7}
                className="text-2xl bg-transparent border-b border-gray-300 focus:outline-none w-full pl-5"
              />
            </div>
            <button
              className="w-full py-2 sm:py-3 rounded-lg bg-green-500 cursor-pointer text-white font-semibold hover:bg-green-600 transition"
              onClick={handleClick}
            >
              Transfer →
            </button>
          </div>
        ) : (
          // Buy / Sell / Conversion
          <div className="flex flex-col space-y-4">
            {/* Mode Toggle */}
            <div className="flex flex-col sm:flex-row justify-between text-sm mb-3 gap-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  checked={mode === "rupees"}
                  onChange={() => handleModeChange("rupees")}
                />
                <span>In Rupees</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  checked={mode === "grams"}
                  onChange={() => handleModeChange("grams")}
                />
                <span>In Grams</span>
              </label>
            </div>

            {/* Input + Output */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-1/2">
                {mode === "rupees" ? (
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 text-4xl ${
                      tab === "gold" ? "text-yellow-300" : ""
                    }`}
                  >
                    ₹
                  </span>
                ) : (
                  <span
                    className={`absolute right-0 top-1/2 -translate-y-1/2 text-xl ${
                      tab === "gold" ? "text-yellow-300" : ""
                    }`}
                  >
                    g
                  </span>
                )}
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder={mode === "rupees" ? "1000" : "0.0000"}
                  maxLength={mode === "rupees" ? 7 : 6}
                  className="text-xl sm:text-2xl bg-transparent border-b border-gray-300 focus:outline-none w-full pl-5"
                />
              </div>

              <p className="text-base sm:text-lg font-semibold text-yellow-300">
                {action === "conversion"
                  ? amount
                    ? mode === "rupees"
                      ? tab === "gold"
                        ? `${(parseFloat(amount) / prices.silver.price).toFixed(
                            4
                          )} g Silver`
                        : `${(parseFloat(amount) / prices.gold.price).toFixed(
                            4
                          )} g Gold`
                      : tab === "gold"
                      ? `${(
                          (parseFloat(amount) * livePrice) /
                          prices.silver.price
                        ).toFixed(4)} g Silver`
                      : `${(
                          (parseFloat(amount) * livePrice) /
                          prices.gold.price
                        ).toFixed(4)} g Gold`
                    : "0.0000 g"
                  : mode === "rupees"
                  ? grams
                    ? `${grams} g`
                    : "0.0000 g"
                  : rupees
                  ? `₹ ${rupees}`
                  : "₹ 0"}
              </p>
            </div>

            <button
              className="w-full py-2 sm:py-3 rounded-lg bg-blue-400 cursor-pointer text-white font-semibold hover:bg-blue-500 transition"
              onClick={handleClick}
            >
              {action === "conversion"
                ? `Convert ${
                    tab === "gold" ? "Gold → Silver" : "Silver → Gold"
                  }`
                : `${action.charAt(0).toUpperCase() + action.slice(1)} ${
                    tab === "gold" ? "Gold" : "Silver"
                  } →`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
