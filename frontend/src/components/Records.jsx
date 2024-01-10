import House from "./icons/House";

export default function Records() {
  return (
    <main>
      <div className="h-[282px] w-[1200px] rounded-[18px] bg-white">
        <div className="flex items-center gap-[8px] px-[24px] py-[16px] ">
          <h1 className="text-[16px] font-semibold">Last Records</h1>
        </div>
        <hr />
        <div className="flex">
          <House />
        </div>
      </div>
    </main>
  );
}
