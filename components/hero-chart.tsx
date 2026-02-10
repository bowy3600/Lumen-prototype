"use client"

import React from "react"

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import {
  TrendingUp,
  Users,
  FileCheck,
  Receipt,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
} from "lucide-react"

const revenueData = [
  { month: "Jan", revenue: 42 },
  { month: "Fev", revenue: 48 },
  { month: "Mar", revenue: 55 },
  { month: "Avr", revenue: 67 },
  { month: "Mai", revenue: 78 },
  { month: "Jun", revenue: 95 },
]

const tvaData = [
  { q: "T1", collectee: 18, deductible: 12 },
  { q: "T2", collectee: 22, deductible: 14 },
  { q: "T3", collectee: 28, deductible: 16 },
  { q: "T4", collectee: 34, deductible: 19 },
]

const clients = [
  { name: "TechVision SAS", type: "SAS", status: "a-jour", ca: "420k" },
  { name: "BioLab SARL", type: "SARL", status: "a-jour", ca: "185k" },
  { name: "UrbanDev", type: "SCI", status: "en-cours", ca: "92k" },
  { name: "FoodCraft", type: "EURL", status: "a-jour", ca: "310k" },
]

export function HeroDashboard() {
  return (
    <div className="flex h-full w-full flex-col gap-3 overflow-hidden bg-background p-2 md:p-0">
      {/* Top row - KPI cards */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
        <KPICard
          icon={<TrendingUp className="h-3.5 w-3.5 md:h-4 md:w-4" />}
          label="CA Global"
          value="1.2M"
          suffix="EUR"
          trend="+18.2%"
          up
        />
        <KPICard
          icon={<Users className="h-3.5 w-3.5 md:h-4 md:w-4" />}
          label="Clients actifs"
          value="147"
          trend="+12"
          up
        />
        <KPICard
          icon={<FileCheck className="h-3.5 w-3.5 md:h-4 md:w-4" />}
          label="DSN deposees"
          value="98%"
          trend="A jour"
          up
        />
        <KPICard
          icon={<Receipt className="h-3.5 w-3.5 md:h-4 md:w-4" />}
          label="Factures"
          value="2,340"
          trend="+340"
          up
        />
      </div>

      {/* Middle row - Charts */}
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-2 md:grid-cols-5 md:gap-3">
        {/* Revenue chart - takes more space */}
        <div className="flex flex-col rounded-xl border border-border/40 bg-background p-3 md:col-span-3 md:p-4">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground md:text-xs">
                Evolution du chiffre d{"'"}affaires
              </p>
              <p className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                +126%
              </p>
            </div>
            <span className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary md:text-xs">
              <ArrowUpRight className="h-3 w-3" />
              En hausse
            </span>
          </div>
          <div className="min-h-0 flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData}
                margin={{ top: 5, right: 0, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="gradientDashRevenue"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#4242cd"
                      stopOpacity={0.25}
                    />
                    <stop
                      offset="100%"
                      stopColor="#4242cd"
                      stopOpacity={0.02}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(214 32% 91%)"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "hsl(215 16% 47%)" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "hsl(215 16% 47%)" }}
                />
                <Tooltip
                  contentStyle={{
                    background: "hsl(0 0% 100%)",
                    border: "1px solid hsl(214 32% 91%)",
                    borderRadius: "10px",
                    fontSize: "11px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                  }}
                  formatter={(value: number) => [`${value}k EUR`, "CA"]}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#4242cd"
                  strokeWidth={2.5}
                  fill="url(#gradientDashRevenue)"
                  dot={false}
                  activeDot={{
                    r: 4,
                    fill: "#4242cd",
                    stroke: "#fff",
                    strokeWidth: 2,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* TVA bar chart */}
        <div className="hidden flex-col rounded-xl border border-border/40 bg-background p-3 md:col-span-2 md:flex md:p-4">
          <div className="mb-2">
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground md:text-xs">
              TVA trimestrielle
            </p>
            <p className="text-lg font-bold tracking-tight text-foreground md:text-xl">
              34k EUR
            </p>
          </div>
          <div className="min-h-0 flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={tvaData}
                margin={{ top: 5, right: 0, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(214 32% 91%)"
                  vertical={false}
                />
                <XAxis
                  dataKey="q"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "hsl(215 16% 47%)" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "hsl(215 16% 47%)" }}
                />
                <Tooltip
                  contentStyle={{
                    background: "hsl(0 0% 100%)",
                    border: "1px solid hsl(214 32% 91%)",
                    borderRadius: "10px",
                    fontSize: "11px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                  }}
                />
                <Bar
                  dataKey="collectee"
                  fill="#4242cd"
                  radius={[4, 4, 0, 0]}
                  name="Collectee"
                />
                <Bar
                  dataKey="deductible"
                  fill="#b8b8e8"
                  radius={[4, 4, 0, 0]}
                  name="Deductible"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom row - Client table */}
      <div className="hidden rounded-xl border border-border/40 bg-background p-3 md:block md:p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground md:text-xs">
            Portefeuille clients
          </p>
          <span className="text-[10px] text-muted-foreground md:text-xs">
            4 sur 147
          </span>
        </div>
        <div className="overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border/40 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                <th className="pb-2 font-medium">Client</th>
                <th className="pb-2 font-medium">Forme</th>
                <th className="pb-2 font-medium">Statut</th>
                <th className="pb-2 text-right font-medium">CA</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => (
                <tr
                  key={c.name}
                  className="border-b border-border/20 last:border-0"
                >
                  <td className="py-1.5 font-medium text-foreground">
                    {c.name}
                  </td>
                  <td className="py-1.5 text-muted-foreground">{c.type}</td>
                  <td className="py-1.5">
                    {c.status === "a-jour" ? (
                      <span className="inline-flex items-center gap-1 text-primary">
                        <CheckCircle2 className="h-3 w-3" />A jour
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-amber-500">
                        <Clock className="h-3 w-3" />
                        En cours
                      </span>
                    )}
                  </td>
                  <td className="py-1.5 text-right font-medium text-foreground">
                    {c.ca}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function KPICard({
  icon,
  label,
  value,
  suffix,
  trend,
  up,
}: {
  icon: React.ReactNode
  label: string
  value: string
  suffix?: string
  trend: string
  up: boolean
}) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-border/40 bg-background p-2.5 md:p-3">
      <div className="flex items-center justify-between">
        <span className="flex items-center justify-center rounded-lg bg-primary/10 p-1.5 text-primary">
          {icon}
        </span>
        <span
          className={`flex items-center gap-0.5 text-[10px] font-semibold md:text-xs ${up ? "text-primary" : "text-destructive"}`}
        >
          {up ? (
            <ArrowUpRight className="h-3 w-3" />
          ) : (
            <ArrowDownRight className="h-3 w-3" />
          )}
          {trend}
        </span>
      </div>
      <p className="text-[10px] text-muted-foreground md:text-xs">{label}</p>
      <p className="text-base font-bold tracking-tight text-foreground md:text-lg">
        {value}
        {suffix && (
          <span className="ml-0.5 text-xs font-normal text-muted-foreground">
            {suffix}
          </span>
        )}
      </p>
    </div>
  )
}
