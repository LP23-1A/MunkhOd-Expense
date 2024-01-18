"use client";
import LoginLogo1 from "@/components/icons/LoginLogo1";
import LoginLogo2 from "@/components/icons/LoginLogo2";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import Reload from "../reload/page.js";

const api = "http://localhost:8001/user";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signup = async () => {
    try {
      if (
        input.password !== input.confirmPassword &&
        !imput &&
        !confirmPassword
      ) {
        setError("Passwords do not match");
        return;
      }
      setLoading(true);
      let res = await axios.post(api, { name, email, password });
      console.log(res.data);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError("Email already exists.");
      } else {
        console.error("Signup failed", error);
        setError("An error occurred during signup.");
      }
    } finally {
      setLoading(false);
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
              disabled={loading}
            >
              {loading ? <Reload /> : "Sign up"}
            </button>
          </div>
          <div className="flex gap-2">
            <button>Already have account?</button>
            <Link href={"/login"}>
              <button className="text-[#0166FF]">Log in</button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 h-screen bg-[#0166FF]"></div>
      </div>
    </main>
  );
}
