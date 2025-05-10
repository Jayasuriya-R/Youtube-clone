import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chatData.messages);

  useEffect(() => {
    const i = setInterval(() => {
      const messageAPI = async () => {
        const data = await fetch(
          "https://mocki.io/v1/552c8751-566e-4267-ae90-1f607cb2b71a"
        );
        const json = await data.json(); // ✅ Don't use `const` here
        // dispatch(addMessages(json))

        console.log("api polling")
        json.forEach(msg => dispatch(addMessages(msg)));
      };
      // Stop after all messages are added

      messageAPI();
    }, 500);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className="w-10/12 h-[500px] mx-6 p-2 border border-black rounded-lg bg-gray-100 overflow-y-scroll flex flex-col-reverse">
      {messages.map((x, index) => (
        <ChatMessage key={index} name={x.name} message={x.message} />
      ))}
    </div>
  );
};

export default LiveChat;
