import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Bell } from "lucide-react"
import Logo from '../public/globe.svg'
export function DashboardHeader() {
    return (
        <header className="shadow-lg rounded-2xl">
            <div className="flex h-16 items-center px-6">
                <div className="flex flex-1 justify-center gap-4">
                    <Input type="search" placeholder="Search..." className="md:w-[300px] lg:w-[400px]" />
                </div>
                <div className="flex items-center gap-4">
                    <button className="relative">
                        <Bell className="w-5 h-5 text-gray-500" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                    </button>
                    <div className="flex items-center gap-4">
                        <div className="text-sm text-right">
                            <div className="font-medium">Sayan Biswas</div>
                            <div className="text-xs text-gray-500">Admin</div>
                        </div>
                        <Avatar>
                            <AvatarImage src={Logo} />
                            <AvatarFallback>SB</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </header>
    )
}

