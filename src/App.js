import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Error from "./components/UI/Error";
import axios from "axios";

let isInitial = true;

function App() {
  const [error, setError] = useState(null);
  const show = useSelector((state) => state.cart.show);
  const addedItems = useSelector((state) => state.cart.addedItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    axios
      .put("https://cart-755ec-default-rtdb.firebaseio.com/cart.json", {
        body: { addedItems: addedItems, totalQuantity: totalQuantity },
      })
      .catch((error) => {
        setError(`Sending cart data unsuccessful: ${error.message}`);
      });
  }, [addedItems, totalQuantity]);

  return (
    <Layout>
      {error && <Error message={error} />}
      {show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
