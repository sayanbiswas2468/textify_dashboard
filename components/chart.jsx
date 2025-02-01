"use client"

import { useState } from "react"
import { format } from "date-fns"
import { ChevronDown, Download, Share2 } from "lucide-react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"



export function LoanChart({
  data,
  title = "Disbursed Loans",
  className,
  onYearChange,
  onShare,
  onDownload,
}) {
  const [selectedYear, setSelectedYear] = useState("2025")
  const [range, setRange] = useState([0, 100])

  const totalAmount = data.reduce((sum, item) => sum + item.amount, 0)

  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const filteredData = data.slice(Math.floor(data.length * (range[0] / 100)), Math.ceil(data.length * (range[1] / 100)))

  const handleYearChange = (year) => {
    setSelectedYear(year)
    onYearChange?.(year)
  }

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div>
          <CardTitle className="flex items-center gap-2">
            {title}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 text-base">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Daily</DropdownMenuItem>
                <DropdownMenuItem>Weekly</DropdownMenuItem>
                <DropdownMenuItem>Monthly</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardTitle>
          <p className="text-sm text-muted-foreground">Total: {formatAmount(totalAmount)}</p>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8">
                {selectedYear} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleYearChange("2022")}>2022</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleYearChange("2023")}>2023</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="sm" className="h-8" onClick={onShare}>
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="h-8" onClick={onDownload}>
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={filteredData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0066FF" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#0066FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                tickFormatter={(date) => format(new Date(date), "MMM")}
                tickLine={false}
                axisLine={false}
                dy={10}
              />
              <YAxis
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                tickLine={false}
                axisLine={false}
                dx={-10}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className=" bg-[#020B2C] p-2 text-white ">
                        <div className="text-sm font-semibold">{formatAmount(payload[0].value)}</div>
                        <div className="text-xs opacity-75">
                          {format(new Date(payload[0].payload.date), "MMM yyyy")}
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="#0066FF"
                strokeWidth={2}
                fill="url(#colorAmount)"
                animationDuration={2000}
                animationEasing="ease-in-out"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 px-2">
          <Slider
            defaultValue={[0, 100]}
            max={100}
            step={1}
            value={range}
            onValueChange={setRange}
            className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
          />
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <div>Apr-Dec</div>
            <div>{selectedYear}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

