import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workersList: [],
  addedWorkersList: [],
};

const workerSlice = createSlice({
  name: "workers",
  initialState,
  reducers: {
    setWorkersList: (state, action) => {
      state.workersList = action.payload;
    },
    addWorker: (state, action) => {
      state.workersList.push(action.payload);
    },
    addToAddedWorkers: (state, action) => {
      const worker = action.payload;
    //   console.log('Clicked Join with record:', worker); 

      state.addedWorkersList.push(worker);

    },
    removeWorker: (state, action) => {
      const name = action.payload;
      state.workersList = state.workersList.filter((w) => w.Name !== name);
    },
    removeJoinedWorker: (state, action) => {
        const name = action.payload;
        state.addedWorkersList = state.addedWorkersList.filter((w) => w.Name !== name);
      },
  },
});

export const { setWorkersList, addWorker, addToAddedWorkers, removeWorker,removeJoinedWorker } = workerSlice.actions;

export default workerSlice.reducer;
