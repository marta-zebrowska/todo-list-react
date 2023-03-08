import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "../Buttons/styled";
import { fetchExampleTasks, selectLoading } from "../tasksSlice";

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <StyledButton
        disabled={loading}
        onClick={() => dispatch(fetchExampleTasks())}
        >
            {
                loading ? "Chwileczkę... trwa ładowanie" : "Pobierz przykładowe zadania"
            }
        </StyledButton>
    );
};