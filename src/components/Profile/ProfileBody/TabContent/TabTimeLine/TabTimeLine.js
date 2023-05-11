import { Link } from "react-router-dom";
import CreatePost from "../../../../../components/CreatePost/CreatePost";
import Post from "../../../../../components/Post/Post";
import "../TabTimeLine/TabTimeLine.scss";

const TabTimeLine = () => {
  const userName = "Marvin McKinney";
  const imgUser = "/images/user/user.jpg";
  const activity = "posted an update in the group";
  const time = "8 months";
  const status =
    "Beautiful things can happen when you distance yourself from the negative. Whatever makes you feel bad, leave it. Whatever makes you smile, keep it. It’s cool to be different and just be who you are and shock people in a good way.";
  const imgPost = "/images/blog/03.jpg";
  const listComment = [];

  const friendNumber = 40;
  const friendState = false;
  return (
    <div class="tab-pane fade show active" id="timeline-tab-pane">
      <div className="row">
        <div className="left-content col-lg-4">
          <div className="card-gallery">
            <div className="title">
              <h5>Gallery</h5>
              <Link to="/dashboard/profile#">
                <p className="mb-0">View more</p>
              </Link>
            </div>
            <div className="list-images">
              <div className="item-image">
                <img src="/images/gallery/1.jpg" alt="" />
              </div>
              <div className="item-image">
                <img src="/images/gallery/2.jpg" alt="" />
              </div>
              <div className="item-image">
                <img src="/images/gallery/3.jpg" alt="" />
              </div>
              <div className="item-image">
                <img src="/images/gallery/4.jpg" alt="" />
              </div>
              <div className="item-image">
                <img src="/images/gallery/5.jpg" alt="" />
              </div>
              <div className="item-image">
                <img src="/images/gallery/6.jpg" alt="" />
              </div>
              <div className="item-image">
                <img src="/images/gallery/7.jpg" alt="" />
              </div>
              <div className="item-image">
                <img src="/images/gallery/2.jpg" alt="" />
              </div>
              <div className="item-image">
                <img src="/images/gallery/1.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="card-list-friend">
            <div className="title">
              <h5>Friends</h5>
              <Link to="/dashboard/profile#">
                <p className="mb-0">View more</p>
              </Link>
            </div>
            <div className="list-friend">
              <div className="item-friend">
                <img src="/images/user/user-profile.jpg" alt="" />
                <p className="mb-0">Jenny Wilson</p>
              </div>
              <div className="item-friend">
                <img src="/images/user/06.jpg" alt="" />
                <p className="mb-0">Philip Ninomar</p>
              </div>
              <div className="item-friend">
                <img src="/images/user/07.jpg" alt="" />
                <p className="mb-0">Iris Cana</p>
              </div>
              <div className="item-friend">
                <img src="/images/user/08.jpg" alt="" />
                <p className="mb-0">Cana Diket</p>
              </div>
              <div className="item-friend">
                <img src="/images/user/09.jpg" alt="" />
                <p className="mb-0">Cris Wilson</p>
              </div>
              <div className="item-friend">
                <img src="/images/user/10.jpg" alt="" />
                <p className="mb-0">Anana Crew</p>
              </div>
              <div className="item-friend">
                <img src="/images/user/user-05.jpg" alt="" />
                <p className="mb-0">Anana Zona</p>
              </div>
              <div className="item-friend">
                <img src="/images/user/user-03.jpg" alt="" />
                <p className="mb-0">Anana Zona</p>
              </div>
              <div className="item-friend">
                <img src="/images/user/09.jpg" alt="" />
                <p className="mb-0">Anana Zona</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-content list-user-post col-lg-8 row m-0 ">
          <CreatePost userName={userName} imgUser={imgUser} />
          <Post
            imgUser={imgUser}
            userName={userName}
            activity={activity}
            time={time}
            status={status}
            imgPost={imgPost}
            listComment={listComment}
          />
          <Post
            imgUser={imgUser}
            userName={userName}
            activity={activity}
            time={time}
            status={status}
            imgPost={"/images/blog/02.jpg"}
            listComment={listComment}
          />
          <Post
            imgUser={imgUser}
            userName={userName}
            activity={activity}
            time={time}
            status={status}
            imgPost={"/images/blog/07.jpg"}
            listComment={listComment}
          />
          <Post
            imgUser={imgUser}
            userName={userName}
            activity={activity}
            time={time}
            status={status}
            imgPost={"/images/blog/b3.jpg"}
            listComment={listComment}
          />
        </div>
      </div>
    </div>
  );
};

export default TabTimeLine;
