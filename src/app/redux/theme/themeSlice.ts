import { createSlice } from "@reduxjs/toolkit";

interface Props {
  theme: string;
}

const initialState: Props = {
  theme: "blue",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toBlue: (state) => {
      state.theme = "blue";
    },
    toGreen: (state) => {
      state.theme = "green";
    },
    toRed: (state) => {
      state.theme = "red";
    },
  },
});

export default themeSlice.reducer;
export const { toBlue, toGreen, toRed } = themeSlice.actions;
