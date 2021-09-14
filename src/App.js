import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Error from "./components/UI/Error";
import axios from "axios";
import { replaceCart } from "./store/cart";

let isInitial = true;

function App() {
  const [error, setError] = useState(null);
  const show = useSelector((state) => state.cart.show);
  const addedItems = useSelector((state) => state.cart.addedItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const changed = useSelector((state) => state.cart.changed);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (changed) {
      axios
        .put("https://cart-755ec-default-rtdb.firebaseio.com/cart.json", {
          body: { addedItems: addedItems, totalQuantity: totalQuantity },
        })
        .catch((error) => {
          setError(`Sending cart data unsuccessful: ${error.message}`);
        });
    }
  }, [addedItems, totalQuantity, changed]);

  useEffect(() => {
    axios
      .get(`https://cart-755ec-default-rtdb.firebaseio.com/cart.json`)
      .then((response) => {
        if (response.data !== null) {
          dispatch(
            replaceCart({
              addedItems: response.data.body.addedItems || [],
              totalQuantity: response.data.body.totalQuantity,
            })
          );
        }
      })
      .catch((error) => {
        setError(`Cart data loading unsuccessful: ${error.message}`);
        console.log(error);
      });
  }, [dispatch]);

  return (
    <Layout>
      {error && <Error message={error} />}
      {show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
