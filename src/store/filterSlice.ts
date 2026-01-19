import { createSlice } from "@reduxjs/toolkit";
type stateType = {
  search: string;
  region: string;
};

const initialState: stateType = {
  search: "",
  region: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const { setSearch, setRegion } = filterSlice.actions;

export default filterSlice.reducer;
