import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-3">
        <p className="text-[#8888aa] text-xs mb-1">{label}</p>
        <p className="text-[#00e676] font-mono font-bold text-sm">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const WalletChart = ({ data = [] }) => {
  return (
    <div className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-2xl p-6">
      <h2 className="text-white font-semibold text-xl mb-1">
        Overall Wallet Chart
      </h2>
      <p className="text-[#8888aa] text-xs mb-6">
        Showing your wallet balances over time
      </p>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 4, right: 0, left: -20, bottom: 0 }} barSize={8} barGap={0} barCategoryGap="20%">
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#2a2a2a"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 10, fill: "#555570" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#555570" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(255,255,255,0.03)" }}
          />
          <Bar dataKey="value" fill="#00e676" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WalletChart;
