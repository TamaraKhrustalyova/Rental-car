// import { Link } from 'react-router-dom';
import { LogoBtn, PageLink, AppBarWrapper, LogoLink } from './AppBar.styled';
import logo from '../../img/logo.png';

export const AppBar = () => { 
    return (
        <AppBarWrapper>
            <PageLink to="/catalog">Catalog</PageLink>
            <LogoLink to='/'>
                <LogoBtn>
                    <img src={logo} style={{ width: '60px', height: '60px' }} alt="logo" />
                </LogoBtn>
            </LogoLink>
            <PageLink to="/favorites">Favorites</PageLink>
        </AppBarWrapper>
    )
}