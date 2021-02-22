import { Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ROUTES } from "../constants/routes";
import { AuthContext } from "../context/auth.context";

const GuestMiddleware = ({ children }) => {
  const auth = useRecoilValue(AuthContext);
  //if not auth redirect to
  return <>{auth ? <Redirect to={ROUTES.HOME} /> : children}</>;
};

export default GuestMiddleware;
