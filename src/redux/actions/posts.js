import { dispatch } from "../store";
import * as t from "../types";

export const addList = (value) => {
  dispatch({ type: t.ADD_LIST, payload: { value } });
};

export const addTask = (listIndex, titleTask) => {
  dispatch({ type: t.ADD_TASK, payload: { listIndex, titleTask } });
};

export const removeTask = (listIndex, taskIndex) => {
  dispatch({ type: t.REMOVE_TASK, payload: { listIndex, taskIndex } });
};

export const editTask = (listIndex, taskIndex, newTitle) => {
  dispatch({ type: t.EDIT_TASK, payload: { listIndex, taskIndex, newTitle } });
};
