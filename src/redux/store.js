import { configureStore } from "@reduxjs/toolkit";
import workerSlice from "./workerSlice";

export const store = configureStore({
  reducer: {
    workers: workerSlice,
  },
});

