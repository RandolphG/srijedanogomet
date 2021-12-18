import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles/_registrationStyles.scss";

/**
 * Registration
 **/
const Registration = () => {
  // const player = useSelector(getPlayer);
  const dispatch = useDispatch();
  const [playerInfo, setPlayerInfo] = useState<any>({
    name: "Randi",
    email: "randolph.gordon@poplogics.com",
    height: "183cm",
    tags: ["attacker", "defense", "midfielder"],
    isInEditMode: false,
  });

  function onChange(event: any) {
    // dispatch(handleInputChange({ [event.target.name]: event.target.value }));
  }

  function onClick(event: any) {
    setPlayerInfo({
      ...playerInfo,
      isInEditMode: !playerInfo.isInEditMode,
    });
  }

  return (
    <div className="registration">
      <div className="registration_container">
        <div className="registration_container_max">
          <div className="registration_container_max_title">Registration</div>
          <button
            className="registration_container_max_editButton"
            onClick={onClick}
          >
            Edit
          </button>
          {playerInfo.isInEditMode ? (
            <input
              className="registration_container_max_labelName"
              type="text"
              name="name"
              id="name"
              value={playerInfo.name}
              onChange={onChange}
            />
          ) : (
            <div className="registration_container_max_label">
              {playerInfo.name}
            </div>
          )}
          {playerInfo.isInEditMode ? (
            <input
              className="registration_container_max_labelHeight"
              type="text"
              name="height"
              id="name"
              value={playerInfo.height}
              onChange={onChange}
            />
          ) : (
            <div className="registration_container_max_label">
              {playerInfo.height}
            </div>
          )}
          {playerInfo.isInEditMode ? (
            <input
              className="registration_container_max_labelEmail"
              type="text"
              name="email"
              id="name"
              value={playerInfo.email}
              onChange={onChange}
            />
          ) : (
            <div className="registration_container_max_label">
              {playerInfo.email}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
