import { decodeToken } from "react-jwt";

const useDecodeUser = () => {
  const decodeUser = (accesstoken, setUser, setLoading) => {
    const decoded = decodeToken(accesstoken);
    setUser(decoded);
    setLoading(false);
  };
  return { decodeUser };
};

export default useDecodeUser;
