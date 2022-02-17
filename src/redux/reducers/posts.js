import * as t from "../types";

const initialState = {
  lists: [
    {
      title: "List 01",
      tasks: [{ title: "task 01", completed: false }],
    },
    {
      title: "List 02",
      tasks: [{ title: "task one", completed: true }],
    },
  ],
};

const postsReducer = (state = initialState, action) => {
  switch(action.type){
      default: return state;
  }
};

export default postsReducer;