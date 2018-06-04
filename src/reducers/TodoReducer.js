import { ListView } from "react-native";
import {
  FETCH_TASKS,
  TASK_CHANGE,
  ADDED_TASK,
} from "../actions/types";

const INITIAL_STATE = {
  newTask: "",
  tasks: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      console.log("payload ", action.payload);
      return { ...state, tasks: action.payload };
    case TASK_CHANGE:
      return { ...state, newTask: action.payload };
    case ADDED_TASK:
      //add new task to list
      return { ...state, newTask: "" };
    default:
      return state;
  }
};
