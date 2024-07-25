import { useEffect, useState, useContext } from "react";
import { postsData } from "./mock-data.js";
import { MyContext } from "../hooks/context.hook";
import { useSelector } from "react-redux";
import { Post } from "../post";
import styles from "./styles.scss";
import { useDispatch } from "react-redux";
import { PostDetails } from "../post-details/index.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { PostPreview } from "../post-preview/index.jsx";
import { ImgPreview } from "../img-preview/index.jsx";
import {
  ADD_POSTS_ACTION,
  REQUEST_POSTS_ACTION,
  CHANGE_TAB_ACTION,
  ADD_MIDDLEWARE_ACTION,
  setPage,
} from "../../store/actions";
import { Spinner } from "../spinner/index.jsx";
import { PostsNavBar } from "../posts-nav-bar/index.jsx";
import { NoSearchResult } from "../no-search-result/index.jsx";

export const limit = 12;

export const Posts = () => {
  const { category } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const ctx = useContext(MyContext);

  const post = useSelector((state) => state.post);

  const img = useSelector((state) => state.img);

  const posts = useSelector((state) => state.posts);

  const tab = useSelector((state) => state.tab);

  const searchValue = useSelector((state) => state.searchValue);

  const page = useSelector((state) => state.page);

  const order = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(ADD_MIDDLEWARE_ACTION(null, null, limit, page));
  }, []);

  const handleSearch = (searchValue) => {
    dispatch(ADD_MIDDLEWARE_ACTION(searchValue, null, limit, page));
  };

  const handleLoadMore = () => {
    const newPage = page + 1; 
    dispatch(setPage(newPage)); 
    dispatch(ADD_MIDDLEWARE_ACTION(searchValue, order, limit, newPage));
  };

  return (
    <section className={`posts ${ctx.isBlackTheme ? "posts_dark" : ""}`}>
      <div className="container">
        <h1 className="posts__title">Blog</h1>
        <PostsNavBar handleSearch={handleSearch} />
        <div className={"posts__wrapper"}>
          {posts.content.map((item, index) => {
            return (
              <Post
                post={item}
                img={item}
                index={index}
                key={index}
                size={index > 5 ? "small" : "large"}
              />
            );
          })}
          </div> 
        {!posts.content.length && !posts.loading && <NoSearchResult/>}
        {posts.loading && <Spinner />}
        <div className="posts__load-more">
          <button className="posts__load-more-btn" onClick={handleLoadMore}>Load more</button>
        </div>
      </div>
      {post && <PostPreview post={post} />}
      {img && <ImgPreview post={img} />}
    </section>
  );
};
