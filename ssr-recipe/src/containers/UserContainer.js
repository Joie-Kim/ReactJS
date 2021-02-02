import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../components/User";
import { usePreloader } from "../lib/PreloadContext";
import { getUser } from "../modules/users";

const UserContainer = ({ id }) => {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  usePreloader(() => dispatch(getUser(id)));
  useEffect(() => {
    if (user && user.id === parseInt(id, 10)) return; // 사용자가 존재하고, id가 일치하면 요청 안 함
    dispatch(getUser(id));
  }, [dispatch, id, user]); // id가 바뀔 때 새로 요청

  if (!user) return null;
  return <User user={user} />;
};

export default UserContainer;
