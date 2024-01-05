import CurrencyIcon from "@/components/icons/CurrencyIcon";
import LoginLogo1 from "@/components/icons/LoginLogo1";
import LoginLogo2 from "@/components/icons/LoginLogo2";

export default function signup() {
  return (
    <main>
      <div className="w-full h-screen pt-[40px] pb-[399px]">
        <div className="flex flex-col items-center gap-[48px] justify-center">
          <div className="flex p-[5.405px] items-center gap-[9.459px]">
            <LoginLogo1 />
            <LoginLogo2 />
          </div>
          <ul class="steps steps-vertical lg:steps-horizontal">
            <li class="step step-[#0166FF]">Currency</li>
            <li class="step">Balance</li>
            <li class="step">Finish</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center pt-[141px] gap-4">
          <div className="bg-[#0166FF] rounded-[100px] p-2">
            <CurrencyIcon />
          </div>
          <h1 className="text-[24px] font-semibold">Select base Currency</h1>
          <div>
            <select class="select select-bordered w-[384px] h-[64px] bg-[#E5E7EB] p-4">
              <option className="text-[16px] font-semibold">
                MNT-Mongolian Tugrik
              </option>
              <option className="text-[16px] font-semibold">
                USD-American Dollar
              </option>
            </select>
          </div>
          <p className="w-[384px] text-[12px] font-normal">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one
          </p>
        </div>
        <div className="flex items-center justify-center pt-[32px]">
          <button className="flex items-center justify-center w-[384px] h-[48px] rounded-[20px] bg-[#0166FF] text-[#FFFFFF]">
            Confirm
          </button>
        </div>
      </div>
    </main>
  );
}
