import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice(
    {
        name:"sideBar",
        initialState:{
            sideBarStatus:false,
            searchText:null},
        reducers:{
            changeSideBar:(state)=>{
                state.sideBarStatus = !state.sideBarStatus
            },
            closeSideBar:(state)=>{
                state.sideBarStatus = false
            },
            addSearchText:(state,action) =>{
                state.searchText = action.payload
            }
        }
    }
)

export const {changeSideBar, closeSideBar,addSearchText} = sideBarSlice.actions;
export default sideBarSlice.reducer