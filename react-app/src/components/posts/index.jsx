import { useEffect, useState, useContext } from "react";
import { postsData } from "./mock-data.js";
import { MyContext } from "../hooks/context.hook";
import { Post } from "../post";
import styles from "./index.css";
import { PostDetails } from "../post-details/index.jsx";

export const Posts = () => {
  const [posts, setPosts] = useState(postsData);
  const [currentPost, setCurrentPost] = useState(null);
  const [searchPost, setSearchPost] = useState("");

  const isSearch = searchPost === "";

  const ctx = useContext(MyContext);

  const handleSearch = (event) => {
    setSearchPost(event.target.value);
  };
  
  return (
    <section className={`posts ${ctx.isBlackTheme ? "posts_dark" : ""}`}>
      <div className="container">
      {currentPost ? (
          <PostDetails post={currentPost} setCurrentPost={setCurrentPost} />
        ) : (
          <>
        <h1 className="posts__title">Blog</h1>
        <div className="posts__tabs">
            <button className="posts__tabs_item">All</button>
            <button className="posts__tabs_item">My Favorites</button>
            <button className="posts__tabs_item">Popular</button>
            <div className="posts__search">
              <input
                  type="text"
                  placeholder="Поиск"
                  value={searchPost}
                  onChange={handleSearch}
              />
            </div>
        </div>
        <div className="posts__wrapper" >
        {posts
        .filter((post) =>
          post.title.toLowerCase().includes(searchPost.toLowerCase())
        )
        .map((item, index) => {
          let size = "large";
          if (index > 5) {
            size = "small";
          }
          return (
            <Post
              post={item}
              index={index}
              key={index}
              size={size}
              setCurrentPost={setCurrentPost}
            />
          );
        })}
        </div>
          </>
        )}
      </div>
    </section>
  );
};