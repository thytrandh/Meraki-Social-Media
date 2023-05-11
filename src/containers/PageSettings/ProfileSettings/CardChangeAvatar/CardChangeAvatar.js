import { useState } from "react";
import "../CardChangeAvatar/CardChangeAvatar.scss";

const CardChangeAvatar = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  return (
    <div className="card-change-avatar">
      <div className="title">
        <h5>Change Avatar Photo</h5>
      </div>
      <div
        className="upload-image"
        onClick={() => document.querySelector(".input-filed").click()}
      >
        <input
          type="file"
          accept="image/*"
          className="input-filed"
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }
          }}
        />

        {image ? (
          <div className="img-upload">
            <img src={image} />
          </div>
        ) : (
          <div className="add-files">
            <div className="title-files">
              <div className="img-gallery">
                <img src="/images/icon/iconly/upload.png" alt="" />
              </div>
              <h5>Select your photo</h5>    
            </div>
          </div>
        )}
      </div>
      <div className="footer">
        <div className="btn-save-change">
          <p className="mb-0">SAVE CHANGES</p>
        </div>
      </div>
    </div>
  );
};

export default CardChangeAvatar;
