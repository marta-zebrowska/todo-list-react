import { useSelector, useDispatch } from "react-redux";

import {
  selectTasksState,
  selectIsEveryTaskDone,
  toggleHideDone,
  setAllDone,
} from "../../tasksSlice";
import StyledButton from "../../TasksPage/Button/styled";
import { Wrapper } from "./styled";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
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
