import LoginLogo1 from "@/components/icons/LoginLogo1";
import LoginLogo2 from "@/components/icons/LoginLogo2";

export default function login() {
  return (
    <main>
      <div className="flex justify-center">
        <div className="w-[732px] h-[1024px] inline-flex flex-col items-center gap-[40px]">
          <div className="flex p-[5.405px] items-center gap-[9.459px]">
            <LoginLogo1 />
            <LoginLogo2 />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-[24px] font-semibold">Welcome Back</h1>
            <p className="text-[16px] font-normal">
              Welcome back, Please enter your details
            </p>
          </div>
        </div>
        <div className="w-[708px] h-[1024px] bg-[#0166FF]"></div>
      </div>
    </main>
  );
}
