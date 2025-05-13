import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { generateRandomMsg} from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chatData.messages);
  const [liveMsg, setLiveMsg] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      // const messageAPI = async () => {
      //   const data = await fetch(
      //     "https://mocki.io/v1/552c8751-566e-4267-ae90-1f607cb2b71a"
      //   );
      //   const json = await data.json();
      //   json.forEach((msg) => dispatch(addMessages(msg)));
      //   console.log(messages);
      // };
      // messageAPI();

      dispatch(addMessages({
        name:generateRandomName(),
        message:generateRandomMsg(),
      }))
    }, 4000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-10/12 h-[450px] mx-6 p-2 border border-gray-100 rounded-t-lg bg-gray-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {messages.map((x, index) => (
            <ChatMessage key={index} name={x.name} message={x.message} />
          ))}
        </div>
      </div>
      <form
        className="py-2 ml-6 h-[60px] w-10/12 rounded-b-lg border px-2 border-gray-200 flex justify-between"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="w-10/12 p-2 rounded-full bg-gray-200 border border-gray-200"
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
        />
        <button
          className="border border-gray-200 cursor-pointer hover:bg-gray-300 bg-gray-200 p-2 w-18 rounded-lg"
          onClick={() => { 
            dispatch(
              addMessages({
                name: "surya",
                message: liveMsg,
              })
            );
            setLiveMsg("");
          }}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
