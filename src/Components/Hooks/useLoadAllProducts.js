import axios from "axios";

const useLoadAllProducts = () => {
  const loadAllProducts = (
    filterBy,
    setCount,
    setAllProducts,
    setAllProductsLoading
  ) => {
    setAllProductsLoading(true);
    axios.post("http://localhost:5000/allproducts", filterBy).then((res) => {
      setCount(Math.ceil(res.data.count / 8));
      setAllProducts(res.data.result);
      setAllProductsLoading(false);
    });
  };
  return { loadAllProducts };
};

export default useLoadAllProducts;
