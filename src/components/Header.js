import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/crown.svg' //react logo
import { auth, signOut } from '../firebase'
import { useSelector } from 'react-redux' // HOC modify our component related to redux
import CartIcon from './CartIcon'
import CartDropDown from './CartDropDown'
const Header = () => {
    const cartState = useSelector(state => state.cart.hidden)
    const testing = useSelector((state) => state.user.currentUser)
    return (
        <HeaderContainer>
            <StyledLink to="/" className="logo__container">
                <Logo />
            </StyledLink>
            <HeaderOptions>
                <StyledLink to='/shop'>
                    SHOP
                </StyledLink>
                <StyledLink to='/shop'>
                    CONTACT
                </StyledLink>
                {
                    testing ?
                        <div onClick={signOut}>SIGN OUT</div>
                        :
                        <StyledLink to="/signin">SIGN IN</StyledLink>
                }
                <CartIcon />
            </HeaderOptions>
            {
                !cartState ? ( <CartDropDown />) : (null)
            }
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
 > div {
     cursor: pointer;
 }
`
const HeaderContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`
const StyledLink = styled(Link)`
padding: 10px 15px;
 > .logo__container {
     height: 100%;
     width: 70px;
    padding: 25px;
 }
`