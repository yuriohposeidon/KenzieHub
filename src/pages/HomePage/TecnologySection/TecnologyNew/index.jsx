import { useContext } from "react"
import plus from "../../../../assets/plus.svg"
import { TecnologyContext } from "../../../../providers/TecnologyContext"
import { StyledNewContainer } from "./newContainer"

export const TecnologyNew = () => {

  const {setModalNew} = useContext(TecnologyContext)

  return (
    <StyledNewContainer>
        <h2 className="new__title">Tecnologias</h2>
        <button className="new__button" onClick={() => setModalNew(true)}> <img src={plus} alt="Adicionar" /> </button>
    </StyledNewContainer>
  )
}

