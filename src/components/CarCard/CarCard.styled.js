import styled from 'styled-components';

export const CardBox = styled.div`
    width: 274px;
    max-height: 426px;
`;

export const HeartBtn = styled.button`
    border: none; 
    cursor: pointer; 
    background-color: transparent;
    position: absolute;
    top: 14px;
    right: 14px;
`;

export const CarImgBox = styled.div`
    width: 274px;
    height:  268px;
    position: relative;
`;

export const CarImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 14px;
    object-fit: cover;
  /* object-position: left top; */
`;

export const CarCardTitle = styled.div`
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    margin-top: 14px;
    margin-bottom: 8px;
`;

export const CarBrandName = styled.div`
    display: flex;
    gap: 5px;
    font-size: 16px;
`;

export const TextName = styled.p`
    margin: 0;

`;

export const CarBrand = styled.span`
    color: #3470FF;
`;

export const CarDescr = styled.div`
    display: flex;
    justify-content: start;
    margin-bottom: 28px;
    flex-wrap: wrap;
    font-size: 11px;
    color: rgba(18, 20, 23, 0.5);
    line-height: 18px;
`;

export const TextDescr = styled.p`
    margin-right: 4px;
    margin-top: 0;
    margin-bottom: 0;
`