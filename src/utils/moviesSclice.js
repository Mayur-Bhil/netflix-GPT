
import { createSlice } from "@reduxjs/toolkit";

const moviesSclice = createSlice({
    name : 'movies',
    initialState : {
        nowPlayingMovies : null,
        trailerVideo :null,
        popularMovies:null,
        topRatedOnly:null,
        upcomming :null,
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
      },
      addTopRatedMovies :(state,action) => {
        state.topRatedOnly =  action.payload;
      },
      addUpCommingMovies :(state,action) => {
        state.upcomming =  action.payload;
      }
    }
})
export const {addNowPlayingMovies,addTrailerVideos,addPopularMovies,addTopRatedMovies,addUpCommingMovies} = moviesSclice.actions;

export default moviesSclice.reducer;
