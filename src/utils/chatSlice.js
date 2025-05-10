import { createSlice } from "@reduxjs/toolkit";
import { liveChatCount } from "./constants";

const chatSlice = createSlice({
  name: "chatData",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      if (state.messages.length >= liveChatCount) {
        state.messages.pop(); // removes last (oldest) message
      }
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;
