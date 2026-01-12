import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import styles from "@/styles/search-input.module.css";
import { Search } from "lucide-react";
import { SearchInputProps } from "@/interfaces";

function SearchInput({
  value,
  placeholder = "Search…",
  onSearch,
  onChange,
  onEnter,
}: SearchInputProps ) {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter?.(inputValue);
      onSearch(inputValue);
    }
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        type="search"
        className={styles.searchInput}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className={styles.searchButton}
        aria-label="Search"
        onClick={() => onSearch(inputValue)}
      >
        <Search color="#fff" />
      </button>
    </div>
  );
};

export default SearchInput;
