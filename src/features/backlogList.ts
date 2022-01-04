import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      description: "This is an issue of type: Task",
      id: 1,
      type: "task",
      user: "EJ",
      priority: 1,
    },
    {
      description: "Second type of task to action today",
      id: 2,
      type: "task",
      user: "EJ",
      priority: 4,
    },
    {
      description: "Main story for issue task to be completed first",
      id: 1,
      type: "story",
      user: "Ewa",
      priority: 2,
    },
  ],
};

interface logItem {
  description: string;
  id: number;
  type: string;
  user: string;
  priority: number;
}

export const backlogList = createSlice({
  name: "backlogList",
  initialState,
  reducers: {
    // methods to update state
    addItem: (state, action: PayloadAction<logItem>) => {
      console.log("new item:", action.payload);
      state.value.push(action.payload);
    },
  },
});

export const { addItem } = backlogList.actions;

export default backlogList.reducer;
