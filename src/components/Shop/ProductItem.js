
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import useInput from '../../hook/useInput';


const ProductItem = (props) => {
  // const { title, price, description } = props;

  const {value: title, valueChangeHandler: titleChangeHandler, reset: resetTitle, isValid: titleIsvalid} = useInput(value => value.trim() !== "")

  const {value: quantity, valueChangeHandler: quantityChangeHandler, reset: resetQuantity, isValid:quantityIsvalid} = useInput(value => value > 0)

  const {value: price, valueChangeHandler: priceChangeHandler, reset: resetPrice, isValid: priceIsvalid} = useInput(value => value > 0)

  
let formIsvalid = false

if (titleIsvalid && quantityIsvalid && priceIsvalid ) {
  formIsvalid = true
}
 

  const submitHandler = (event) => {
    event.preventDefault()
    const data = {
      id: Math.random().toString(),
      title: title,
      quantity: +quantity,
      price: +price,
      total: quantity * price
    }
    console.log(data)
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

          <button disabled={!formIsvalid}>Add to cart</button>
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
