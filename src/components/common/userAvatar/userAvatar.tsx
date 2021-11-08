import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { avatar } from "../../../resources";
import {
  getSignInModalState,
  requestShowSignInModalSuccess,
} from "../../../state-mgmt/store";
import "./styles/_userAvatarStyles.scss";

/**
 * UserAvatar
 * @constructor
 */
const UserAvatar = () => {
  const dispatch = useDispatch();
  const show = useSelector(getSignInModalState);

  function onClick() {
    dispatch(requestShowSignInModalSuccess({ show: !show }));
  }

  return (
    <div className="avatarContainer">
      <div className="user-avatar" onClick={onClick}>
        <img alt="avatar" className="avatar" src={avatar.image} />
        <div className="status-overlay">
          <i className="bowtie-icon bowtie-status-success success" />
        </div>
      </div>
    </div>
  );
};

export default UserAvatar;
