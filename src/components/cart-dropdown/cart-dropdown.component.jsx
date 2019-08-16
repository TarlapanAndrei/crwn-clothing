import React from 'react';
import {connect} from 'react-redux'
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selector';

const CartDropdown = ({cartItem}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItem.map(cartItem =>(
          <CartItem key={cartItem.id} item={cartItem}/>
        ))
      }
    </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)
const mapStateToProps = state => ({
  cartItem:selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropdown);