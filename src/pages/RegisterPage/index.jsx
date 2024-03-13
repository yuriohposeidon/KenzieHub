import { RegisterForm } from "./RegisterForm";
import { HeaderRegister } from "./HeaderRegister";
import { StyledBackGroundRegister} from "./backgroundRegister"

export const RegisterPage = () => {


  return (
    <StyledBackGroundRegister>
      <HeaderRegister />
      <main>
        <RegisterForm />
      </main>
    </StyledBackGroundRegister>
  );
};
