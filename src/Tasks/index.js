import { TasksList, Item, Button, Content } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <TasksList>
    {tasks.map(task => (
      <Item
       key={task.id}
       hidden={tasks.done && hideDone}>        
        <Button
        onClick={() => toggleTaskDone(task.id)}
        >
             {task.done ? "✔" : ""}
            </Button>
            <Content done={task.done}>
             {task.content}
            </Content>
            <Button
            onClick={() => removeTask(task.id)}
            >
            🗑 
            </Button>
      </Item>
    ))}
  </TasksList>
);

export default Tasks;
