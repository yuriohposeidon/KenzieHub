import { HeaderLogin } from "./HeaderLogin";
import { StyledBackGroundLogin } from "../LoginPage/backgroundLogin";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  return (
    <StyledBackGroundLogin>
    <HeaderLogin />
      <main>
        <LoginForm />
      
      </main>
    </StyledBackGroundLogin>
  );
};
