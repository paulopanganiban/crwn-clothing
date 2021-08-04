import React from 'react'
import { ReactComponent as ShoppingCart } from '../assets/shopping-cart.svg' //react logo
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch } from 'react-redux';
import { toggleCart } from '../redux/cartReducer';
const CartIcon = () => {
    const dispatch = useDispatch()
    return (
        <IconButton aria-label="cart" className="cart-icon"
        onClick={() => {dispatch(toggleCart())}}
        >
        <StyledBadge badgeContent={0} color="primary" showZero>
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    )
}

export default CartIcon

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);