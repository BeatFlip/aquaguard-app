import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useTheme } from "next-themes";

const data = [
  { day: "Mon", usage: 45, risk: 20 },
  { day: "Tue", usage: 52, risk: 25 },
  { day: "Wed", usage: 48, risk: 22 },
  { day: "Thu", usage: 61, risk: 35 },
  { day: "Fri", usage: 55, risk: 28 },
  { day: "Sat", usage: 67, risk: 42 },
  { day: "Sun", usage: 59, risk: 30 },
];

export function WaterUsageChart() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#e5e7eb"} />
        <XAxis dataKey="day" stroke={isDark ? "#9ca3af" : "#6b7280"} />
        <YAxis stroke={isDark ? "#9ca3af" : "#6b7280"} />
        <Tooltip
          contentStyle={{
            backgroundColor: isDark ? "#1f2937" : "white",
            border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
            borderRadius: "8px",
            color: isDark ? "#f9fafb" : "#111827",
          }}
        />
        <Legend />
        <Area
          type="monotone"
          dataKey="usage"
          stroke="#3b82f6"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorUsage)"
          name="Water Usage (gal)"
        />
        <Area
          type="monotone"
          dataKey="risk"
          stroke="#f59e0b"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorRisk)"
          name="Leak Risk Score"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
