import { createSlice } from "@reduxjs/toolkit";

const videoDataSlice = createSlice({
    name:"videoData",
    initialState:{
        video:null,
        searchVideo:null,
    },
    reducers:{
        addVideoData : (state,action)=>{
            state.video = action.payload
        },
        addSearchVideo :(state,action)=>{
            state.searchVideo = action.payload
        }
    }
})

export const {addVideoData,addSearchVideo} = videoDataSlice.actions;
export default videoDataSlice.reducer;