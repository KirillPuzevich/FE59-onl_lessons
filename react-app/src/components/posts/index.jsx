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
import { 
  ADD_POSTS_ACTION,
  REQUEST_POSTS_ACTION,
  CHANGE_TAB_ACTION,
  ADD_MIDDLEWARE_ACTION,
} from "../../actions";
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

    dispatch(ADD_MIDDLEWARE_ACTION());
  }, []);

  if (posts.loading || !posts.loaded){
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
        {posts.content.reduce((result, post, index) => {
    
          if ((tab === "all") ||
              (tab === "favorites" && post.favorite) ||
              (tab === "popular" && post.popular)) {
              
              if (post.title.toLowerCase().includes(searchPost.toLowerCase())) {
                  let size = "large";
                  if (index > 5 && isSearch) {
                      size = "small";
                  }

                  result.push(
                      <Post
                          post={post}
                          img={post} 
                          index={index}
                          key={index}
                          size={(tab === "favorites" || tab === "popular") ? "large" : size} 
                      />
                  );
              }
          }

      return result; 
      }, [])};
        </div>
      </div>
      {post && <PostPreview post={post}/>}
      {img && <ImgPreview post={img}/>}
      
    </section>
  );
};