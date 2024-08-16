import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Userslice"

const appStore = configureStore(
    {
        reducer : {
            user : UserReducer,
        }
    }
)

export default appStore;