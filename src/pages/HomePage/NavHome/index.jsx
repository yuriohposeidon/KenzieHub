import { useContext } from "react";
import logo from "../../../assets/logo.png";
import { StyledNavHome } from "./navHome";
import { UserContext } from "../../../providers/UserContext";

export const NavHome = () => {

  const { userLogout} = useContext(UserContext)

  return (
    <StyledNavHome>
      <div className="nav__container">
        <img src={logo} alt={logo} />
        <button onClick={userLogout}>Sair</button>
      </div>
    </StyledNavHome>
  );
};
