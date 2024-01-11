import ArrowDrop from "./icons/ArrowDrop";
import Eve from "./icons/Eve";
import LeadIcon from "./icons/LeadIcon";
import PlusIcon from "./icons/PlusIcon";

export default function Records2() {
  return (
    <main className="w-full pt-6">
      <div className="h-[1100px] w-[282px] rounded-[18px] bg-white">
        <div className="flex flex-col gap-6 items-center px-[16px] py-[24px] ">
          <div className="w-full">
            <h1 className="text-[16px] font-semibold">Records</h1>
          </div>
          <div className="flex flex-col gap-6">
            <a className="btn btn-sm w-[250px] bg-[#0166FF] px-[12px] rounded-[20px] text-[16px] text-white gap-1 font-normal">
              <LeadIcon />
              Add
            </a>
            <input
              type="text"
              placeholder="Search"
              class="input input-bordered w-[250px] h-[24px] md:w-auto"
            />
            <div className="flex flex-col gap-4">
              <p className="text-[16px] font-semibold">Types</p>
              <div>
                <div className="flex">
                  <label className="label cursor-pointer gap-4">
                    <input
                      type="radio"
                      name="theme-radios"
                      className="radio theme-controller"
                      value="default"
                    />
                    <span className="text-[16px] font-normal">All</span>
                  </label>
                </div>
                <div className="flex">
                  <label className="label cursor-pointer gap-4">
                    <input
                      type="radio"
                      name="theme-radios"
                      className="radio theme-controller"
                      value="retro"
                    />
                    <span className="text-[16px] font-normal">Income</span>
                  </label>
                </div>
                <div className="flex">
                  <label className="label cursor-pointer gap-4">
                    <input
                      type="radio"
                      name="theme-radios"
                      className="radio theme-controller"
                      value="cyberpunk"
                    />
                    <span className="text-[16px] font-normal">Expense</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="text-[16px] font-semibold">Category</p>
                <button>Clear</button>
              </div>
              <ul className="menu flex flex-col w-[250px] h-[32px] gap-2">
                <li className="flex gap-2">
                  <div className="flex w-full justify-between">
                    <div className="flex items-center justify-between gap-2">
                      <Eve />
                      <a className="text-[16px] font-normal">Food & Drinks</a>
                    </div>
                    <ArrowDrop />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex items-center justify-between gap-2">
                      <Eve />
                      <a className="text-[16px] font-normal">Shopping</a>
                    </div>
                    <ArrowDrop />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex items-center justify-between gap-2">
                      <Eve />
                      <a className="text-[16px] font-normal">Housing</a>
                    </div>
                    <ArrowDrop />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex items-center justify-between gap-2">
                      <Eve />
                      <a className="text-[16px] font-normal">Transportation</a>
                    </div>
                    <ArrowDrop />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex items-center justify-between gap-2">
                      <Eve />
                      <a className="text-[16px] font-normal">Vehicle</a>
                    </div>
                    <ArrowDrop />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex items-center justify-between gap-2">
                      <Eve />
                      <a className="text-[16px] font-normal">
                        Life & Entertainment
                      </a>
                    </div>
                    <ArrowDrop />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex items-center justify-between gap-2">
                      <Eve />
                      <a className="text-[16px] font-normal">
                        Communication, PC
                      </a>
                    </div>
                    <ArrowDrop />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex items-center justify-between gap-2">
                      <Eve />
                      <a className="text-[16px] font-normal">
                        Financial expenses
                      </a>
                    </div>
                    <ArrowDrop />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex items-center justify-between gap-2">
                      <Eve />
                      <a className="text-[16px] font-normal">Investments</a>
                    </div>
                    <ArrowDrop />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex items-center justify-between gap-2">
                      <Eve />
                      <a className="text-[16px] font-normal">Income</a>
                    </div>
                    <ArrowDrop />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex items-center justify-between gap-2">
                      <Eve />
                      <a className="text-[16px] font-normal">Others</a>
                    </div>
                    <ArrowDrop />
                  </div>
                  <a className="btn btn-sm w-[250px] bg-white px-[12px] rounded-[20px] text-[16px] gap-1 font-normal">
                    <PlusIcon />
                    Add Category
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 pt-[480px]">
              <div className="flex justify-between">
                <p className="text-[16px] font-semibold">Amount Range</p>
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="0"
                  className="input input-bordered w-[114.5px] h-[48px] max-w-xs"
                />
                <input
                  type="text"
                  placeholder="1000"
                  className="input input-bordered w-[114.5px] h-[48px] max-w-xs"
                />
              </div>
              <input
                type="range"
                min={0}
                max="1000"
                value="0"
                className="range range-info range-xs"
              />
              <div className="flex justify-between">
                <p>0</p>
                <p>1000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
