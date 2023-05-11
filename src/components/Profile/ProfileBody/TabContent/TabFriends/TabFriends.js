import { Link } from "react-router-dom";
import "../TabFriends/TabFriends.scss";
import ItemFriend from "./ItemFriend";

const TabFriends = () => {
  const userName = "Jenny Wilson";
  const friendNumber = "10;";
  return (
    <div class="tab-pane fade" id="friends-tab-pane">
      <div className="title">
        <h4>Friends</h4>
      </div>
      <div className="friend-list">
        <ItemFriend
          imgUser={"/images/user/user-05.jpg"}
          userName={userName}
          friendNumber={10}
        />
        <ItemFriend
          imgUser={"/images/user/user-06.jpg"}
          userName={userName}
          friendNumber={10}
        />
        <ItemFriend
          imgUser={"/images/user/14.jpg"}
          userName={userName}
          friendNumber={10}
        />
        <ItemFriend
          imgUser={"/images/user/15.jpg"}
          userName={userName}
          friendNumber={10}
        />
        <ItemFriend
          imgUser={"/images/user/16.jpg"}
          userName={userName}
          friendNumber={10}
        />
        <ItemFriend
          imgUser={"/images/user/17.jpg"}
          userName={userName}
          friendNumber={10}
        />
        <ItemFriend
          imgUser={"/images/user/18.jpg"}
          userName={userName}
          friendNumber={10}
        />
        <ItemFriend
          imgUser={"/images/user/05.jpg"}
          userName={userName}
          friendNumber={10}
        />
        <ItemFriend
          imgUser={"/images/user/06.jpg"}
          userName={userName}
          friendNumber={10}
        />
        <ItemFriend
          imgUser={"/images/user/07.jpg"}
          userName={userName}
          friendNumber={10}
        />
      </div>
    </div>
  );
};

export default TabFriends;
