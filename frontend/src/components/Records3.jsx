import FoodIcon from "./icons/FoodIcon";
import House from "./icons/House";

export default function Records3() {
  return (
    <main className="flex flex-col gap-6">
      <div className="flex w-[894px] justify-between">
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="btn">Last 30 Days</button>
          <button className="join-item btn">»</button>
        </div>
        <div>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Newest fisrt
            </option>
            <option>Old</option>
            <option>Last</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-3 h-[48px] rounded-xl bg-white border">
        <div className="flex gap-4">
          <input type="checkbox" className="checkbox" />
          <div className="text-[16px] font-normal">Select All</div>
        </div>
        <div className="flex">
          <p className="text-[16px] font-normal text-[#94A3B8]">-</p>
          <p className="text-[16px] font-normal text-[#94A3B8]">35,500₮</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p>Today</p>
        <div className="flex items-center justify-between px-6 py-3 h-[64px] rounded-xl bg-white border">
          <div className="flex gap-4 items-center">
            <input type="checkbox" className="checkbox" />
            <House />
            <div className="flex flex-col items-start">
              <p className="text-[16px] font-normal">Lending & Renting</p>
              <p className="text-[12px] font-normal">14:00</p>
            </div>
          </div>
          <div className="flex">
            <p className="text-[16px] font-semibold text-[#23E01F]">-</p>
            <p className="text-[16px] font-semibold text-[#23E01F]">1,000₮</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 py-3 h-[64px] rounded-xl bg-white border">
          <div className="flex gap-4 items-center">
            <input type="checkbox" className="checkbox" />
            <FoodIcon />
            <div className="flex flex-col items-start">
              <p className="text-[16px] font-normal">Food & Drinks</p>
              <p className="text-[12px] font-normal">14:00</p>
            </div>
          </div>
          <div className="flex">
            <p className="text-[16px] font-semibold text-[#F54949]">-</p>
            <p className="text-[16px] font-semibold text-[#F54949]">1,000₮</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 py-3 h-[64px] rounded-xl bg-white border">
          <div className="flex gap-4 items-center">
            <input type="checkbox" className="checkbox" />
            <FoodIcon />
            <div className="flex flex-col items-start">
              <p className="text-[16px] font-normal">Food & Drinks</p>
              <p className="text-[12px] font-normal">14:00</p>
            </div>
          </div>
          <div className="flex">
            <p className="text-[16px] font-semibold text-[#EAB308]">-</p>
            <p className="text-[16px] font-semibold text-[#EAB308]">1,000₮</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 py-3 h-[64px] rounded-xl bg-white border">
          <div className="flex gap-4 items-center">
            <input type="checkbox" className="checkbox" />
            <FoodIcon />
            <div className="flex flex-col items-start">
              <p className="text-[16px] font-normal">Food & Drinks</p>
              <p className="text-[12px] font-normal">14:00</p>
            </div>
          </div>
          <div className="flex">
            <p className="text-[16px] font-semibold text-[#EAB308]">-</p>
            <p className="text-[16px] font-semibold text-[#EAB308]">1,000₮</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 py-3 h-[64px] rounded-xl bg-white border">
          <div className="flex gap-4 items-center">
            <input type="checkbox" className="checkbox" />
            <FoodIcon />
            <div className="flex flex-col items-start">
              <p className="text-[16px] font-normal">Food & Drinks</p>
              <p className="text-[12px] font-normal">14:00</p>
            </div>
          </div>
          <div className="flex">
            <p className="text-[16px] font-semibold text-[#EAB308]">-</p>
            <p className="text-[16px] font-semibold text-[#EAB308]">1,000₮</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p>Yesterday</p>
        <div className="flex items-center justify-between px-6 py-3 h-[64px] rounded-xl bg-white border">
          <div className="flex gap-4 items-center">
            <input type="checkbox" className="checkbox" />
            <FoodIcon />
            <div className="flex flex-col items-start">
              <p className="text-[16px] font-normal">Food & Drinks</p>
              <p className="text-[12px] font-normal">14:00</p>
            </div>
          </div>
          <div className="flex">
            <p className="text-[16px] font-semibold text-[#EAB308]">-</p>
            <p className="text-[16px] font-semibold text-[#EAB308]">1,000₮</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 py-3 h-[64px] rounded-xl bg-white border">
          <div className="flex gap-4 items-center">
            <input type="checkbox" className="checkbox" />
            <FoodIcon />
            <div className="flex flex-col items-start">
              <p className="text-[16px] font-normal">Food & Drinks</p>
              <p className="text-[12px] font-normal">14:00</p>
            </div>
          </div>
          <div className="flex">
            <p className="text-[16px] font-semibold text-[#EAB308]">-</p>
            <p className="text-[16px] font-semibold text-[#EAB308]">1,000₮</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 py-3 h-[64px] rounded-xl bg-white border">
          <div className="flex gap-4 items-center">
            <input type="checkbox" className="checkbox" />
            <FoodIcon />
            <div className="flex flex-col items-start">
              <p className="text-[16px] font-normal">Food & Drinks</p>
              <p className="text-[12px] font-normal">14:00</p>
            </div>
          </div>
          <div className="flex">
            <p className="text-[16px] font-semibold text-[#EAB308]">-</p>
            <p className="text-[16px] font-semibold text-[#EAB308]">1,000₮</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 py-3 h-[64px] rounded-xl bg-white border">
          <div className="flex gap-4 items-center">
            <input type="checkbox" className="checkbox" />
            <FoodIcon />
            <div className="flex flex-col items-start">
              <p className="text-[16px] font-normal">Food & Drinks</p>
              <p className="text-[12px] font-normal">14:00</p>
            </div>
          </div>
          <div className="flex">
            <p className="text-[16px] font-semibold text-[#EAB308]">-</p>
            <p className="text-[16px] font-semibold text-[#EAB308]">1,000₮</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 py-3 h-[64px] rounded-xl bg-white border">
          <div className="flex gap-4 items-center">
            <input type="checkbox" className="checkbox" />
            <FoodIcon />
            <div className="flex flex-col items-start">
              <p className="text-[16px] font-normal">Food & Drinks</p>
              <p className="text-[12px] font-normal">14:00</p>
            </div>
          </div>
          <div className="flex">
            <p className="text-[16px] font-semibold text-[#EAB308]">-</p>
            <p className="text-[16px] font-semibold text-[#EAB308]">1,000₮</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 py-3 h-[64px] rounded-xl bg-white border">
          <div className="flex gap-4 items-center">
            <input type="checkbox" className="checkbox" />
            <FoodIcon />
            <div className="flex flex-col items-start">
              <p className="text-[16px] font-normal">Food & Drinks</p>
              <p className="text-[12px] font-normal">14:00</p>
            </div>
          </div>
          <div className="flex">
            <p className="text-[16px] font-semibold text-[#EAB308]">-</p>
            <p className="text-[16px] font-semibold text-[#EAB308]">1,000₮</p>
          </div>
        </div>
      </div>
    </main>
  );
}
