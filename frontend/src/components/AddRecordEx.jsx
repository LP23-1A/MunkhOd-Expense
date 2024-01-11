import CloseIcon from "./icons/Close";

export default function AddRecordEx() {
  return (
    <main>
      <div className="h-[68px] w-[792px] rounded-[18px] bg-white">
        <div className="flex items-center justify-between gap-[8px] px-[24px] py-[20px] ">
          <h1 className="text-[20px] font-semibold">Last Records</h1>
          <button>
            <CloseIcon />
          </button>
        </div>
        <hr />
        <div className="w-[396px] h-[444px] items-center flex flex-col gap-5">
          <div className="flex bg-white px-6 pt-5 gap-1">
            <a className="btn btn-sm w-[172px] h-[40px] bg-[#0166FF] px-[12px] rounded-[20px] text-[16px] text-white gap-1 font-normal">
              Expense
            </a>
            <a className="btn btn-sm w-[172px] h-[40px] bg-[#F3F4F6] px-[12px] rounded-[20px] text-[16px] gap-1 font-normal">
              Income
            </a>
          </div>
          <div>
            <input
              type="text"
              placeholder="000.00"
              className="input input-bordered w-[348px] h-[76px] max-w-xs px-4 py-3"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
