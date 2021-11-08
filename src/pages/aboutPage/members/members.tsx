import React from "react";
import "./styles/_membersStyles.scss";
import { membersImages } from "../../../resources/";

/**
 * Members
 * @constructor
 */
const Members = () => {
  const boardMembers = [
    {
      name: "Efua Bonney",
      title: "President",
      image: membersImages.membersFemaleA,
    },
    {
      name: "Emmanuel Ofosu Ameyaw",
      title: "First Vice President",
      image: membersImages.membersMaleA,
    },
    {
      name: "Prince Boateng",
      title: "Second Vice President",
      image: membersImages.membersMaleA,
    },
    {
      name: "Rebecca Laumann",
      title: "Secretary",
      image: membersImages.membersFemaleB,
    },
  ];

  return (
    <ul className="list-members">
      {boardMembers.map(({ name, title, image }) => (
        <li className="member">
          <div className="member-image">
            <img alt="members" src={image} />
          </div>
          <div className="member-info">
            <h3>{name}</h3>
            <p>{title}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Members;
