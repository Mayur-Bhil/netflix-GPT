import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Userslice"

const appStore = configureStore(
    {
        reducer : {
            user : UserReducer,
        }
    }
)
//this data goes to App root level ,top level using provider
export default appStore;