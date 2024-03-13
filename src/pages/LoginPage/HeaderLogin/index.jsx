import logo from "../../../assets/logo.png";
import { StyledHeaderLogin } from "./headerLogin";

export const HeaderLogin = () => {
  return (
    <StyledHeaderLogin>
      <div className="header__container">
        <img src={logo} alt="logo" />
      </div>
    </StyledHeaderLogin>
  );
};
