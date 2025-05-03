import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarSlice"
import videoDataReducer from "./videoDataSlice"

const appStore = configureStore(
    {
        reducer:{
            sideBar:sideBarReducer,
            videoData : videoDataReducer
        }
    }
)

export default appStore