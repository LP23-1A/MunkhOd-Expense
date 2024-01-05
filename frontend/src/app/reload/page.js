import LoginLogo11 from "@/components/icons/LoginLogo11";
import LoginLogo21 from "@/components/icons/LoginLogo21";

export default function reload() {
  return (
    <main>
      <div className="flex justify-center w-full h-screen">
        <div className="flex-col items-center gap-[48px] flex justify-center">
          <div className="flex p-[5.405px] items-center gap-[9.459px]">
            <LoginLogo11 />
            <LoginLogo21 />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <span class="loading loading-spinner loading-lg text-[#0166FF]"></span>
            <p className="text-[16px] font-semibold">Түр хүлээнэ үү...</p>
          </div>
        </div>
      </div>
    </main>
  );
}
