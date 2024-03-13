import { useForm } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";
import { useContext } from "react";
import { TecnologyContext } from "../../../../providers/TecnologyContext";
import { StyledNewModal, StyledNewModalContainer } from "./newModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaModalNew } from "./schema";

export const TecnologyNewModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaModalNew),
  });
  const { setModalNew, addTecnology } = useContext(TecnologyContext);

  return (
    <StyledNewModalContainer>
      <StyledNewModal onSubmit={handleSubmit(addTecnology)}>
        <div className="header__newModal">
          <h2 className="title__newModal">Cadastrar Tecnologia</h2>
          <button className="close__newModal" onClick={() => setModalNew(false)}>
            X
          </button>
        </div>

        <div className="modal__container">
          <Input
            label="Nome"
            type="text"
            register={register("title")}
            placeholder="Material Ul"
            error={errors.title?.message}
          />

          <Select label="Selecionar Modulo" register={register("status")}>
            <option value="" >Status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <p className="error__select">{errors.status?.message} </p>

          <button className="register__button" type="submit">
            Cadastrar Tecnologia
          </button>
        </div>
      </StyledNewModal>
    </StyledNewModalContainer>
  );
};
