import { createSlice } from "@reduxjs/toolkit";
import { liveChatCount } from "./constants";

const chatSlice = createSlice({
  name: "chatData",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages.splice(liveChatCount,1);
      state.messages.push(action.payload);
      // assign new reference
    },
  },
});

export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;
