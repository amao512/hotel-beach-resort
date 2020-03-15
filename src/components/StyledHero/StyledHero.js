import styled from 'styled-components';
import defaultImg from '../../assets/images/room-1.jpeg';

const StyledHero = styled.header`
    min-height: 80vh;
    background: url(${props => props.img}) no-repeat center/cover;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

StyledHero.defaultProps = {
    img: defaultImg
}

export default StyledHero;