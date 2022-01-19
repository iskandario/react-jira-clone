import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskItem } from "../types/mainTypes";

const initialState = {
  value: [
    {
      title: "Front End Beta Version",
      description: "",
      id: 1,
      type: "task",
      user: "EJ",
      priority: 1,
      code: "MET-14",
      status: "todo",
      main_details: {
        description: "",
        environment: "",
        user_stories: "",
        affected_areas: "",
      },
      side_details: {
        user: "",
        priority: null,
        reporter: "",
        labels: "",
        project_manager: "",
        test: "",
        client: "",
        effort: "",
        start_date: "",
        chargable: "",
        fail_count: null,
      },
    },
    {
      title: "BE Core work on Mongo",
      description: "",
      id: 2,
      type: "task",
      user: "EJ",
      priority: 4,
      code: "PEP-66",
      status: "todo",
      main_details: {
        description: "",
        environment: "",
        user_stories: "",
        affected_areas: "",
      },
      side_details: {
        user: "",
        priority: null,
        reporter: "",
        labels: "",
        project_manager: "",
        test: "",
        client: "",
        effort: "",
        start_date: "",
        chargable: "",
        fail_count: null,
      },
    },
    {
      title: "Main story for issue task to be completed first",
      description: "",
      id: 1,
      type: "story",
      user: "Ewa",
      priority: 2,
      code: "PEP-51",
      status: "todo",
      main_details: {
        description: "",
        environment: "",
        user_stories: "",
        affected_areas: "",
      },
      side_details: {
        user: "",
        priority: null,
        reporter: "",
        labels: "",
        project_manager: "",
        test: "",
        client: "",
        effort: "",
        start_date: "",
        chargable: "",
        fail_count: null,
      },
    },
  ],
};

export const backlogList = createSlice({
  name: "backlogList",
  initialState,
  reducers: {
    // methods to update state
    addItem: (state, action: PayloadAction<TaskItem>) => {
      console.log("new item payload:", action.payload);
      state.value.push(action.payload);
    },
  },
});

export const { addItem } = backlogList.actions;

export default backlogList.reducer;
