import styled from "styled-components";
import Colors from "../../shared/utils/Constants/Theme";

const StyledGlobalHeader = styled.div`
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  box-shadow: rgba(111, 103, 100, 0.2) 0px 7px 29px 0px;
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
    color: ${Colors.appleRed};
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
    background-color: ${Colors.lightSurface};
    border: solid 0.5px ${Colors.mediumGrey};
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
    color: ${Colors.appleRed};
    border: solid 1px ${Colors.appleRed};
    border-radius: 2rem;
    padding: 0.6rem;
    cursor: pointer;
  }
`;

export default StyledGlobalHeader;
