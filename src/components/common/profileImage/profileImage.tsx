import axios from "axios";
import React, { useRef, useState, FC, Fragment } from "react";
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
  const [imageFile, setImageFile] = useState<any>(resourceImages.image);
  const [containsFile, setContainsFile] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [imageId, setImageId] = useState(null);
  const [progress, setProgress] = useState<number | null>(null);
  const fileInputRef: any = useRef(null);

  const UPLOAD_FILE = {
    query: `
      mutation($file: Upload!) {
        uploadFile(file: $file) {
        _id
        filename
    }
  }
    `,
  };

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
    setContainsFile(true);
  }

  const fileUpload = () => {
    const formDataObject = new FormData();
    formDataObject.append("image", imageFile, imageFile.name);

    axios
      .post(`api/image/upload`, formDataObject, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
          console.log(`${percentCompleted}%`);
        },
      })
      .then(({ data }) => {
        setImageId(data);
        setImageFile(null);
        setContainsFile(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          const errorMessage = err.response.data;
          if (errorMessage) {
            console.log(errorMessage);
          }
        } else {
          console.log("Other error");
          setContainsFile(false);
          setLoading(false);
        }
      });
  };

  const handleClick = () => {
    if (containsFile) {
      setLoading(true);
      fileUpload();
    }
  };
  return (
    <div className="profileImage">
      {loading ? (
        <div>LOADING</div>
      ) : (
        <Fragment>
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
          <label htmlFor="file" onClick={handleClick}>
            {imageFile ? <div>SUBMIT</div> : <div>REGULAR VERSION</div>}
          </label>
        </Fragment>
      )}
    </div>
  );
};

export default ProfileImage;
