import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movieDetail: ""
  };

const authDetail = createSlice({ 
    name : "movieDetailAuth",
    initialState ,
    reducers :{
        setDetail: (state, action) => {
            state.movieDetail = action.payload;
          },
    }
 })

 export const { setDetail } = authDetail.actions
 export default authDetail.reducer;