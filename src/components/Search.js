import { padding } from "@mui/system";
import React from "react";

const Search = ({ posts, setPosts, searchData, setSearchData, search, setSearch }) => {


  return <div style={{ display: "flex", justifyContent: "center", margin: "10px" }}>
    <input type="text"
      placeholder="search"
      style={{
        width: "90%",
        background: "transparent",
        border: "1px solid #FFFFFF80",
        borderRadius: "20px",
        padding: "7px 20px"
      }}
      onChange={e => setSearch(e.target.value)} />
  </div>;
};

export default Search;
