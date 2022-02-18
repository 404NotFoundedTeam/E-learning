import { combineReducers } from "redux";
import globalReducer from "./global";
import postsReducer from "./posts";

const rootReducer = combineReducers({
  global: globalReducer,
  posts: postsReducer,
});

export default rootReducer;
