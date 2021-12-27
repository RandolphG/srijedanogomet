import React, { useRef, useState, FC } from "react";
import { resourceImages } from "../../../resources";
import "./styles/_profileImage.scss";

/*TODO
 *  react forms: tools for input manipulation
 *  */

/**
 * Profile Image
 * @returns {JSX.Element}
 * @constructor
 */
const ProfileImage: FC = () => {
  const [imageFile, setImageFile] = useState(resourceImages.image);
  const fileInputRef: any = useRef(null);

  function photoUpload(event: any) {
    const file = event;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (theFile) => {
      const data: any = {
        blob: theFile?.target?.result,
        name: file.name,
      };
      setImageFile(data.blob);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  function handleFileInput(event: any) {
    event.preventDefault();
    photoUpload(event.target.files[0]);
  }

  return (
    <div className="profileImage">
      <img
        onClick={(event) => {
          fileInputRef.current && fileInputRef.current.click();
        }}
        className="profileImage__img"
        src={imageFile}
        alt="profileImage_img"
      />
      <input
        ref={fileInputRef}
        style={{ display: "none" }}
        id="photo-upload"
        type="file"
        accept="image/*"
        onChange={handleFileInput}
      />
    </div>
  );
};

export default ProfileImage;
