import styled from "styled-components";

const StyledGlobalHeader = styled.div`
  background-color: #f7f7f7;
  .header-left {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 40%;
    padding: 0 2%;
  }
  .sky-logo {
    display: flex;
    align-items: center;
  }
  .sky-text {
    margin-left: 1rem;
    font-family: sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: #ee354d;
  }
  .header-sky-logo {
    height: 5rem;
    width: 5rem;
    object-fit: contain;
  }
  .header-search {
    outline: none;
    height: 2rem;
    width: 18rem;
    border-radius: 0.8rem;
    border: solid 0.2px #833ab4;
  }
`;

export default StyledGlobalHeader;
