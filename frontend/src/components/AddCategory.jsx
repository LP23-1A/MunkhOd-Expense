import React, { useState } from "react";
import CloseIcon from "./icons/Close";
import HouseCat from "./icons/category/HouseCat";

export default function AddCategory({ onclose }) {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  const handleCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories((prevCategories) => [
        ...prevCategories,
        newCategory.trim(),
      ]);
      setNewCategory("");
    }
  };

  return (
    <main className="w-">
      <div className="w-[494px] h-[68px] flex items-center bg-white px-6 py-5 gap-2 justify-between rounded-t-2xl">
        <p className="text-[20px] font-semibold">Add Category</p>
        <button onClick={onclose}>
          <CloseIcon />
        </button>
      </div>
      <hr />
      <div className="flex flex-col p-5 bg-white w-full h-[168px] rounded-b-2xl gap-3 justify-center items-center">
        <div className="flex w-full gap-3 justify-center items-center">
          <select className="w-[84px] h-[48px] max-w-xs">
            <option disabled defaultValue>
              Choose
            </option>
            {categories.map((category) => (
              <option key={category}>
                {category}
                <span className="ml-2 w-6 h-6">
                  <HouseCat />
                </span>
              </option>
            ))}
          </select>

          <input
            id="categoryInput"
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
            value={newCategory}
            onChange={handleCategoryChange}
          />
        </div>

        <button
          className="btn btn-sm bg-[#0166FF] text-white w-[446px] rounded-[20px] px-[12px] h-[40px] font-normal"
          onClick={handleAddCategory}
        >
          Add
        </button>
      </div>
    </main>
  );
}
