import React from "react";
import "./style.scss";

function SearchBar({ setSearchTerm,setSelector,selector }) {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSelector(!selector)
  };
  return (
    <form className={`d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}>
      <input
        className="input"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        placeholder="search characters"
        type="text"
      />
      <button onClick={handleSearchSubmit} className={`btn btn-success fs-5`}>
        Sort
      </button>
    
    </form>
  );
}

export default SearchBar;
