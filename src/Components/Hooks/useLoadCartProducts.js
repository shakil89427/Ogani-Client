const useLoadCartProducts = () => {
  const loadCartProducts = (cartItems, setCartProducts, setCartLoading) => {
    const ids = [];
    for (const items of cartItems) {
      ids.push(items._id);
    }
  };
  return { loadCartProducts };
};

export default useLoadCartProducts;
