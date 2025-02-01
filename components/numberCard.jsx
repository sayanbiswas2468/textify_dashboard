"use client"

import { useEffect, useState } from "react"
import { MoreVertical } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"


export function MetricCard({
    title,
    value,
    className,
    duration = 2000, 
    actions = [
        { label: "View details", onClick: () => { } },
        { label: "Export data", onClick: () => { } },
    ],
}) {
    const [displayValue, setDisplayValue] = useState(0)
    const targetValue = typeof value === "number" ? value : Number.parseInt(value.replace(/[^0-9]/g, "")) || 0

    useEffect(() => {
        let startTimestamp= null
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = timestamp - startTimestamp

            const currentValue = Math.min(targetValue * (progress / duration), targetValue)

            setDisplayValue(Math.floor(currentValue))

            if (progress < duration) {
                window.requestAnimationFrame(step)
            } else {
                setDisplayValue(targetValue)
            }
        }

        window.requestAnimationFrame(step)
    }, [targetValue, duration])

    const formattedValue = new Intl.NumberFormat().format(displayValue)

    return (
        <Card className={cn("bg-slate-50", className)}>
            <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm text-muted-foreground mb-1">{title}</p>
                        <p className="text-3xl font-semibold tabular-nums">{formattedValue}</p>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="hover:bg-slate-100 rounded-full p-2">
                            <MoreVertical className="h-4 w-4 text-gray-500" />
                            <span className="sr-only">Open menu</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {actions.map((action, index) => (
                                <DropdownMenuItem key={index} onClick={action.onClick}>
                                    {action.label}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardContent>
        </Card>
    )
}

