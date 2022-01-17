import useAuth from "../AuthProvider/useAuth";

const useLogout = () => {
  const { setUser } = useAuth();

  const logout = () => {
    setUser({});
    localStorage.removeItem("accessToken");
  };
  return { logout };
};

export default useLogout;
