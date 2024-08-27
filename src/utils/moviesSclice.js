
import { createSlice } from "@reduxjs/toolkit";

const moviesSclice = createSlice({
    name : 'movies',
    initialState : {
        nowPlayingMovies : null,
        trailerVideo :null,
        popularMovies:null,
    },
    reducers : {
      addNowPlayingMovies : (state,action) => {
          state.nowPlayingMovies = action.payload;
      },
      addPopularMovies : (state,action) => {
          state.popularMovies = action.payload;
      },
      addTrailerVideos :(state,action) => {
        state.trailerVideo =  action.payload;
      }
    }
})
export const {addNowPlayingMovies,addTrailerVideos,addPopularMovies} = moviesSclice.actions;

export default moviesSclice.reducer;
