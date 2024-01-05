"use client";
import LoginLogo1 from "@/components/icons/LoginLogo1";
import LoginLogo2 from "@/components/icons/LoginLogo2";
import axios from "axios";
import { useState } from "react";

const api = "http://localhost:8001/user";

export default function signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const signup = async () => {
    try {
      let res = await axios.post(api, { name, email, password, rePassword });
      console.log(res.data);
    } catch (error) {
      console.error("signup failed", error);
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
            <h1 className="text-[24px] font-semibold">Create Geld account</h1>
            <p className="text-[16px] font-normal">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <input
              className="p-[16px] border rounded-lg bg-[#F3F4F6] border-[#D1D5DB] w-[384px] text-[#A3A3A3]"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <input
              className="p-[16px] border rounded-lg bg-[#F3F4F6] border-[#D1D5DB] w-[384px] text-[#A3A3A3]"
              type="text"
              placeholder="Re-Password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
            <button
              className="flex items-center justify-center w-[384px] h-[48px] rounded-[20px] bg-[#0166FF] text-[#FFFFFF]"
              onClick={signup}
            >
              Sign up
            </button>
          </div>
          <div className="flex gap-2">
            <button>Already have account?</button>
            <button className="text-[#0166FF]">Log in</button>
          </div>
        </div>
        <div className="w-1/2 h-screen bg-[#0166FF]"></div>
      </div>
    </main>
  );
}
