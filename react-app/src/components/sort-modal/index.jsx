import styles from "./styles.scss";

export const SortModal = ({ isOpen, onClose, sortPosts }) => {
  const fields = ['date', 'title', 'text', 'lesson_num'];

  const handleSort = (field) => {
    sortPosts(field);
    onClose();
  };

  if (!isOpen) return null;
  
  console.log(isOpen)

  return (
    <div className="modal">
      <div className="modal__content">
        <h2>Select sort</h2>
        <div className="modal__content-btn">
        {fields.map((field) => (
          <button className="modal__content-btn_field" key={field} onClick={() => handleSort(field)}>
            {field}
          </button>
        ))}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};


