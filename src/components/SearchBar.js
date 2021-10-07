import React from "react";

const SearchBar = ({ search, onChangeHandler, isChecked }) => {
  return (
    <div className="Searchbar">
      <input
        type="text"
        placeholder="Search by Category"
        name="search"
        value={search}
        onChange={onChangeHandler}
      />
      <div className="checkbox">
        <input
          type="checkbox"
          name="checkbox"
          checked={isChecked}
          onChange={onChangeHandler}
        />
        <p>only show product in stock</p>
      </div>
    </div>
  );
};

export default SearchBar;
