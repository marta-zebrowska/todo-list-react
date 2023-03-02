import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { Wrapper, StyledButton } from "./styled";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {tasks.length > 0 && (
        <>
          <StyledButton onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż " : "Ukryj "} ukończone
          </StyledButton>
          <StyledButton
            onClick={() => dispatch(setAllDone())}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </StyledButton>
        </>
      )}
    </Wrapper>
  );
};
export default Buttons;
