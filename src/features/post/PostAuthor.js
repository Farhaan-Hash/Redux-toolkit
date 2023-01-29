import {useSelector} from "react-redux";
import {selectAllUsers} from "../users/usersSlice";

import React from "react";

const PostAuthor = ({userId}) => {
  const users = useSelector(selectAllUsers);
  //find() method returns the first element in the provided array that satisfies the provided testing condition
  const author = users.find((user) => user.id === userId);
  return (
    <div>
      <span>by {author ? author.name : "Unknown author"}</span>
    </div>
  );
};

export default PostAuthor;
