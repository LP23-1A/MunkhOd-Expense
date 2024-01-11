import Navbar from "@/components/Navbar";
import Records2 from "@/components/Records2";
import Records3 from "@/components/Records3";

export default function records() {
  return (
    <main className="w-full ">
      <div className="py-[6px] px-[112px]">
        <Navbar />
      </div>
      <div className="h-[1148px] px-[120px] bg-[#F3F4F6] m-auto w-full flex justify-center">
        <div className="flex flex-col items-center">
          <Records2 />
        </div>
        <div className="flex pt-9 px-6">
          <Records3 />
        </div>
      </div>
    </main>
  );
}
