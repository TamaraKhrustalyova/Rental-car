import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
    align-items: center;
    border-bottom: 1px solid #888;
`
export const LogoLink = styled(Link)`
    height: 100px;
`
export const LogoBtn = styled.button`
    margin-top: 30px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const PageLink = styled(Link)`
    color:black;
    text-decoration: none;
    font-size: 18px;
    &:hover,
    &:focus {
        color: DarkTurquoise;
    }
`;