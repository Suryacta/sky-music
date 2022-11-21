import styled from "styled-components";

const StyledGlobalHeader = styled.div`
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .header-left {
    display: flex;
    align-items: center;
    gap: 4rem;
    width: 45%;
  }
  .sky-logo {
    display: flex;
    align-items: center;
  }
  .sky-text {
    margin-left: 1rem;
    font-family: sans-serif;
    font-size: 24px;
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
    border: none;
    height: 2rem;
    width: 18rem;
    border-radius: 1rem;
  }
  .search {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #fff;
    border: solid 0.5px #a9a9a9;
    border-radius: 2rem;
    padding: 0.2rem;
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
  .sky-plus {
    font-family: sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #ee354d;
    border: solid 1px #ee354d;
    border-radius: 2rem;
    padding: 0.6rem;
    cursor: pointer;
  }
`;

export default StyledGlobalHeader;
