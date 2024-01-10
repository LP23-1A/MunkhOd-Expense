import PieChart from "./Chart/PieChart";

export default function Income2() {
  return (
    <main>
      <div className="h-[282px] w-[588px] rounded-[18px] bg-white">
        <div className="flex justify-between items-center gap-[8px] px-[24px] py-[16px]">
          <h1 className="text-[16px] font-semibold">Total Expenses</h1>
          <h1 className="text-[16px] font-normal text-[#6B7280]">
            Jun 1 - Nov 30
          </h1>
        </div>
        <hr />
        <div className="px-6 w-[200px] h-[200px]">
          <PieChart />
        </div>
      </div>
    </main>
  );
}
