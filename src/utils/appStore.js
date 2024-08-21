import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Userslice"
import moviesReducer from "./moviesSclice"

const appStore = configureStore(
    {
        reducer : {
            user : UserReducer,
            movies : moviesReducer, 
        }
    }
)
//this data goes to App root level ,top level using provider
export default appStore;