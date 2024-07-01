import { useEffect, useState, useContext } from "react";
import { postsData } from "./mock-data.js";
import { MyContext } from "../hooks/context.hook";
import { Post } from "../post";
import styles from "./index.css";
import { PostDetails } from "../post-details/index.jsx";
import { useNavigate} from "react-router-dom";

export const Posts = () => {
  const [posts, setPosts] = useState(postsData);

  const navigate = useNavigate();

  const [filterValue, setFilterValue] = useState('all');

  const [searchPost, setSearchPost] = useState("");

  const isSearch = searchPost === "";

  const ctx = useContext(MyContext);

  const handleSearch = (event) => {
    setSearchPost(event.target.value);
  };
  
  return (
    <section className={`posts ${ctx.isBlackTheme ? "posts_dark" : ""}`}>
      <div className="container">
        <h1 className="posts__title">Blog</h1>
        <div className="posts__tabs">
          <button className="posts__tabs_item" onClick={() => setFilterValue("all")}>All</button>
          <button className="posts__tabs_item" onClick={() => {setFilterValue("favorites")}}>My Favorites</button>
          <button className="posts__tabs_item" onClick={() => setFilterValue("popular")}>Popular</button>
            <div className="posts__search">
              <input
                  type="text"
                  placeholder="Поиск"
                  value={searchPost}
                  onChange={handleSearch}
              />
            </div>
        </div>
        <div className={!isSearch ? "posts_wrapper_flex" : (filterValue === "all" ? "posts__wrapper" : "posts_wrapper_flex")}>
        {posts
        .filter((post) => {
          if (filterValue === "all") {
              return post;
          } else if (filterValue === "favorites") {
              return post.favorite;
          } else if (filterValue === "popular") {
              return post.popular;
          }
          })
        .filter((post) =>
          {if (searchPost) {
          return post.title.toLowerCase().includes(searchPost.toLowerCase())
          } else {
          return post
          }
          })
        .map((item, index) => {
          let size = "large";
          if (index > 5 || !isSearch) {
            size = "small";
          }
          return (
            <Post
              post={item}
              index={index}
              key={index}
              size={(filterValue === "favorites" || filterValue === "popular") ? "large" : size}
            />
          );
        })}
        </div>
      </div>
    </section>
  );
};