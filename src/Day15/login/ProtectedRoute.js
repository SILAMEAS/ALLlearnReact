import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRouteLogin = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  return children;
};

export default ProtectedRouteLogin;
