import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice(
    {
        name:"sideBar",
        initialState:{
            sideBarStatus:false},
        reducers:{
            changeSideBar:(state)=>{
                state.sideBarStatus = !state.sideBarStatus
            }
        }
    }
)

export const {changeSideBar} = sideBarSlice.actions;
export default sideBarSlice.reducer