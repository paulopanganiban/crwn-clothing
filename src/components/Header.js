import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/crown.svg' //react logo
const Header = () => {
    return (
        <HeaderContainer>
            <StyledLink to="/" className="logo__container">
                <Logo/>
            </StyledLink>
            <HeaderOptions>
                <StyledLink to='/shop'>
                    SHOP
                </StyledLink>
                <StyledLink to='/shop'>
                    CONTACT
                </StyledLink>
            </HeaderOptions>
        </HeaderContainer>
    )
}

export default Header
const HeaderOptions = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`
const HeaderContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`
const StyledLink = styled(Link)`
text-decoration: none;
padding: 10px 15px;
 > .logo__container {
     height: 100%;
     width: 70px;
    padding: 25px;
 }
`