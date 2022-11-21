import styled from "styled-components";

const StyledGenreFilter = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.genre-content{
    width: 14rem;
    display: flex;
    justify-content: center;
}
p{
    font-weight: 600;
    font-family: sans-serif;
    border-bottom: solid 1px #EE354D;
    padding-bottom: 0.5rem;
}
.genre-options{
    padding: 0.7rem;
    width: 100%;
    border: none;
    background-color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #f0f8ff;
        transition: all 0.2s ease-in-out;
    }
}
`;

export default StyledGenreFilter;
