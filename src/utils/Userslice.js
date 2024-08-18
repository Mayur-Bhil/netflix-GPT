import { createSlice } from "@reduxjs/toolkit";

const Userslice = createSlice({
    name : 'user',
    initialState : null,
    reducers : {
        addUser : (state,action) => {
                return action.payload;
        },
        removeUser : (state,action) => {
            return null;
        }
    }
})
//this data goes to appstore
export const {addUser,removeUser} = Userslice.actions;
export default Userslice.reducer;
