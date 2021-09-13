import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cart";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch();

  const increaseQuantityHandler = (id) => {
    dispatch(addToCart(id));
  };
  const decreaseQuantityHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQuantityHandler.bind(null, id)}>-</button>
          <button onClick={increaseQuantityHandler.bind(null, id)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
