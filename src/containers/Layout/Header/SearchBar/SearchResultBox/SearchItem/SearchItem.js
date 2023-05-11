import { useState } from "react";
import "../SearchItem/SearchItem.scss";

const SearchItem = ({ imgUser, userName, friendNumber, friendState }) => {
  const [clickAdd, setClickAdd] = useState(friendState);
  //console.log(friendState);
  const handleClickBtnAdd = () => {
    setClickAdd(!clickAdd);

    //dispatch friendState
  };
  //console.log(clickAdd);

  return (
    <div className="search-item item-user">
      <div className="sub-card sub-card-big d-flex align-items-center justify-content-between">
        <div className="info-user">
          <div className="img-avatar">
            <img className=" rounded-circle" src={imgUser} alt="" />
          </div>
          <div className="content media-body ml-3">
            <div className="req">
              <h6 className="mb-0 ">{userName}</h6>
              <p className="mb-0">{friendNumber} mutual friends</p>
            </div>
            <div class="btn-request">
              {clickAdd ? (
                <button
                  className="btn-add"
                  onClick={() => {
                    handleClickBtnAdd();
                  }}
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
              ) : (
                <button
                  className="btn-friended"
                  onClick={() => {
                    handleClickBtnAdd();
                  }}
                >
                  <p>Friended</p>
                </button>
              )}
              <button className="btn-remove">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
