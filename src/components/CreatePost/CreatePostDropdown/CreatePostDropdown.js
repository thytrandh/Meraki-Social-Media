import { useState } from "react";

const CreatePostDropdown = ({ userName, imgUser }) => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  const [postContent, setPostContent] = useState(null);
  return (
    <div
      className="create-post-dropdown modal fade"
      id="exampleModalToggle"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
              Create Post
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form action="#">
              <div class="info-user">
                <img src={imgUser} alt="logo" />
                <div class="details">
                  <h5>{userName}</h5>
                  <div class="privacy">
                    <i class="fas fa-user-friends"></i>
                    <span>Friends</span>
                    <i class="fas fa-caret-down"></i>
                  </div>
                </div>
              </div>
              <div className="content">
                <textarea
                  placeholder={"What's on your mind, " + userName + " ?"}
                  spellcheck="false"
                  required
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                ></textarea>
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
                      <div className="title">
                        <div className="img-gallery">
                          <img src="/images/icon/iconly/upload.png" alt="" />
                        </div>
                        <h6>Add photos/videos</h6>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              className={
                postContent || image
                  ? "btn-post btn-post-enable"
                  : "btn-post btn-post-unable"
              }
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostDropdown;
