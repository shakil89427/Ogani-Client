import axios from "axios";

const useUserCheck = () => {
  const userCheck = async (setUser, setUserLoading) => {
    const accesstoken = localStorage.getItem("accessToken");

    if (!accesstoken) {
      setUser({});
      return setUserLoading(false);
    }
    try {
      const response = await axios.get(
        "https://oganishop247.herokuapp.com/getuser",
        {
          headers: { authorization: `Bearer ${accesstoken}` },
        }
      );
      if (response?.data) {
        localStorage.setItem("accessToken", response.data.token);
        setUser(response.data.rest);
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
