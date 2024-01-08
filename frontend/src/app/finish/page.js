import CheckIcon from "@/components/icons/CheckIcon";
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
            <CheckIcon />
          </div>
          <h1 className="text-[24px] font-semibold">Good job!</h1>
          <p className="flex  w-[384px] text-[16px] font-normal text-center">
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </p>
        </div>
        <div className="flex items-center justify-center pt-[32px]">
          <button className="flex items-center justify-center w-[384px] h-[48px] rounded-[20px] bg-[#0166FF] text-[#FFFFFF]">
            Go to Dashboard
          </button>
        </div>
      </div>
    </main>
  );
}
