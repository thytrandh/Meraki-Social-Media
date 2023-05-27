import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CardBoxAdvertisement from "../../components/CardAdvertisement/CardBoxAdvertisement/CardBoxAdvertisement";
import CardeCommerceAdvertising from "../../components/CardAdvertisement/CardeCommerceAdvertising/CardeCommerceAdvertising";
import CreatePost from "../../components/CreatePost/CreatePost";
import ItemFriendSuggestion from "../../components/ItemFriendSuggestion/ItemFriendSuggestion";
import Post from "../../components/Post/Post";
import "../Home/Home.scss";
import BannerHeader from "../../components/BannerHeader/BannerHeader";
import { DataContext } from "../../context/dataContext";

const Home = () => {
  const userName = "Marvin McKinney";
  const imgUser = "/images/user/user.jpg";
  const activity = "posted an update in the group";
  const time = "8 months";
  const status =
    "Beautiful things can happen when you distance yourself from the negative. Whatever makes you feel bad, leave it. Whatever makes you smile, keep it. It’s cool to be different and just be who you are and shock people in a good way.";
  const imgPost = "images/blog/03.jpg";
  const listComment = [];

  const friendNumber = 40;
  const friendState = false;

  const { newFeedData, setNewFeedData, userData } = useContext(DataContext);
 
  return (
    <div className="home page-home container">
      <div className="row">
        <BannerHeader
          subject={"Members Newsfeed"}
          decription={"Check what your friends have been up to!"}
        />
        <div className="news-feed col-xl-8 row m-0 p-0">
          <CreatePost userName={userName} imgUser={imgUser} />
          {newFeedData &&
            newFeedData.map((post) => (
              <Post
                key={post.id}
                imgUser={userData?.avatarLink?.imgLink}
                idPost={post.id}
                userPost={post.userPost}
                imgUserPost={post?.userPost?.avatar}
                activity={activity}
                time={post.createDate}
                status={post.content}
                imgPost={post?.images?.imgLink}
                listComment={post.commentList}
              />
            ))}
        </div>
        <div className="card-advertisement advertisement col-xl-4 d-xl-block">
          <CardeCommerceAdvertising />
          <div className="card-friend-suggest">
            <div className="title">
              <h5>Suggestion For You</h5>
            </div>
            <div className="list-friend-suggest">
              <ItemFriendSuggestion
                imgUser={imgUser}
                userName={userName}
                friendNumber={friendNumber}
                friendState={friendState}
              />
              <ItemFriendSuggestion
                imgUser={"/images/user/user-01.jpg"}
                userName={userName}
                friendNumber={friendNumber}
                friendState={friendState}
              />
              <ItemFriendSuggestion
                imgUser={"/images/user/user-03.jpg"}
                userName={userName}
                friendNumber={friendNumber}
                friendState={friendState}
              />
              <ItemFriendSuggestion
                imgUser={"/images/user/user-04.jpg"}
                userName={userName}
                friendNumber={friendNumber}
                friendState={friendState}
              />
            </div>
          </div>
          <CardBoxAdvertisement />
        </div>
      </div>
    </div>
  );
};

export default Home;
