import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchFilter, setSearchFilter] = useState("");
  const [sorted, setSorted] = useState(false);

  function updateSearch(filter) {
    setSearchFilter(filter);
  }

  function handleSort(e) {
    setSorted(e.target.checked);
  }

  return (
    <div className="app">
      <Header
        sorted={sorted}
        handleSort={handleSort}
        updateSearch={updateSearch}
      />
      <ListingsContainer searchFilter={searchFilter} sorted={sorted} />
    </div>
  );
}

export default App;
