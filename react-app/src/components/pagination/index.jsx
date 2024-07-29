import "./styles.scss";
import { useSelector } from "react-redux";

const getVisiblePages = (page, total) => {
  if (total < 7) {
    return new Array(total).fill(null).map((_, i) => ++i);
  } else {
    if (page > 4 && page + 2 < total) {
      return [1, page - 1, page, page + 1, total];
    } else if (page > 4 && page + 2 >= total) {
      return [1, total - 3, total - 2, total - 1, total];
    } else {
      return [1, 2, 3, 4, 5, total];
    }
  }
};

export const Pagination = ({ limit, handleChangePage }) => {
  const page = useSelector((state) => state.page);
  const count = useSelector((state) => state.posts.count);
  const pageCount = Math.ceil(count / limit) || 1;
  const numbersList = new Array(pageCount).fill(null).map((_, i) => ++i);
  const visiblePages = getVisiblePages(page, pageCount);

  return (
    <div className="pagination">
      {visiblePages.map((pageNumber, index, array) => {
        return (
          <span key={pageNumber}>
            {array[index - 1] + 2 < pageNumber ? (
              <span className="pagination__dots">...</span>
            ) : null}
            <button
              type="button"
              className={`pagination__item ${
                page === pageNumber ? "pagination__item_active" : ""
              }`}
              onClick={() => handleChangePage(pageNumber)}
            >
              {pageNumber}
            </button>
          </span>
        );
      })}
    </div>
  );
};
