import { configureStore } from "@reduxjs/toolkit";
import albumSlice from "./album-slice";

const store = configureStore({
  reducer: {
    albumActions: albumSlice,
  },
});

export type RootState = ReturnType< typeof store.getState>;
export default store;
