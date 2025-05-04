import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice(
    {
        name:"sideBar",
        initialState:{
            sideBarStatus:false},
        reducers:{
            changeSideBar:(state)=>{
                state.sideBarStatus = !state.sideBarStatus
            },
            closeSideBar:(state)=>{
                state.sideBarStatus = false
            }
        }
    }
)

export const {changeSideBar, closeSideBar} = sideBarSlice.actions;
export default sideBarSlice.reducer