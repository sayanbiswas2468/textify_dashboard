"use client"
import { MoreVertical } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"



export function RatioChart({ title, data, className, onShare, onExport }) {
    const total = data.reduce((sum, item) => sum + item.count, 0)

    return (
        <Card className={className} >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-medium">{title}</CardTitle>
                <DropdownMenu>
                    <DropdownMenuTrigger className="hover:bg-slate-100 rounded-full p-2">
                        <MoreVertical className="h-4 w-4 text-gray-500" />
                        <span className="sr-only">Open menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={onShare}>Share</DropdownMenuItem>
                        <DropdownMenuItem onClick={onExport}>Export data</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent>
                <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={0}
                                dataKey="value"
                                animationBegin={0}
                                animationDuration={1500}
                                animationEasing="ease-out"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="space-y-3">
                    {data.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                                <span className="text-sm text-gray-600">{item.name}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium">{new Intl.NumberFormat().format(item.count)}</span>
                                <span className="text-sm text-gray-500 w-[40px]">{Math.round((item.count / total) * 100)}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

