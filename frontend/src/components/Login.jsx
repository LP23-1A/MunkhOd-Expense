"use client";
import LoginLogo1 from "@/components/icons/LoginLogo1";
import LoginLogo2 from "@/components/icons/LoginLogo2";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const api = "http://localhost:8001/user";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    try {
      let res = await axios.post(api, { email, password });
      console.log(res.data);
    } catch (error) {
      console.error("login failed", error);
    }
  };
  return (
    <main>
      <div className="flex w-full">
        <div className="w-1/2 flex-col items-center gap-[40px] flex justify-center">
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
          <div className="flex flex-col gap-4">
            <input
              className="p-[16px] border rounded-lg bg-[#F3F4F6] border-[#D1D5DB] w-[384px] text-[#A3A3A3]"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="p-[16px] border rounded-lg bg-[#F3F4F6] border-[#D1D5DB] w-[384px] text-[#A3A3A3]"
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="flex items-center justify-center w-[384px] h-[48px] rounded-[20px] bg-[#0166FF] text-[#FFFFFF]"
              onClick={login}
            >
              Log in
            </button>
          </div>
          <div className="flex gap-2">
            <button>Don't have account?</button>
            <Link href={"/signup"}>
              <button className="text-[#0166FF]">Sign Up</button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 h-screen bg-[#0166FF]"></div>
      </div>
    </main>
  );
}
