import axios from "axios";

const useLoadAllProducts = () => {
  const loadAllProducts = (
    filterBy,
    setCount,
    setAllProducts,
    setAllProductsLoading,
    featured,
    setFeaturedProducts
  ) => {
    setAllProductsLoading(true);
    axios
      .post("https://oganishop247.herokuapp.com/allproducts", {
        filterBy,
        featured,
      })
      .then((res) => {
        setCount(Math.ceil(res.data.count / 8));
        setAllProducts(res.data.result);
        if (res.data.result2) {
          setFeaturedProducts(res.data.result2);
        }
        setAllProductsLoading(false);
      });
  };
  return { loadAllProducts };
};

export default useLoadAllProducts;
