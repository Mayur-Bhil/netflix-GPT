import { createSlice } from "@reduxjs/toolkit";




const gptSclice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch :false
    },
    reducers:{
        toggleGptSearchView : (state)=>{
            state.showGptSearch = !state.showGptSearch;
            },
    }
})

export const{toggleGptSearchView} = gptSclice.actions;    
export default gptSclice.reducer;