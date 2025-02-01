'use client'
import { DashboardNav } from "@/components/dashboard-nav"
import { DashboardHeader } from "@/components/dashboard-header"
import { StatCard } from "@/components/cards"
import { Coins, Users, FileText, PiggyBank } from "lucide-react"
import { MetricCard } from "@/components/numberCard"
import { LoanChart } from "@/components/chart"
import { RatioChart } from "@/components/pieChart"
const Home = () => {

    const loanData = [
        { date: "2022-04-01", amount: 380000 },
        { date: "2022-05-01", amount: 200000 },
        { date: "2022-06-01", amount: 580000 },
        { date: "2022-07-01", amount: 480000 },
        { date: "2022-08-01", amount: 420000 },
        { date: "2022-09-01", amount: 380000 },
        { date: "2022-10-01", amount: 320000 },
        { date: "2022-11-01", amount: 500000 },
        { date: "2022-12-01", amount: 520000 },
    ]
    const userRatioData = [
        {
            name: "Male",
            value: 60,
            count: 6472,
            color: "#0066FF",
        },
        {
            name: "Female",
            value: 40,
            count: 4314,
            color: "#99C0FF",
        },
    ]
    return (
        <div>

            <main className="p-6">
                <h1 className="text-2xl font-semibold mb-6">Home</h1>
                <div className=" flex justify-evenly">
                    <StatCard
                        icon={<Coins className="h-4 w-4 text-white" />}
                        title="Disbursed Loans"
                        value={10001168}
                        unitNumber={1000}
                        className="bg-[#e8efff] "
                    />
                    <StatCard icon={<Users className="h-4 w-4 text-white" />} title="Active Users" value={2453}
                        className="bg-[#e4ffe0]"
                    />
                    <StatCard
                        icon={<FileText className="h-4 w-4 text-white" />}
                        title="Total Applications"
                        value={3214}
                        unitNumber={1205}
                        className="bg-[#ffe0e0]  "

                    />
                    <StatCard
                        icon={<PiggyBank className="h-4 w-4 text-white" />}
                        title="Total Savings"
                        value={5234789}
                        unitNumber={892}
                        className="bg-[#fffce0]"
                    />
                </div>
            </main>
            <div className="flex justify-evenly ">
                <LoanChart
                    data={loanData}
                    onShare={() => console.log("Share clicked")}
                    onDownload={() => console.log("Download clicked")}
                    onYearChange={(year) => console.log("Year changed:", year)}
                    className="w-[60%] border-none shadow-none"
                />
                <div className=" flex flex-col justify-evenly ">
                    <MetricCard title="Active users" value={10786}
                        duration={1000}
                        className="h-[100px] border-none shadow-none"
                    />
                    <MetricCard
                        title="Total Revenue"
                        value={50234}
                        duration={1000}
                        className="h-[100px] border-none shadow-none"
                    />
                    <MetricCard
                        title="Amount Due"
                        value={50000}
                        duration={1000}
                        className="h-[100px] border-none shadow-none"
                    />
                </div>
                <RatioChart
                    title="Active users Ratio"
                    data={userRatioData}
                    onShare={() => console.log("Share clicked")}
                    onExport={() => console.log("Export clicked")}
                    className='shadow-none border-none bg-slate-50 h-[55vh] mt-10'
                />

            </div>
        </div>


    )
}
export default Home