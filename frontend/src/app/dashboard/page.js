import Navbar from "@/components/Navbar";
import Card1 from "@/components/Card1";
import Card2 from "@/components/Card2";
import Card3 from "@/components/Card3";
import Income1 from "@/components/Income1";

export default function signup() {
  return (
    <main className="w-full">
      <div className="py-[6px] px-[112px]">
        <Navbar />
      </div>
      <div className="h-[1148px] bg-[#F3F4F6]">
        <div className="flex gap-7 px-[120px] py-8">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
        <div className="flex gap-6 px-[120px]">
          <Income1 />
        </div>
      </div>
    </main>
  );
}
