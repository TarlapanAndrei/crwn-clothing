import React from 'react';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';
import {ReactComponent as ShopingIcon} from '../../assets/shopping-bag.svg';
import {createStructuredSelector} from 'reselect';
const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShopingIcon className='shoping-icon'/>
    <span className='item-count'>{itemCount}</span>
  </div>
)
const mapDispatchToProps = dispatch =>({
  toggleCartHidden: ()=> dispatch(toggleCartHidden())
})
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);