import axios from "axios";

const useUserCheck = () => {
  const userCheck = async (setUser, setUserLoading) => {
    const accesstoken = localStorage.getItem("accessToken");

    if (!accesstoken) {
      setUser({});
      return setUserLoading(false);
    }
    try {
      const response = await axios.get("http://localhost:5000/getuser", {
        headers: { authorization: `Bearer ${accesstoken}` },
      });
      if (response?.data) {
        setUser(response?.data);
        setUserLoading(false);
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
