
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import useInput from '../../hook/useInput';
const ProductItem = (props) => {
  // const { title, price, description } = props;

  const {value: title, valueChangeHandler: titleChangeHandler, reset: resetTitle} = useInput(value => value.trim() !== "")

  const {value: quantity, valueChangeHandler: quantityChangeHandler, reset: resetQuantity} = useInput(value => value > 0)

  const {value: price, valueChangeHandler: priceChangeHandler, reset: resetPrice} = useInput(value => value > 0)

  



  const submitHandler = (event) => {
    event.preventDefault()
    const data = {
      title: title,
      quantity: +quantity,
      price: +price,
      total: quantity * price
    }

    props.onAddCart(data)
    resetPrice()
    resetQuantity()
    resetTitle()
  }

  return (
    <li className={classes.item}>
      <Card>

        <form onSubmit={submitHandler}>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} value={title}></input>

          <label>Quantity</label>
          <input type='number' onChange={quantityChangeHandler} value={quantity}></input>

          <label>Price</label>
          <input type='number' onChange={priceChangeHandler} value={price}></input>

          <button>Add to cart</button>
        </form>
        {/* <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button  onClick={addToCartHandler}>Add to Cart</button>
        </div> */}
      </Card>
    </li>
  );
};

export default ProductItem;
