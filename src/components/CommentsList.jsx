import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((x, index) => (
    <div>
      <Comment key={index} data={x} />
      <div className="pl-3 my-2 border-l-1 ml-5">
        <CommentsList comments={x.reply} />
      </div>
    </div>
  ));
};

export default CommentsList;
