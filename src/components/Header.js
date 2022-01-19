import React from "react";
import Search from "./Search";

function Header({ sorted, handleSort, updateSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search updateSearch={updateSearch} />
      <p>Sort By Location</p>
      <input onChange={handleSort} type="checkbox" checked={sorted}></input>
    </header>
  );
}

export default Header;
