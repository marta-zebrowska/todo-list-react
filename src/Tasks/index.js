import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map(({ id, content, done }) => (
      <li
      className={`tasks__item${done && hideDone ? " tasks__item--hidden" : ""}`} key={id}>        
        <button 
        className="tasks__button tasks__button--done"
        onClick={() => toggleTaskDone(id)}
        >
             {done ? "✔" : ""}
            </button>
            <span className={`tasks${done ? " tasks__content--done" : ""}`}>
             {content}
            </span>
            <button 
            className="tasks__button tasks__button--remove"
            onClick={() => removeTask(id)}
            >
            🗑 
            </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
