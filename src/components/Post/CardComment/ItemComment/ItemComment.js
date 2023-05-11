import "../ItemComment/ItemComment.scss";

const ItemComment = ({ imgUserCmt, userNameCmt, timeCmt, contentCmt }) => {
  const commentOwner = "me";

  return (
    <li className="item-comment">
      <div className="info-comment">
        <div className="img-user">
          <img src={imgUserCmt} alt="" />
        </div>
        <div className="username">
          <h6>{userNameCmt}</h6>
        </div>
        <div className="time">
          <p className="mb-0">replied {timeCmt} ago</p>
        </div>
      </div>
      <div className="content-comment">
        <span>{contentCmt}</span>
      </div>
      {commentOwner == "me" && (
        <div className="bottom">
          <ul className="mb-0">
            <li>
              <p className="mb-0">Edit</p>
            </li>
            <li>
              <p className="mb-0">Delete</p>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default ItemComment;
