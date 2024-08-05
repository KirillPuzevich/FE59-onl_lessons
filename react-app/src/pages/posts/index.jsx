import { useEffect, useState, useContext } from "react";
import { postsData } from "./mock-data.js";
import { MyContext } from "../../components/hooks/context.hook.jsx";
import { useSelector } from "react-redux";
import { Post } from "../../components/post/index.jsx";
import styles from "./styles.scss";
import { useDispatch } from "react-redux";
import { PostDetails } from "../post-details/index.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { PostPreview } from "../../components/post-preview/index.jsx";
import { ImgPreview } from "../../components/img-preview/index.jsx";
import {
  ADD_POSTS_ACTION,
  REQUEST_POSTS_ACTION,
  CHANGE_TAB_ACTION,
  ADD_MIDDLEWARE_ACTION,
  setPage,
  setPostCount,
} from "../../store/actions/index.js";
import { Spinner } from "../../components/spinner/index.jsx";
import { PostsNavBar } from "../../components/posts-nav-bar/index.jsx";
import { Pagination } from "../../components/pagination/index.jsx";
import { NoSearchResult } from "../../components/no-search-result/index.jsx";

export const limit = 12;

export const Posts = () => {
  const { category } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const ctx = useContext(MyContext);

  const post = useSelector((state) => state.post);

  const img = useSelector((state) => state.img);

  const posts = useSelector((state) => state.posts);

  const count = useSelector((state) => state.posts.count);

  const tab = useSelector((state) => state.tab);

  const searchValue = useSelector((state) => state.searchValue);

  const page = useSelector((state) => state.page);

  const order = useSelector((state) => state.order);

  console.log(posts);
  useEffect(() => {
    dispatch(ADD_MIDDLEWARE_ACTION(null, order, limit, page, count));
  }, []);

  const handleSearch = (searchValue) => {
    dispatch(ADD_MIDDLEWARE_ACTION(searchValue, order, limit, page));
  };

  const handleLoadMore = () => {
    const newPage = page + 1;
    dispatch(setPage(newPage));
    dispatch(ADD_MIDDLEWARE_ACTION(searchValue, order, limit, newPage, true));
  };

  const handleChangePage = (newPage) => {
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
        {/* {posts.content.map((item, index) => {
            return (
              <div className="posts__wrapper">
                {item.map((post, index) => {
                  return(<Post
                    post={post}
                    img={post}
                    index={index}
                    key={index}
                    size={index > 5 ? "small" : "large"}
                  />) 
                })}
              </div> 
            );
          })} */}
        {!posts.content.length && !posts.loading && <NoSearchResult />}
        <Pagination limit={limit} handleChangePage={handleChangePage} />
        {posts.loading && <Spinner />}
        {page * (limit + 1) <= count && (
          <div className="posts__load-more" onClick={handleLoadMore}>
            <button className="posts__load-more-btn">Load more</button>
          </div>
        )}
      </div>
      {post && <PostPreview post={post} />}
      {img && <ImgPreview post={img} />}
    </section>
  );
};
