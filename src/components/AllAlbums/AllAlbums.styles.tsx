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
    @media screen and (max-width: 900px){
      display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    }
  }
  .album-thumbnail {
    border-radius: 5rem;
    transition: transform 450ms;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }
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
