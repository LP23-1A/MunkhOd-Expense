import Navbar from "@/components/Navbar";
import Card1 from "@/components/Card1";
import Card2 from "@/components/Card2";
import Card3 from "@/components/Card3";
import Income1 from "@/components/Income1";
import Income2 from "@/components/Income2";
import Records1 from "@/components/Records1";

export default function signup() {
  return (
    <main className="w-full">
      <div className="py-[6px] px-[112px]">
        <Navbar />
      </div>
      <div className="h-[1148px] bg-[#F3F4F6] m-auto w-full flex flex-col items-center">
        <div className="flex gap-7 px-[120px] py-8">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
        <div className="flex gap-8 px-[120px]">
          <Income1 />
          <Income2 />
        </div>
        <div className="flex py-8 px-[120px]">
          <Records1 />
        </div>
      </div>
    </main>
  );
}
