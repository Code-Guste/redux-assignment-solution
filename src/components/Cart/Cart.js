import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartList = useSelector((state) => state.cart.addedItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartList.map((product) => (
          <CartItem
            item={{
              id: product.id,
              title: product.title,
              quantity: product.quantity,
              total: product.total,
              price: product.price,
              key: product.id,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
