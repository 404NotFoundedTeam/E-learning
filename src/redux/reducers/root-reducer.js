import { combineReducers } from "redux";
import globalReducer from "./global";
import postsReducer from "./posts";
import coursesReducer from "./courses";

const rootReducer = combineReducers({
  global: globalReducer,
  posts: postsReducer,
  courses: coursesReducer,
});

export default rootReducer;
