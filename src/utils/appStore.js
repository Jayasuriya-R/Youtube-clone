import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarSlice"

const appStore = configureStore(
    {
        reducer:{
            sideBar:sideBarReducer
        }
    }
)

export default appStore