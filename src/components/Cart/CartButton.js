import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { toggle } from "../../store/cart";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartButtonClickedHandler = () => {
    dispatch(toggle());
  };
  return (
    <button className={classes.button} onClick={cartButtonClickedHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
