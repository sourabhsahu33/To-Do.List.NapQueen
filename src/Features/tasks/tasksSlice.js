import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        id: 1,
        content: "Task is done.",
        done: true,
      },
      {
        id: 2,
        content: "List Your Next Task.",
        done: false,
      },
    ],
    hideDone: false,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
  },
});

export const { addTask, toggleHideDone } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
