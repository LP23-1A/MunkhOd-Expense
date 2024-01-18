"use client";
import LeadIcon from "@/components/icons/LeadIcon";
import LoginLogo12 from "@/components/icons/LoginLogo12";
import Link from "next/link";
import AddRecordEx from "./AddRecordEx";
import LogOut from "./LogOut";

export default function Navbar() {
  return (
    <div class="navbar bg-base-100 w-[1440px] m-auto flex justify-center">
      <div class="flex-1 gap-6">
        <LoginLogo12 />
        <Link href={"/dashboard"}>
          <button class="btn btn-ghost btn-sm text-base font-semibold">
            Dashboard
          </button>
        </Link>

        <Link href={"/records"}>
          <button class="btn btn-ghost btn-sm text-base font-normal">
            Records
          </button>
        </Link>
      </div>
      <div class="flex-none">
        <div>
          <button class="btn btn-sm bg-[#0166FF] px-[12px] rounded-[20px] text-[16px] text-white gap-1 font-normal">
            <LeadIcon />
            Record
          </button>
        </div>
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <button>Log Out</button>
          </ul>
        </div>
      </div>
    </div>
  );
}
