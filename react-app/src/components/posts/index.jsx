import { useEffect, useState, useContext } from "react";
import { postsData } from "./mock-data.js";
import { MyContext } from "../hooks/context.hook";
import {useSelector} from "react-redux";
import { Post } from "../post";
import styles from "./index.css";
import {useDispatch} from "react-redux";
import { PostDetails } from "../post-details/index.jsx";
import { useNavigate, useParams} from "react-router-dom";
import { PostPreview } from "../post-preview/index.jsx";
import { ImgPreview } from "../img-preview/index.jsx";
import { ADD_POSTS_ACTION } from "../../actions";
import { CHANGE_TAB_ACTION } from "../../actions";
import { Spinner } from "../spinner/index.jsx";


export const Posts = () => {

  const {category} = useParams();

  const navigate = useNavigate();

  // const [filterValue, setFilterValue] = useState(category);

  const [searchPost, setSearchPost] = useState("");

  const isSearch = searchPost === "";

  const dispatch = useDispatch();

  const ctx = useContext(MyContext);

  const post = useSelector((state) => state.post);

  const img = useSelector((state) => state.img);

  const posts = useSelector((state) => state.posts);

  const tab = useSelector((state) => state.tab);

  const handleSearch = (event) => {
    setSearchPost(event.target.value);
  };

  const handleClickAll = (category) => {
    return () => {
      dispatch(CHANGE_TAB_ACTION(category))
      navigate(`/blog/${category}`)
    }
  }

  useEffect(() => {
    dispatch(CHANGE_TAB_ACTION(category))
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then(({ results }) => {
        dispatch(ADD_POSTS_ACTION(postsData));
      })
      .catch((e) => console.log(e));
  }, []);

  if (!posts){
    return <Spinner/>
  }
  
  return (
    <section className={`posts ${ctx.isBlackTheme ? "posts_dark" : ""}`}>
      <div className="container">
        <h1 className="posts__title">Blog</h1>
        <div className="posts__tabs">
          <button className="posts__tabs_item" onClick={handleClickAll("all")}>All</button>
          <button className="posts__tabs_item" onClick={handleClickAll("favorites")}>My Favorites</button>
          <button className="posts__tabs_item" onClick={handleClickAll("popular")}>Popular</button>
            <div className="posts__search">
              <input
                  type="text"
                  placeholder="Поиск"
                  value={searchPost}
                  onChange={handleSearch}
              />
            </div>
        </div>
        <div className={!isSearch ? "posts_wrapper_flex" : (tab === "all" ? "posts__wrapper" : "posts_wrapper_flex")}>
        {posts
        .filter((post) => {
          if (tab === "all") {
              return post;
          } else if (tab === "favorites") {
              return post.favorite;
          } else if (tab === "popular") {
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
              img={item}
              index={index}
              key={index}
              size={(tab === "favorites" || tab === "popular") ? "large" : size}
            />
          );
        })}
        </div>
      </div>
      {post && <PostPreview post={post}/>}
      {img && <ImgPreview post={img}/>}
      
    </section>
  );
};