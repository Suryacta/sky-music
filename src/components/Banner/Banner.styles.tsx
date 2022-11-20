import styled from "styled-components";

const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .banner {
    background: url(https://www.scdn.co/i/free/bubbles-dktp.svg) center
        no-repeat,
      linear-gradient(-45deg, rgb(108, 14, 224) -5%, rgb(240, 55, 166));
    background-position: center;
    height: 100vh;
    width: 100vw;
    position: relative;
  }
  .banner-content {
    position: absolute;
    z-index: 3;
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5%;
  }
  .banner-mobile-picture {
    object-fit: contain;
    border-radius: 5%;
    width: 35%;
  }
  .banner-text {
    font-family: sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: #fff;
    margin-left: 4rem;
  }
`;

export default StyledBanner;
