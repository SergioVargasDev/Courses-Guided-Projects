import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => (
  <div className="search">
    <div>
      <img src="search.svg" alt="search" />
      <input
        type="text"
        placeholder="Serach through thousands of movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  </div>
);
export default Search;
