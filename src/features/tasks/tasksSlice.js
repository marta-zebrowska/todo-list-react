import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
           tasks.push(task); 
        },
        toggleHideDone: state => {
         state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: task }) => {
            const index = tasks.findIndex(({ id }) => id === task);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: task }) => {
            const index = tasks.findIndex(({ id }) => id === task);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
           task.done = true;           
        }
    },
}});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export const selectTasksState = state => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export default tasksSlice.reducer;