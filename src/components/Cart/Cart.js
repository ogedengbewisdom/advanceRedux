import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { cartSliceActions } from '../../store/cart';


const Cart = (props) => {

  const item = useSelector(state => state.cartItem)
  // const item = [{ title: 'Test Item', quantity: 3, total: 18, price: 6 }]

  const dispatch = useDispatch()

  const addCartHandler = (cart) => {
    let quantity = 1
    dispatch(cartSliceActions.addToCart({
      ...cart,
      quantity: quantity++,
    }))
  }

  const removeCartHandler = (id) => {
    dispatch(cartSliceActions.removeFromCart(id))
  }
  const total = useSelector(state => state.totalAmout)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* <CartItem item={dummy}/> */}
        {item.map(cart => 
          <CartItem
            key={cart.id}
            id={cart.id} 
            title={cart.title} 
            quantity={cart.quantity} 
            total={cart.total} 
            price={cart.price} 
            onAdd={addCartHandler.bind(null, cart)}
            onRemove={removeCartHandler.bind(null, cart.id)}
            />
          )}
      </ul>
      <div className={classes.total}>
        <h1>Total : </h1>
        <h1>${total.toFixed(2)}</h1>
      </div>
    </Card>
  );
};

export default Cart;
