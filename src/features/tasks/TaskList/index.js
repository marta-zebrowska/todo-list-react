import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toggleTaskDone } from "../tasksSlice";
import { List, Item, Button, Content } from "./styled";

const TaskList = ({ removeTask }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch(); 

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>{task.content}</Content>
          <Button remove onClick={() => removeTask(task.id)}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
