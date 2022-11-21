import styled from "styled-components";

const StyledAllAlbums = styled.div`
  display: flex;
  .albums {
    padding: 6%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
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

export default StyledAllAlbums;
