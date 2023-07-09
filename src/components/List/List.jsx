import "./list.css"


const List = ({list, toggleCompleted, removeItem}) => {

  return (
    <>
      <ul className="list">
        {/* Iterare la lista */}
        {list.map((item) => (
            <li
              key={item.id}
              className={`task ${item.completed ? "completed" : ""}`}
            >
            <input
              className="checkbox-style"
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleCompleted(item.id)}
            />
             <span>{item.text}</span>
            <button className="erase" onClick={() => removeItem(item.id)}> <i className="fas fa-trash" ></i></button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
