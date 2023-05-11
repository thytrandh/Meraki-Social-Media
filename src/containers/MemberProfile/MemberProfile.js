import TabAbout from "../../components/Profile/ProfileBody/TabContent/TabAbout/TabAbout";
import TabFriends from "../../components/Profile/ProfileBody/TabContent/TabFriends/TabFriends";
import TabGallery from "../../components/Profile/ProfileBody/TabContent/TabGallery/TabGallery";
import TabTimeLine from "../../components/Profile/ProfileBody/TabContent/TabTimeLine/TabTimeLine";
import "../MemberProfile/MemberProfile.scss";
import { Link } from "react-router-dom";

const MemberProfile = () => {
  const profileOwner = 4;
  return (
    <div className="page-member-profile">
      <div className="profile-header  container p-0">
        <div className="banner-cover">
          <div className="background-image">
            <img src="/images/background/banner-01.jpg" alt="" />
            <div className="blur"></div>
          </div>
          <div className="container">
            <div className="user-profile">
              <div className="img-user">
                <div className="img-url">
                  <img src="/images/user/user-member.jpg" alt="" />
                </div>
              </div>
              <div className="profile-detail">
                <div className="profile-name">
                  <div className="username">
                    <p className="text-white mb-0">Andre Dubus</p>
                  </div>
                  <div className="email-address">
                    <span className="text-white">@Jenny Wilson</span>
                  </div>
                </div>
                <div className="profile-interaction">
                  <ul className="list-social-link mb-0">
                    <li className="pr-3 facebook">
                      <a href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="pr-3 instagram">
                      <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li className="pr-3 google">
                      <a href="#">
                        <i class="fa-brands fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li className="pr-3 dribble">
                      <a href="#">
                        <i class="fa-regular fa-basketball"></i>
                      </a>
                    </li>
                    <li className="pr-3 youtube">
                      <a href="#">
                        <i class="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="connect">
                    {profileOwner == 1 && (
                      <div className="stranger list-btn">
                        <div className="btn-connect btn-add-friend">
                          <p className="mb-0">Add Friend</p>
                        </div>
                        <Link to="chat/:memberId" className="btn-message">
                          <i class="bi bi-messenger"></i>
                        </Link>
                      </div>
                    )}
                    {profileOwner == 2 && (
                      <div className="friend-request list-btn">
                        <div className="btn-connect btn-cancel-request">
                          <p className="mb-0">Cancel Request</p>
                        </div>
                        <Link to="chat/:memberId" className="btn-message">
                          <i class="bi bi-messenger"></i>
                        </Link>
                      </div>
                    )}
                    {profileOwner == 3 && (
                      <div className="friend-ship list-btn">
                        <div className="btn-connect btn-unfriend">
                          <p className="mb-0">Unfriend</p>
                        </div>
                        <Link to="chat/:memberId" className="btn-message">
                          <i class="bi bi-messenger"></i>
                        </Link>
                      </div>
                    )}
                    {profileOwner == 4 && (
                      <div className="confirm-request list-btn">
                        <div className="btn-connect btn-confirm">
                          <p className="mb-0">Confirm</p>
                        </div>
                        <div className="btn-connect btn-reject">
                          <p className="mb-0">Delete</p>
                        </div>
                        <Link to="chat/:memberId" className="btn-message">
                          <i class="bi bi-messenger"></i>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-body container">
        <div className="menu row ml-0 mr-0">
          <div className="tab-menu col-md-12 col-lg-8">
            <ul class="nav">
              <li className="tab-timeline">
                <div
                  className="btn-tab-timeline nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#timeline-tab-pane"
                  aria-selected="true"
                >
                  Time line
                </div>
              </li>
              <li className="tab-about">
                <div
                  className="btn-tab-about nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#about-tab-pane"
                >
                  About
                </div>
              </li>
              <li className="tab-friends">
                <div
                  className="btn-tab-friends nav-link "
                  data-bs-toggle="tab"
                  data-bs-target="#friends-tab-pane"
                >
                  Friends
                </div>
              </li>
              <li className="tab-gallery">
                <div
                  className="btn-tab-gallery nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#gallery-tab-pane"
                >
                  Gallery
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-content">
          <TabTimeLine />
          <TabAbout />
          <TabFriends />
          <TabGallery />
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;