import React from "react";
import "./styles.css";
import Icon from "supercons";

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className="searchBar-wrap">
    <form onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="جستوجو بر اساس دسته بندی"
        value={value}
        onChange={handleSearchKey}
      />
      {value && (
        <span onClick={clearSearch}>
          <Icon glyph="delete" size={32}></Icon>
        </span>
      )}
      <button>بریم</button>
    </form>
  </div>
);

export default SearchBar;
