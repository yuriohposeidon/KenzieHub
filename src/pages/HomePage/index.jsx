import { useContext, useEffect, useState } from "react";
import { StyledBackGroundLogin } from "../LoginPage/backgroundLogin";
import { StyledMainHome } from "./mainHome";
import { NavHome } from "./NavHome";
import { StyledHeaderHome } from "./HeaderHome/headerHome";
import { UserContext } from "../../providers/UserContext";
import { TecnologySection } from "./TecnologySection";

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <StyledBackGroundLogin>
      <NavHome />

      <StyledHeaderHome className="profile__container">
        <div className="header__container">
          <h2 className="title__home">Ola, {user.name} </h2>
          <span className="course__module"> {user.course_module} </span>
        </div>
      </StyledHeaderHome>

      <StyledMainHome>
        <TecnologySection />
      </StyledMainHome>
    </StyledBackGroundLogin>
  );
};
