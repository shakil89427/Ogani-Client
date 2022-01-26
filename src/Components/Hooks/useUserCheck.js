import axios from "axios";

const useUserCheck = () => {
  const userCheck = async (setUser, setUserLoading) => {
    const accesstoken = localStorage.getItem("accessToken");

    if (!accesstoken) {
      setUser({});
      return setUserLoading(false);
    }
    const response = await axios.get("http://localhost:5000/getuser", {
      headers: { authorization: `Bearer ${accesstoken}` },
    });
    console.log(response);
  };
  return { userCheck };
};

export default useUserCheck;
