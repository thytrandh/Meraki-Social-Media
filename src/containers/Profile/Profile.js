import "../Profile/Profile.scss";
import { Link } from "react-router-dom";
import TabTimeLine from "../../components/Profile/ProfileBody/TabContent/TabTimeLine/TabTimeLine";
import TabAbout from "../../components/Profile/ProfileBody/TabContent/TabAbout/TabAbout";
import TabFriends from "../../components/Profile/ProfileBody/TabContent/TabFriends/TabFriends";
import TabGallery from "../../components/Profile/ProfileBody/TabContent/TabGallery/TabGallery";
import { SETTINGS_PAGE } from "../../settings/constant";

const Profile = () => {
  return (
    <div className="page-profile">
      <div className="profile-header  container p-0">
        <div className="banner-cover">
          <div className="background-image">
            <img src="/images/background/default-cover.jpg" alt="" />
            <div className="blur"></div>
          </div>
          <div className="container">
            <div className="user-profile">
              <div className="img-user">
                <div className="img-url">
                  <img src="/images/user/user-profile.jpg" alt="" />
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
                  <ul className="list-interactions mb-0">
                    <li className="text-white">
                      <p className="mb-0">Posts:</p>
                      <p className="text-white mb-0">1</p>
                    </li>
                    <li className="text-white">
                      <p className="mb-0">Comments:</p>
                      <p className="text-white mb-0">11</p>
                    </li>
                    <li className="text-white">
                      <p className="mb-0">Friends:</p>
                      <p className="text-white mb-0">256</p>
                    </li>
                  </ul>
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
          <div className="settings d-none d-lg-block col-lg-4">
            <Link to={SETTINGS_PAGE} className="profile-settings">
              <p className="mb-0">Profile Settings</p>
              <img src="/images/icon/iconly/edit-profile.png" alt="" />
            </Link>
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

export default Profile;
