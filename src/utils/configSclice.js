import { createSlice } from "@reduxjs/toolkit";


const configSclice = createSlice({
    name :"config",
    initialState:{
        lang :"english",
    },
    reducers :{
        changeLanguage:(state,action)=>{
            state.lang = action.payload;
        },
    },
});


export const {changeLanguage} = configSclice.actions;
export default configSclice.reducer;