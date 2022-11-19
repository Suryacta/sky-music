import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getAlbumData from "../api/album";

export const fetchAlbumData: any = createAsyncThunk("albumData", getAlbumData);

const initialState = {
  loading: false,
  album: {},
  error: {},
};
const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    albums: (state, payload) => {
      state.album = payload;
    },
  },
  extraReducers: {
    [fetchAlbumData.pending]: (state) => {
      state.loading = true;
    },
    [fetchAlbumData.fulfilled]: (state, payload) => {
      return { ...state, album: payload, loading: false };
    },
    [fetchAlbumData.rejected]: (state, err) => {
      state.loading = false;
      state.error = err.error;
    },
  },
});
export const albumActions = albumSlice.actions;
export default albumSlice.reducer;
