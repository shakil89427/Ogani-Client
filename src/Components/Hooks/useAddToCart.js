import useAuth from "../AuthProvider/useAuth";
import useSetToLocal from "./useSetToLocal";

const useAddToCart = () => {
  const { user, cartItems, setCartItems } = useAuth();
  const { setToLocal, toast } = useSetToLocal();

  const addSingleQuantity = (id, value) => {
    const matched = cartItems.products.find((single) => single._id === id);
    if (!matched) {
      const product = { quantity: 1, _id: id };
      if (value) {
        product.quantity = value;
      }
      const newData = [...cartItems.products];
      newData.push(product);
      return setToLocal(user, setCartItems, {
        _id: cartItems._id,
        products: newData,
      });
    }
    if (value) {
      matched.quantity = matched.quantity + value;
    }
    if (!value) {
      matched.quantity = matched.quantity + 1;
    }
    const result = cartItems.products.filter(
      (single) => single._id !== id || matched
    );
    return setToLocal(user, setCartItems, {
      _id: cartItems._id,
      products: result,
    });
  };
  return { addSingleQuantity, toast };
};

export default useAddToCart;
