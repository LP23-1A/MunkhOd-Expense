import React, { useState } from "react";
import CloseIcon from "./icons/Close";
import HouseCat from "./icons/category/HouseCat";
import GlobeSimple from "./icons/category/GlobeSimple";

export default function AddCategory({ onclose }) {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [categoryIcon, setCategoryIcon] = useState(false);

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

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };

  return (
    <main className="w-full">
      <div className="w-[494px] h-[68px] flex items-center bg-white px-6 py-5 gap-2 justify-between rounded-t-2xl">
        <p className="text-[20px] font-semibold">Add Category</p>
        <button onClick={onclose}>
          <CloseIcon />
        </button>
      </div>
      <hr />
      <div className="flex flex-col p-5 bg-white w-full h-[168px] rounded-b-2xl gap-3 justify-center items-center">
        <div className="flex w-full gap-3 justify-center items-center">
          <div className="custom-dropdown">
            <button onClick={() => setCategoryIcon(true)}>Choose</button>
            {categoryIcon && (
              <span className="category-icon">
                <HouseCat />
              </span>
            )}
            <div
              className="selected-category"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {/* {selectedCategory || "Choose"} */}
            </div>
            {showDropdown && (
              <div className="dropdown-options">
                {categories.map((category) => (
                  <div
                    key={category}
                    onClick={() => handleSelectCategory(category)}
                  >
                    <span className="category-icon">
                      <HouseCat />
                      <GlobeSimple />
                    </span>
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>
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
