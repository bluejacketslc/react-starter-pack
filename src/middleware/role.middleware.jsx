import { Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ROUTES } from "../constants/routes";
import { AuthContext } from "../context/auth.context";

const RoleMiddleware = ({ children, role }) => {
  const auth = useRecoilValue(AuthContext);
  //if not auth and not equals to specific role redirect to
  return (
    <>{!auth?.role !== role ? <Redirect to={ROUTES.LOGIN} /> : children}</>
  );
};

export default RoleMiddleware;
