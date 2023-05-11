import { useState } from "react";
import CardBody from "./CardBody/CardBody";
import CardFooter from "./CardFooter/CardFooter";
import CardTitle from "./CardTitle/CardTitle";

const Post = ({
  imgUser,
  userName,
  activity,
  time,
  status,
  imgPost,
  listComment,
}) => {
  return (
    <div className="post col-sm-12">
      <div className="card-post">
        <CardTitle userName={userName} activity={activity} time={time} />
        <CardBody status={status} imgPost={imgPost} />
        <CardFooter imgUser={imgUser} listComment={listComment} />
      </div>
    </div>
  );
};

export default Post;
