

import { useForm } from "react-hook-form";
import { Select } from "../../../../components/Select";
import { StyledEditModal, StyledEditModalContainer } from "./TecnologyEdit";
import { useContext } from "react";
import { TecnologyContext } from "../../../../providers/TecnologyContext";
import { schemaModalEdit } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const TecnologyEditModal = () => {
  const { setModalEdit, removeTecnology, techEditId, updateTech, updateTecnology } = useContext(TecnologyContext);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: updateTech.title,
      status: updateTech.status
    },
    resolver: zodResolver(schemaModalEdit),
  });

  const techSubmit = (formData) => {
    updateTecnology(formData, updateTech.id);
  };

  return (
    <StyledEditModalContainer>
      <StyledEditModal onSubmit={handleSubmit(techSubmit)}>
        <div className="header__editModal">
          <h2 className="title__editModal">Tecnologia Detalhes</h2>
          <button className="close__editModal" onClick={() => setModalEdit(false)}>
            X
          </button>
        </div>

        <div className="form__container">

          <div className="input__container">
          <label htmlFor="title">Nome</label>
          <input type="text" {...register("title")} id="title" placeholder="Material Ul" readOnly />
          </div>

          <Select label="Selecionar Modulo" register={register("status")}>
            <option value="" >Status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <p className="error__select">{errors.status?.message} </p>


          <div className="buttons__container">
            <button type="submit" className="save__button">
              Salvar Alterações
            </button>
            <button
              type="button"
              className="delete__button"
              onClick={() => removeTecnology(techEditId)}
            >
              Excluir
            </button>
          </div>
        </div>
      </StyledEditModal>
    </StyledEditModalContainer>
  );
};

