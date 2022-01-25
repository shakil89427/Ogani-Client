import axios from "axios";

const useLoadAllProducts = () => {
  const loadAllProducts = async (
    filterBy,
    setCount,
    setAllProducts,
    setAllProductsLoading,
    featured,
    setFeaturedProducts
  ) => {
    setAllProductsLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/allproducts", {
        filterBy,
        featured,
      });
      if (response?.data) {
        setCount(Math.ceil(response.data.count / 8));
        setAllProducts(response.data.result);
        if (response?.data?.result2) {
          setFeaturedProducts(response.data.result2);
        }
        setAllProductsLoading(false);
      } else {
        setAllProductsLoading(false);
      }
    } catch (error) {
      setAllProductsLoading(false);
    }
  };
  return { loadAllProducts };
};

export default useLoadAllProducts;
