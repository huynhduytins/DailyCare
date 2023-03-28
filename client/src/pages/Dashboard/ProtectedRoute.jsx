import { Navigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

const ProtectedRoute = ({ children }) => {
  const { username } = useAppContext();
  if (!username) return <Navigate to="/" />;
  return children;
};

export default ProtectedRoute;
