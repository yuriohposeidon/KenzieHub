import { useContext } from "react";
import { StyledTecnologyCard } from "./TecnologyCard";
import { TecnologyContext } from "../../../../../providers/TecnologyContext";

export const TecnologyCard =({ tech }) => {
  const {setModalEdit, setTechEditId, setUpdateTech} = useContext(TecnologyContext)

  const openModalAndSetId = () => {
    setModalEdit(true)
    setTechEditId(tech.id)
    setUpdateTech({...tech})
  }

  if(tech) {
    return (
      <StyledTecnologyCard>
      <li className="card__container" onClick={() => openModalAndSetId()}>
        <span className="tecnology__title">{tech.title}</span>
        <span className="tecnology__status">{tech.status}</span>
      </li>
      </StyledTecnologyCard>
    );
  }
}



