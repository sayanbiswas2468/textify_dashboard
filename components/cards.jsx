import React from "react"
import { MoreVertical } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"



export function StatCard({ icon, title, value, unitNumber, className }) {
    return (
        <Card className={`bg-slate-50 ${className} w-[12vw] border-none`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="bg-black rounded-full p-2 w-fit">{icon}</div>
                <DropdownMenu>
                    <DropdownMenuTrigger className="hover:bg-slate-100 rounded-full p-2">
                        <MoreVertical className="h-4 w-4 text-gray-500" />
                        <span className="sr-only">Open menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Export data</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent>
                <div className="text-sm text-muted-foreground mb-1">{title}</div>
                <div className="text-2xl font-bold">
                    {typeof value === "number"
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        }).format(value)
                        : value}
                </div>
                {unitNumber && (
                    <div className="text-sm text-muted-foreground mt-1">
                        Unit Number: {new Intl.NumberFormat().format(Number(unitNumber))}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

