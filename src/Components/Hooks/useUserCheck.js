import axios from "axios";

const useUserCheck = () => {
  const userCheck = async (setUser, setUserLoading) => {
    try {
      const response = await axios.get("http://localhost:5000/checkuser", {
        withCredentials: true,
      });
      if (response?.data) {
        setUserLoading(false);
        console.log(response);
      } else {
        setUserLoading(false);
      }
    } catch (error) {
      setUserLoading(false);
    }
  };
  return { userCheck };
};

export default useUserCheck;
