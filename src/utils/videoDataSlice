import { createSlice } from "@reduxjs/toolkit";

const videoDataSlice = createSlice({
    name:"videoData",
    initialState:{
        video:null
    },
    reducers:{
        addVideoData : (state,action)=>{
            state.video = action.payload
        }
    }
})

export const {addVideoData} = videoDataSlice.actions;
export default videoDataSlice.reducer;