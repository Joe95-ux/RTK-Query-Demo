import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface INews {
  articles: any; // data stored from API
  currentIndex: number;
}

const initialState: INews = {
    articles: undefined,
    currentIndex: 0
};

// creating action-reducer slice
export const NewsSlice = createSlice({
  name: "news_slice",
  initialState,
  reducers: {
  // manage/control the currIndex value
    changeCurrIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeCurrIndex } = NewsSlice.actions;

export default NewsSlice.reducer;