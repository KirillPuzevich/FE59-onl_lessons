import { useEffect, useState } from "react";
import { postsData } from "./mock-data.js";
import { Post } from "../post";
import styles from "./index.css";
import { PostDetails } from "../post-details/index.jsx";

export const Posts = () => {
  const [posts, setPosts] = useState(postsData);
  const [currentPost, setCurrentPost] = useState(null);

  return (
    <section className="posts">
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
        </div>
        <div className="posts__wrapper">
          {posts.map((item, index) => {
            let size = "large";

            if (index > 5) {
              size = "small";
            }

            return <Post post={item} index={index} key={index} size={size} setCurrentPost={setCurrentPost}/>;
          })}
        </div>
        </>
        )}
      </div>
    </section>
  );
};