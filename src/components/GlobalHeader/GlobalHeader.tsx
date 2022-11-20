import React from "react";
import StyledGlobalHeader from "./GlobalHeader.styles";

const GlobalHeader = () => {
  return (
    <StyledGlobalHeader>
      <div className="header-left">
        <div className="sky-logo">
          <img src="sky.png" alt="sky-logo" className="header-sky-logo" />
          <p className="sky-text">Music</p>
        </div>
        <input type="search" placeholder="Search" className="header-search" />
      </div>
    </StyledGlobalHeader>
  );
};

export default GlobalHeader;
