import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { StyledHeaderRegister } from "./headerRegister";

export const HeaderRegister = () => {
  return (
    <StyledHeaderRegister>
      <div className="header__container">
        <img src={logo} alt={logo} />
        <Link to="/" className="button__return"> Voltar </Link>
      </div>
    </StyledHeaderRegister>
  );
};
