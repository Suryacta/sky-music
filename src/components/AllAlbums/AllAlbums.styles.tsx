import styled from "styled-components";
import Colors from "../../shared/utils/Constants/Theme";

const StyledAllAlbums = styled.div`
  display: flex;
  flex-direction: column;
  .albums {
    padding: 6%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    @media screen and (max-width: 900px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }
    @media screen and (max-width: 500px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 3rem;
    }
  }
  .album-thumbnail {
    width: 100%;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: black;
    margin: 10px 0;
    font-family: sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 10px 0;
  }
  .album-entry {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    background-color: ${Colors.subduedSurface};
    font-family: sans-serif;
    font-weight: 600;
    border-radius: 1rem;
  }
`;
const StyledPaginateButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .show-more {
    background-color: ${Colors.appleRed};
    color: ${Colors.lightSurface};
    border: none;
    border-radius: 2rem;
    padding: 1rem;
    width: 10rem;
    cursor: pointer;
    font-family: sans-serif;
    font-weight: 600;
    font-size: 1rem;
  }
`;
export { StyledAllAlbums, StyledPaginateButton };
