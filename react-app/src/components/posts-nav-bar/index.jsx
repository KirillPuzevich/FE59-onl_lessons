import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_TAB_ACTION,
  setSearchValue,
  ADD_MIDDLEWARE_ACTION,
  setSortedOrder,
} from "../../store/actions";
import { SortModal } from "../sort-modal/index.jsx";
import { limit } from "../../pages/posts";

export const PostsNavBar = ({ handleSearch }) => {
  const searchValue = useSelector((state) => state.searchValue);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const page = useSelector((state) => state.page);

  const handleChange = (event) => {
    dispatch(setSearchValue(event.target.value));
  };

  const handleOrder = (orderValue) => {
    dispatch(ADD_MIDDLEWARE_ACTION(searchValue, orderValue, limit, page));
    dispatch(setSortedOrder(orderValue));
  };

  const handleClickAll = (category) => {
    return () => {
      dispatch(CHANGE_TAB_ACTION(category));
      navigate(`/blog/${category}`);
    };
  };

  return (
    <div className="posts__tabs">
      <button className="posts__tabs_item" onClick={handleClickAll("all")}>
        All
      </button>
      <button
        className="posts__tabs_item"
        onClick={handleClickAll("favorites")}
      >
        My Favorites
      </button>
      <button className="posts__tabs_item" onClick={handleClickAll("popular")}>
        Popular
      </button>
      <div className="posts__elements">
        <button className="posts__elements-btn" type="button" onClick={() => setIsModalOpen(true)}>
          Sorted Posts
        </button>
        <div className="posts__search">
          <input
            className="posts__search-input"
            type="text"
            placeholder="Поиск"
            value={searchValue}
            onChange={handleChange}
          />
          <button className="posts__search-btn" type="button" onClick={() => handleSearch(searchValue)}>
            Search
          </button>
        </div>
        <SortModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          sortPosts={(field) => {
            handleOrder(field);
            setIsModalOpen(false);
          }}
        />
      </div>
    </div>
  );
};
