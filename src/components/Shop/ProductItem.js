
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
      price: +price
    }
    console.log(data)
    props.onAddCart(data)
    resetPrice()
    resetQuantity()
    resetTitle()
  }

  return (
    <li className={classes.item}>
       <div className={classes.formControls}>
      <Card>

        <form onSubmit={submitHandler}>
         
            <div className={classes.formControl}>
              <label>Title</label>
              <input type='text' onChange={titleChangeHandler} value={title}></input>
            </div>
            <div className={classes.formControl}>
              <label>Quantity</label>
              <input type='number' onChange={quantityChangeHandler} value={quantity}></input>
            </div>
            <div className={classes.formControl}>
              <label>Price</label>
              <input type='number' onChange={priceChangeHandler} value={price}></input>
            </div>
         
         <div className={classes.buton}>
          <button disabled={!formIsvalid}>Add to cart</button>
          </div>
        </form>
      </Card>
      </div>
    </li>
  );
};

export default ProductItem;
