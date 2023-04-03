import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../../store/cart';

const Products = (props) => {

  const dispatch = useDispatch()
  const addToCartHandler = (data) => {
    dispatch(cartSliceActions.addToCart(data))
  }
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem onAddCart={addToCartHandler}
          // title='Test'
          // price={6}
          // description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};
export default Products;
