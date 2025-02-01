'use client'
import { cn } from "@/lib/utils"
import {
    BarChart3,
    LayoutDashboard,
    LogOut,
    Settings,
    Users
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const manageLinks = [
    {
        title: "Home",
        icon: LayoutDashboard,
        href: "/",
        variant: "default",
    },
    
    {
        title: "Analytics",
        icon: BarChart3,
        href: "/analytics",
        variant: "ghost",
    },
]

const preferenceLinks = [
    {
        title: "Settings",
        icon: Settings,
        href: "/settings",
        variant: "ghost",
    },
    {
        title: "Users",
        icon: Users,
        href: "/users",
        variant: "ghost",
    },
    
    {
        title: "Log out",
        icon: LogOut,
        href: "/logout",
        variant: "ghost",
    },
]

export function DashboardNav() {
    const pathname = usePathname()

    return (
        <div className="w-64 min-h-screen bg-[#020B2C] text-white p-6">
            <div className="space-y-4">
                <div className="mb-12">
                    <h2 className="text-xl font-semibold">Texitfy Dashboard</h2>
                </div>
                <div className="space-y-1">
                    <h3 className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-2 px-2">Manage</h3>
                    <nav className="flex flex-col space-y-1">
                        {manageLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                                    pathname === link.href ? "bg-white text-black" : "text-gray-400 hover:text-white hover:bg-white/5",
                                )}
                            >
                                <link.icon className="w-4 h-4" />
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="space-y-1">
                    <h3 className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-2 px-2">Preference</h3>
                    <nav className="flex flex-col space-y-1">
                        {preferenceLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                                    pathname === link.href ? "bg-white text-black" : "text-gray-400 hover:text-white hover:bg-white/5",
                                )}
                            >
                                <link.icon className="w-4 h-4" />
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

