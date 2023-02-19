import { useEffect, useState } from "react";

const Post = ({
  posts,
  setPosts,
  searchData,
  setSearchData,
  search,
  setSearch,
}) => {
  const [likes, setLikes] = useState(0);
  const handleLike = (id) => {
    let newData = posts.map((post, idx) => {
      if (id === idx) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(newData);
  };
  return (
    <div className="posts-container">
      {search
        ? searchData.map((item, id) => {
            return (
              <div className="posts-card" key={id}>
                <div className="image-wrapper">
                  <img src={`https://picsum.photos/200?random=${item.id}`} />
                </div>
                <div style={{ height: "120px", paddingLeft: "10px" }}>
                  <p>User Id : {item.id}</p>
                  <p style={{ height: "37px", overflow: "hidden" }}>
                    Title: {item.title}
                  </p>
                  <p>Likes: {item.likes}</p>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button>Like Post</button>
                </div>
              </div>
            );
          })
        : posts.map((item, id) => {
            return (
              <div className="posts-card" key={id}>
                <div className="image-wrapper">
                  <img src={`https://picsum.photos/200?random=${item.id}`} />
                </div>
                <div style={{ height: "120px", paddingLeft: "10px" }}>
                  <p>User Id : {item.id}</p>
                  <p style={{ height: "37px", overflow: "hidden" }}>
                    Title: {item.title}
                  </p>
                  <p>Likes: {item.likes}</p>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button onClick={() => handleLike(id)}>Like Post</button>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Post;
