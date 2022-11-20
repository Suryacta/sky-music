import React from "react";
import StyledBanner from "./Banner.styles";

const Banner = () => {
  return (
    <StyledBanner>
      <div className="banner-content">
        <img
          src="https://i.scdn.co/image/ab678e040000ed3aed58911aecc6dbc16949f40b"
          alt="banner-mobile"
          className="banner-mobile-picture"
        />
        <p className="banner-text">Play millions of songs, podcasts for free</p>
      </div>
      <div className="banner" />
    </StyledBanner>
  );
};

export default Banner;
