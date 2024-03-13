import { useContext } from "react";
import { UserContext } from "../../../../providers/UserContext";
import { TecnologyCard } from "./TecnologyCard";
import { StyledTecnologyList } from "./TecnologyList";

export const TecnologyList = () => {
  const { user } = useContext(UserContext);
  return (
    <StyledTecnologyList>
      {user.techs.map((tech) => (
        <TecnologyCard key={tech.id} tech={tech} />
      ))}
      <TecnologyCard />
    </StyledTecnologyList>
  );
};
