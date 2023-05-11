import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import "../SearchResultBox/SearchResultBox.scss";
import ItemSuggestion from "./SuggestionItem/ItemSuggestion";
import "../SearchResultBox/SuggestionItem/ItemSuggestion.scss";
import SearchItem from "./SearchItem/SearchItem";

const SearchResultBox = () => {
  const userName = "Jenny Wilson";
  const imgUser = "/images/user/user-01.jpg";

  const friendNumber = "10";

  //Neu la ban be la true
  const friendState = true;

  return (
    <div className="sub-dropdown search-box-dropdown">
      <div className="card">
        <div className="card-body">
          <div className="search-result">
            <div className="title">
              <h5>Search Results</h5>
            </div>
            <div className="list-result">
              <SearchItem
                imgUser={imgUser}
                userName={userName}
                friendNumber={friendNumber}
                friendState={friendState}
              />
              <SearchItem
                imgUser={imgUser}
                userName={userName}
                friendNumber={friendNumber}
                friendState={friendState}
              />
              <SearchItem
                imgUser={imgUser}
                userName={userName}
                friendNumber={friendNumber}
                friendState={friendState}
              />
               <SearchItem
              imgUser={imgUser}
              userName={userName}
              friendNumber={friendNumber}
              friendState={friendState}/>
            </div>
          </div>
          <div className="suggestion">
            <div className="title">
              <h5>Suggestion For You</h5>
            </div>
            <div className="list-suggestion">
              <Carousel showArrows={false} itemsToShow={5} pagination={false}>
                <ItemSuggestion imgUser={imgUser} userName={userName} />
                <ItemSuggestion imgUser={imgUser} userName={userName} />
                <ItemSuggestion imgUser={imgUser} userName={userName} />
                <ItemSuggestion imgUser={imgUser} userName={userName} />
                <ItemSuggestion imgUser={imgUser} userName={userName} />
                <ItemSuggestion imgUser={imgUser} userName={userName} />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultBox;
