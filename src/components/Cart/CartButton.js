import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartSliceActions } from '../../store/cart';

const CartButton = (props) => {
  const item = useSelector(state => state.cartItem)
  const cartItems = item.reduce((index, item) => {
    return index + item.quantity
  }, 0)

  const dispatch = useDispatch()

  const showCartHandler = () => {
    dispatch(cartSliceActions.show())
  }
  return (
    <button type='button' onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default CartButton;
