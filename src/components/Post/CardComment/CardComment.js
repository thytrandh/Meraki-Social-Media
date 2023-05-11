import "../CardComment/CardComment.scss";
import ItemComment from "./ItemComment/ItemComment";

const CardComment = ({ imgUser, listComment }) => {
  //list comment => render..............
  const imgUserCmt = "/images/user/user-01.jpg";
  const userNameCmt = "Jerry Willioms";
  const timeCmt = " a day";
  const contentCmt = "Wao! So Beautiful";
  ///////////////////////////////////////////////////
  return (
    <div className="card-comment collapse" id="collapseComment">
      <form action="#" className="comment-box">
        <div className="img-user">
          <img src={imgUser} alt="" />
        </div>
        <input
          type="text"
          className="comment-input"
          placeholder="Write a Comment..."
        />
        <div className="btn-send-comment">
          <i class="fa-light fa-paper-plane"></i>
        </div>
      </form>
      <div className="list-comment">
        <ul className="mb-0">
          <ItemComment
            imgUserCmt={imgUserCmt}
            userNameCmt={userNameCmt}
            timeCmt={timeCmt}
            contentCmt={contentCmt}
          />
        </ul>
      </div>
    </div>
  );
};

export default CardComment;
