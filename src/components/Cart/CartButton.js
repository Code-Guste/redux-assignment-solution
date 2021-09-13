import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/cart";

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cart.addedItems);

  const totalQuantity = cartItems.reduce(function (accumulator, item) {
    return accumulator + item.quantity;
  }, 0);

  const dispatch = useDispatch();
  const cartButtonClickedHandler = () => {
    dispatch(toggle());
  };
  return (
    <button className={classes.button} onClick={cartButtonClickedHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
