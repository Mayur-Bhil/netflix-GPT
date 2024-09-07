import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Userslice"
import moviesReducer from "./moviesSclice"
import gptReducer from "./gptSclice"

const appStore = configureStore(
    {
        reducer : {
            user : UserReducer,
            movies : moviesReducer, 
            gpt : gptReducer
        }
    }
)
//this data goes to App root level ,top level using provider
export default appStore;