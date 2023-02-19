import { useMemo, useState, useRef, useEffect } from "react";
import "./App.css";
import Post from "./components/Post";
import Search from "./components/Search";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20")
      .then((response) => response.json())
      .then((data) => {
        const newPost = data.map((post) => ({
          ...post,
          likes: 0,
        }));
        setPosts(newPost);
      });
  }, []);
  useEffect(() => {
    const newData = posts.filter((i) =>
      i.title.toUpperCase().includes(search.toUpperCase())
    );

    setSearchData(newData);
  }, [posts, search]);

  return (
    <div className="box">
      <Search
        posts={posts}
        setPosts={setPosts}
        searchData={searchData}
        setSearchData={setSearchData}
        search={search}
        setSearch={setSearch}
      />
      <Post
        posts={posts}
        setPosts={setPosts}
        searchData={searchData}
        setSearchData={setSearchData}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
};

export default App;
