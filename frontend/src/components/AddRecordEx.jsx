import React, { useState } from "react";
import CloseIcon from "./icons/Close";

export default function AddRecordEx({ onclose }) {
  const [isIncome, setIsIncome] = useState(false);

  const incomeClick = (bool) => {
    setIsIncome(bool);
  };

  return (
    <main>
      <div className="h-[68px] w-[792px] bg-white rounded-xl">
        <div className="flex flex-col rounded-xl">
          <div className="flex items-center justify-between gap-[8px] px-[24px] py-[20px] bg-white rounded-t-xl">
            <h1 className="text-[20px] font-semibold">Last Records</h1>
            <button onClick={onclose}>
              <CloseIcon />
            </button>
          </div>
          <hr />
          <div className="flex">
            <div className="w-[396px] h-[444px] bg-white items-center flex flex-col gap-5">
              <div className="flex bg-white px-6 pt-5 gap-1">
                <a
                  className={`btn btn-sm w-[160px] h-[40px] px-[12px] rounded-[20px] text-[16px] gap-1 font-normal ${
                    isIncome
                      ? "bg-[#F3F4F6] text-black"
                      : "bg-[#0166FF] text-white"
                  }`}
                  onClick={() => incomeClick(false)}
                >
                  Expense
                </a>
                <a
                  className={`btn btn-sm w-[160px] h-[40px] px-[12px] rounded-[20px] text-[16px] gap-1 font-normal ${
                    isIncome
                      ? "bg-[#16A34A] text-white"
                      : "bg-[#F3F4F6] text-black"
                  }`}
                  onClick={() => incomeClick(true)}
                >
                  Income
                </a>
              </div>
              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="000.00"
                  className="input input-bordered w-[348px] h-[76px] max-w-xs px-4 py-3"
                />
                <div>
                  <p>Category</p>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Choose
                    </option>
                    <option>Add Category</option>
                    <option>Home</option>
                    <option>Gift</option>
                    <option>Food</option>
                    <option>Drink</option>
                    <option>Taxi</option>
                    <option>Shopping</option>
                  </select>
                </div>

                <div className="flex gap-3">
                  <div className="w-full">
                    <p>Date</p>
                    <select className="select select-bordered w-full max-w-xs">
                      <option disabled selected>
                        Oct 30.2023
                      </option>
                      <option>Han Solo</option>
                      <option>Greedo</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <p>Time</p>
                    <select className="select select-bordered w-full max-w-xs">
                      <option disabled selected>
                        4:15 PM
                      </option>
                      <option>Han Solo</option>
                      <option>Greedo</option>
                    </select>
                  </div>
                </div>
                <a
                  className={`btn btn-sm w-full h-[40px] ${
                    isIncome ? "bg-[#16A34A]" : "bg-[#0166FF]"
                  } px-[12px] rounded-[20px] text-[16px] text-white gap-1 font-normal`}
                >
                  Add Record
                </a>
              </div>
            </div>
            <div className="w-[396px] h-[444px] bg-white items-center flex flex-col gap-5">
              <div className="w-full h-full flex flex-col px-6 pb-6 pt-5 gap-5">
                <div className="flex flex-col">
                  <p>Payee</p>
                  <select className="select select-bordered w-full h-[48px] max-w-xs">
                    <option disabled selected>
                      Write here
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
                <div className="flex flex-col w-full h-full">
                  <p>Note</p>
                  <input
                    type="text"
                    placeholder="Write here"
                    className="input input-bordered w-full h-full max-w-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
