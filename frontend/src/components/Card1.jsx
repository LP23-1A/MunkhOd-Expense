import LoginLogo13 from "./icons/LoginLogo13";
import LoginLogo22 from "./icons/LoginLogo22";
import Base from "./icons/Base";
import BaseIcon from "./icons/BaseIcon";

export default function Card1() {
  return (
    <main>
      <div className="h-[219.659px] w-[384.124px] rounded-[18px] bg-[#1C64F2]">
        <div className="flex p-8">
          <div className="inline-flex gap-[8.23px] p-[4.703px] items-center">
            <LoginLogo13 />
            <LoginLogo22 />
          </div>
        </div>
        <div className="inline-flex flex-col items-start p-10">
          <p className="text-base font-normal opacity-50 text-center text-[#FFFFFF]">
            Cash
          </p>
          <p className="text-base font-semibold text-center text-[#FFFFFF]">
            10,000,00
          </p>
        </div>
        <div className="inline-flex absolute object-right-bottom opacity-50 top-[140px]">
          <Base />
        </div>
        <div className="nline-flex absolute left-[420px] top-[250px]">
          <BaseIcon />
        </div>
      </div>
    </main>
  );
}
