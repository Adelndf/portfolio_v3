import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./redux/theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
