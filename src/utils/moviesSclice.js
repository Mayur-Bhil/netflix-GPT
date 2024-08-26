
import { createSlice } from "@reduxjs/toolkit";

const moviesSclice = createSlice({
    name : 'movies',
    initialState : {
        nowPlayingMovies : null,
        trailerVideo :null,
    },
    reducers : {
      addNowPlayingMovies : (state,action) => {
          state.nowPlayingMovies = action.payload;
      },
      addTrailerVideos :(state,action) => {
        state.trailerVideo =  action.payload;
      }
    }
})
export const {addNowPlayingMovies,addTrailerVideos} = moviesSclice.actions;

export default moviesSclice.reducer;
