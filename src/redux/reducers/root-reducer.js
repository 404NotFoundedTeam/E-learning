import { combineReducers } from "redux";
import globalReducer from "./global";
import postsReducer from "./posts";
import todosReducer from "./todos";

const rootReducer = combineReducers({
  global: globalReducer,
  todos: todosReducer,
  posts: postsReducer,
});

export default rootReducer;
