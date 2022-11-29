import { configureStore } from "@reduxjs/toolkit";
import coT from "./counter/counterSlice";

export default configureStore({
  reducer: {
    coT: coT,
  },
});
