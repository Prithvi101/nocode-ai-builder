import React, { useEffect, useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import BaseNode from "../BaseNode/BaseNode";
import { Position, useUpdateNodeInternals } from "reactflow";

const InputField = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  dropDownItems,
}) => {
  const [isActive, setIsActive] = useState(false); // Tracks if the input is focused
  const [filteredItems, setFilteredItems] = useState(dropDownItems); // Stores dropdown options based on filter
  const [showDropdown, setShowDropdown] = useState(false); // Controls dropdown visibility
  const [nodeStyle, setNodeStyle] = useState({ width: 400, height: 50 }); // Dynamic styling for the input field
  const [variables, setVariables] = useState([]); // Stores variables extracted from the input value
  const [isTextArea, setIsTextArea] = useState(false); // Determines if the input is multiline
  const updateNodeInternals = useUpdateNodeInternals(); // React Flow hook to update node rendering

  // Handles changes to the input field
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue); // Notify parent about the change
    if (dropDownItems) {
      const filtered = dropDownItems.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredItems(filtered);
      setShowDropdown(filtered?.length > 0);
    }
  };

  // Updates input value when a dropdown item is clicked
  const handleItemClick = (item) => {
    onChange(item);
    setShowDropdown(false);
  };

  const handleFocus = () => {
    setIsActive(true);
    if (filteredItems?.length > 0) setShowDropdown(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // Dynamically adjusts the size of the input based on its content
  const adjustNodeSize = (text) => {
    if (text.includes("\n")) {
      setIsTextArea(true);
    } else {
      setIsTextArea(false);
    }
    const lines = text.split("\n");
    const width = Math.max(
      200,
      lines.reduce((max, line) => Math.max(max, line.length * 8), 0)
    );
    const height = Math.max(14, lines.length * 16 + 16);
    setNodeStyle({ width, height });
  };

  // Extracts variables enclosed in `{{ }}` from the input text
  const extractVariables = (text) => {
    if (!text || typeof text !== "string") {
      setVariables([]); // Clear variables if the input is invalid
      return;
    }
    const variablePattern = /\{\{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\}\}/g;
    const matches = Array.from(text.matchAll(variablePattern)); // Get all matches
    const uniqueVariables = [...new Set(matches.map((match) => match[1]))]; // Deduplicate variable names
    setVariables(uniqueVariables);
  };

  // Handles keyboard navigation for the dropdown
  const handleKeyDown = (e) => {
    if (dropDownItems) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const currentIndex = filteredItems.findIndex(
          (item) => item === e.target.value
        );
        const nextIndex =
          e.key === "ArrowDown"
            ? (currentIndex + 1) % filteredItems.length
            : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        const nextItem = filteredItems[nextIndex];
        onChange(nextItem);
      }
      if (e.key === "Enter") {
        setShowDropdown(false);
      }
    } else if (e.key === "Enter") {
      setIsTextArea(true);
    }
  };

  useEffect(() => {
    // Recalculates size and variables when value changes
    adjustNodeSize(value);
    extractVariables(value);
  }, [value]);

  useEffect(() => {
    updateNodeInternals(id); // Updates the node internals when variables change
  }, [variables]);

  return (
    <>
      <div className="px-4">
        <div
          className={
            "relative w-full border-2 rounded-full py-3 px-4 transition-all duration-300 focus-within:border-purple-500 focus-within:shadow-md " +
            (isTextArea ? "rounded-md" : "")
          }
        >
          {/* Label */}
          <label
            className={`pointer-events-none absolute left-4 top-1/2 transform -translate-y-1/2 text-primary transition-all ${
              isActive || value ? "-translate-y-10 scale-75 top-11" : ""
            }`}
          >
            {label}
          </label>

          {/* Textarea for input */}
          <textarea
            value={value}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            onChange={handleInputChange}
            className="w-full outline-none border-none bg-transparent mt-3 px-1 pb-0 leading-[16px]"
            style={{
              resize: "none",
              overflow: "hidden",
              ...nodeStyle,
            }}
          />

          {/* Dropdown toggle */}
          {dropDownItems && (
            <BiSolidDownArrow
              onClick={toggleDropdown}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer transition-transform ${
                showDropdown ? "rotate-180" : ""
              }`}
            />
          )}

          {/* Dropdown menu */}
          {showDropdown && (
            <ul className="absolute z-10 left-0 right-0 mt-1 bg-white rounded-xl shadow-lg max-h-60 overflow-auto">
              {filteredItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleItemClick(item)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Render handles for variables */}
      {variables?.length > 0 &&
        variables.map((handle, index) => (
          <BaseNode.Handle
            key={`handle-${index}`}
            type="source"
            position={Position.Left}
            id={index.toString()}
            style={{
              top: variables.length
                ? `${(50 * (index + 1)) / variables.length + 10}%`
                : "0%",
              zIndex: 10,
            }}
          >
            <p>{handle}</p>
          </BaseNode.Handle>
        ))}
    </>
  );
};

export default InputField;
