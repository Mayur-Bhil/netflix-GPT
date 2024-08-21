
import { createSlice } from "@reduxjs/toolkit";

const moviesSclice = createSlice({
    name : 'movies',
    initialState : {
        nowPlayingMovies : null,
    },
    reducers : {
      addnowPlayingMovies : (state,action) => {
          state.nowPlayingMovies = action.payload;
      }
    }
})
export const {addnowPlayingMovies} = moviesSclice.actions;
export default moviesSclice.reducer;
