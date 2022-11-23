import React from "react";
import { CiSearch } from "react-icons/ci";
import StyledGlobalHeader from "./GlobalHeader.styles";

const GlobalHeader = ({ setSearch }:
  React.Dispatch<React.SetStateAction<string>> | string | any) => {
  return (
    <StyledGlobalHeader data-testid="global-header">
      <div className="header-left">
        <div className="sky-logo">
          <img src="sky.png" alt="sky-logo" className="header-sky-logo" />
          <p className="sky-text">Music</p>
        </div>
        <div className="search">
          <CiSearch />
          <input
            type="search"
            placeholder="Search Artists, Songs, Albums"
            className="header-search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="header-right">
        <div className="sky-plus">Get SkyPlus +</div>
        <div className="sky-plus">Login / Signup</div>
      </div>
    </StyledGlobalHeader>
  );
};

export default GlobalHeader;
