import React, { useState } from "react";
import CloseIcon from "./icons/Close";

export default function AddRecordEx({ onclose }) {
  const [isIncome, setIsIncome] = useState(false);
  const [categories, setCategories] = useState([
    "Home",
    "Gift",
    "Food",
    "Drink",
    "Taxi",
    "Shopping",
  ]);
  const [newCategory, setNewCategory] = useState("");

  const incomeClick = (bool) => {
    setIsIncome(bool);
  };

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
    <main>
      <p>Category</p>
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Choose
        </option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <div className="flex items-center gap-3 mt-2">
        <input
          type="text"
          placeholder="New Category"
          className="input input-bordered w-full max-w-xs"
          value={newCategory}
          onChange={handleCategoryChange}
        />
        <button
          className="btn btn-sm bg-[#0166FF] text-white rounded-[20px] px-[12px] h-[32px] font-normal"
          onClick={handleAddCategory}
        >
          Add
        </button>
      </div>
    </main>
  );
}
