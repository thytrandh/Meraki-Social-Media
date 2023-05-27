import { useContext, useState } from "react";
import "../CreatePost/CreatePost.scss";
import CreatePostDropdown from "./CreatePostDropdown/CreatePostDropdown";
import "./CreatePostDropdown/CreatePostDropdown.scss";

import { DataContext } from "../../context/dataContext";

const CreatePost = () => {

  const {userData, setUserData} = useContext(DataContext);
  const firstName  = userData?.firstName;
  const lastName = userData?.lastName;
  const userName = firstName + lastName;

  const imgUser = userData?.avatarLink?.imgLink;
  

  //col-sm-12
  return (
    <div className="create-post">
      <div
        className="card-create-post"
        data-bs-target="#createModalToggle"
        data-bs-toggle="modal"
      >
        <div className="card-body">
          <div className="img-user">
            <img src={imgUser} alt="" />
          </div>
          <form action="#" className="status-box">
            <input
              type="text"
              className="status-input"
              placeholder={"What's on your mind, " + userName + " ?"}
            />
          </form>
        </div>
        <div className="card-footer">
          <ul className="list-btn p-0">
            <li>
              <img src="/images/icon/icons/gallery.svg" alt="gallery" />
              <span>Photo/Video</span>
            </li>
            <li>
              <img src="/images/icon/icons/emoji.svg" alt="gallery" />
              <span>Feeling/Activity</span>
            </li>
            <li>
              <img src="/images/icon/icons/tag.svg" alt="gallery" />
              <span>TagFriends</span>
            </li>
            <li className="more">
              <div className="img-more">
                <img src="/images/icon/icons/more.svg" alt="gallery" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <CreatePostDropdown userName={userName} imgUser={imgUser} />
    </div>
  );
};

export default CreatePost;
