import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {

  const item = useSelector(state => state.cartItem)
  // const item = [{ title: 'Test Item', quantity: 3, total: 18, price: 6 }]
  
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* <CartItem item={dummy}/> */}
        {item.map(cart => 
          <CartItem key={Math.random()} title={cart.title} quantity={cart.quantity} total={cart.total} price={cart.price} />
          )}
      </ul>
    </Card>
  );
};

export default Cart;
