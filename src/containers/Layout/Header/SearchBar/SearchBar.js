import { useState } from "react";
import "../SearchBar/SearchBar.scss";
import OutsideClickHandler from "react-outside-click-handler";
import SearchForm from "./SearchForm/SearchForm";
import SearchResultBox from "./SearchResultBox/SearchResultBox";

const SearchBar = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setDropdown(false);
      }}
    >
      <div className="search-bar">
        <div
          onClick={() => {
            handleDropdown();
          }}
        >
          <SearchForm />
        </div>
        {dropdown && <SearchResultBox />}
      </div>
    </OutsideClickHandler>
  );
};

export default SearchBar;
