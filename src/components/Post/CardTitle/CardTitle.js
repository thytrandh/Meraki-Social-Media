import { useState } from "react";
import "../CardTitle/CardTitle.scss";

const CardTitle = ({ userName, activity, time }) => {
  const [dropdown, setDropdown] = useState(false);
  const handleClickDropdown = () => {
    setDropdown(!dropdown);
  };

  //me or myFriend
  const postOwner = "me";

  return (
    <div className="card-title">
      <div className="user-post-data">
        <div className="img-user">
          <img src="/images/user/user.jpg" alt="" />
        </div>
        <div className="info">
          <div className="d-flex">
            <div className="username mr-2">
              <p className="mb-0">{userName}</p>
            </div>
            <div className="tick mr-2">
              <i class="fa-regular fa-check"></i>
            </div>
            <div className="activity">
              <p className="mb-0">{activity}</p>
            </div>
          </div>
          <div className="time">
            <span>{time} ago</span>
          </div>
        </div>

        <div
          className="more"
          onClick={() => {
            handleClickDropdown();
          }}
        >
          <i class="fa-regular fa-ellipsis"></i>
          {dropdown && (
            <div className="more-dropdown">
              {postOwner == "me" ? (
                <ul className="mb-0">
                  <li>
                    <p className="mb-0">Delete Post</p>
                  </li>
                  <li>
                    <p className="mb-0">Edit Post</p>
                  </li>
                </ul>
              ) : (
                <ul className="mb-0">
                  <li>
                    <p className="mb-0">Report Post</p>
                  </li>
                  <li>
                    <p className="mb-0">Hidden Post</p>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardTitle;
