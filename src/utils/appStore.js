import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarSlice"
import videoDataReducer from "./videoDataSlice"
import searchReducer from "./searchSlice"
import chatReducer from "./chatSlice"

const appStore = configureStore(
    {
        reducer:{
            sideBar:sideBarReducer,
            videoData : videoDataReducer,
            search : searchReducer,
            chatData :chatReducer,
        }
    }
)

export default appStore