import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaRegister } from "../Schema/SchemaRegister";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select/index";
import { StyledFormRegister } from "../RegisterForm/formRegister";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(schemaRegister),
  });

  const submit = async (formData) => {
    await registerUser(formData);
    reset();
  };

  return (
    <StyledFormRegister onSubmit={handleSubmit(submit)}>
      <div className="title__container">
        <h1 className="title__register">Crie sua conta</h1>

        <h3 className="subTitle__register">Rapido e grátis, vamos nessa</h3>
      </div>

      <Input
        label="Nome"
        type="text"
        register={register("name")}
        placeholder="Digite aqui seu nome"
        error={errors.name?.message}
      />

      <Input
        label="Email"
        type="email"
        register={register("email")}
        placeholder="Digite aqui seu email"
        error={errors.email?.message}
      />

      <Input
        label="Senha"
        type="password"
        register={register("password")}
        placeholder="Digite aqui sua senha"
        error={errors.password?.message}
      />

      <Input
        label="Confirmar Senha"
        type="password"
        register={register("confirmPassword")}
        placeholder="Digite novamente sua senha"
        error={errors.confirmPassword?.message}
      />

      <Input
        label="Bio"
        type="text"
        register={register("bio")}
        placeholder="Fale sobre você"
        error={errors.bio?.message}
      />

      <Input
        label="Contato"
        type="text"
        register={register("contact")}
        placeholder="Opção de contato"
        error={errors.contact?.message}
      />

      <Select label="Selecionar Modulo" register={register("course_module")}>
        <option value="">Selecione um modulo</option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
      </Select>
      <p className="error__select">{errors.course_module?.message} </p>

      <button className="button__register">Cadastrar</button>
    </StyledFormRegister>
  );
};
