import { useSelector, useDispatch } from "react-redux";
import { Button } from "../Form/styled";
import { 
  selectTasksState, 
  selectIsEveryTaskDone, 
  toggleHideDone, 
  setAllDone, 
  fetchExampleTasks 
} from "../tasksSlice";
import { Wrapper, StyledButton } from "./styled";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {tasks.length > 0 && (
        <>
          <StyledButton onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż " : "Ukryj "} ukończone
          </StyledButton>
          <StyledButton
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </StyledButton>
        </>
      )}
    </Wrapper>
  );
};
export default Buttons;
