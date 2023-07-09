import "./list.css"

const List = ({list, toggleCompleted, removeItem}) => {

  return (
    <>
      <ul className="list">
        {/* Iterare sulla lista */}
        {list.map((item) => (
          <li
            key={item.id}
            className="task"
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            <input
              className="checkbox-style"
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleCompleted(item.id)}
            />
            {item.text}
            <button className="erase" onClick={() => removeItem(item.id)}> <i className="fas fa-trash" ></i></button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
