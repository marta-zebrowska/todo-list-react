import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li
      className={`tasks__item${task.done && hideDone ? " tasks__item--hidden" : ""}`} key={task.id}>        
        <button className="tasks__button tasks__button--done">
             {task.done ? "✔" : ""}
            </button>
            <span className={`tasks${task.done ? " tasks__content--done" : ""}`}>
             {task.content}
            </span>
            <button className="tasks__button tasks__button--remove">
            🗑
            </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
