import { createSlice } from "@reduxjs/toolkit";

const gptSclice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    // gptMovies:null,Export it to gptSclice
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    //     addGptMoviesResult : (state,action) => {
    //     const {moviename,movieResults} = action.payload
    //     state.moviename = moviename;
    //     state.movieResults = movieResults;
    //    }
  },
});
//movieResults
export const { toggleGptSearchView } = gptSclice.actions;
export default gptSclice.reducer;
