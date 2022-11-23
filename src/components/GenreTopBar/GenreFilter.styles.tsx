import styled from "styled-components";
import Colors from "../../shared/utils/Constants/Theme";

const StyledGenreFilter = styled.div`
.genre-button{
    padding: 1rem;
    width: 100%;
    font-weight: 600;
    font-family: sans-serif;
    border: none;
    border-radius: 2rem;
    background-color: transparent;
    cursor: pointer; 
    border: solid 0.5px ${Colors.mediumGrey};
    @media screen and (max-width: 900px){
        width: 80%;
        font-size: 0.5rem;
        white-space: pre-wrap;
    }
}

`;
const StyledCustomSwiper = styled.div`
.swiper-button-prev {
    background-color: ${Colors.carouselGrey};
    width: 45px;
    border-radius: 40px;
}

.swiper-button-next {
    background-color: ${Colors.carouselGrey};
    width: 45px;
    border-radius: 40px;
}
.swiper-button-next:after {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Colors.mediumGrey};
 
}
.swiper-button-prev:after {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Colors.mediumGrey};
 
}
`;

export { StyledGenreFilter, StyledCustomSwiper };
