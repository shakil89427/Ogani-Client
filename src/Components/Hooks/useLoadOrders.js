import axios from "axios";
import useAuth from "../AuthProvider/useAuth";

const useLoadOrders = () => {
  const { user } = useAuth();
  const loadOrders = async () => {
    let allOrders = [];
    let param = "";
    if (user.role === "user") {
      param = user._id;
    }
    if (user.role === "admin") {
      param = "admin";
    }
    try {
      const response = await axios.get(
        `http://localhost:5000/loadorders/${param}`
      );
      allOrders = response.data;
    } catch (error) {}
    return allOrders;
  };
  return { loadOrders };
};

export default useLoadOrders;
