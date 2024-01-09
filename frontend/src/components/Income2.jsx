import PieChart from "./Chart/PieChart";

export default function income1() {
  return (
    <main>
      <div className="h-[282px] w-[588px] rounded-[18px] bg-white">
        <div className="flex items-center gap-[8px] px-[24px] py-[16px] ">
          <h1 className="text-[16px] font-semibold">Total Expenses</h1>
        </div>
        <div className="px-6 w-[200px] h-[200px]">
          <PieChart />
        </div>
      </div>
    </main>
  );
}
