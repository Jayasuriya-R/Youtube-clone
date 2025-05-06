import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarSlice"
import videoDataReducer from "./videoDataSlice"
import searchReducer from "./searchSlice"

const appStore = configureStore(
    {
        reducer:{
            sideBar:sideBarReducer,
            videoData : videoDataReducer,
            search : searchReducer
        }
    }
)

export default appStore