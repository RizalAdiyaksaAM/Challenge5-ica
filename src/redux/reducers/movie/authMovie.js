import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
  };

const authMovie = createSlice({ 
    name : "movieAuth",
    initialState ,
    reducers :{
        setMovieData: (state, action) => {
            state.movies = action.payload;
          },
    }
 })

 export const {setMovieData} = authMovie.actions
 export default authMovie.reducer;