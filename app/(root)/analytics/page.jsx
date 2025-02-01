'use client'
import { LoanChart } from "@/components/chart"

const page = () => {
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
  return (
    <div className="mt-20 border-4 rounded-2xl ">
      <div className="">

        <LoanChart
          data={loanData}
          onShare={() => console.log("Share clicked")}
          onDownload={() => console.log("Download clicked")}
          onYearChange={(year) => console.log("Year changed:", year)}
          className="w-full h-full border-none shadow-none"
        />
      </div>
    </div>
  )
}
export default page