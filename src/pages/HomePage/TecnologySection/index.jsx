import { useContext } from "react"
import { TecnologyEditModal } from "./TecnologyEditModal"
import { TecnologyNew } from "./TecnologyNew"
import { TecnologyNewModal } from "./TecnologyNewModal"
import { StyledTecnologySection } from "./TecnologySection"
import { TecnologyContext } from "../../../providers/TecnologyContext"
import { TecnologyList } from "./TecnologyList"

export const TecnologySection = () => {
  const {modalNew, modalEdit} = useContext(TecnologyContext)

  return (
    <StyledTecnologySection>
        <TecnologyNew />
        <TecnologyList />

        {modalNew && <TecnologyNewModal />}

        {modalEdit && <TecnologyEditModal />}
    </StyledTecnologySection>
  )
}

