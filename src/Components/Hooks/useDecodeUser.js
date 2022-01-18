import { decodeToken } from "react-jwt";

const useDecodeUser = () => {
  const decodeUser = (accesstoken, setUser, setUserLoading) => {
    const decoded = decodeToken(accesstoken);
    setUser(decoded);
    setUserLoading(false);
  };
  return { decodeUser };
};

export default useDecodeUser;
