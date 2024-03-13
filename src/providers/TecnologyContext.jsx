import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const TecnologyContext = createContext({});

export const TecnologyProvider = ({ children }) => {
  const { user, setUser } = useContext(UserContext);
  const [newTecnology, setNewTecnology] = useState([]);
  const [modalNew, setModalNew] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [tecnologyList, setTecnologyList] = useState([]);
  const [techEditId, setTechEditId] = useState(0);
  const [updateTech, setUpdateTech] = useState({});

  const token = localStorage.getItem("@token");

  const addTecnology = async (FormData) => {
    try {
      const { data } = await api.post("/users/techs", FormData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const techsUser = [...user.techs, data];
      setUser({ ...user, techs: techsUser });

      setModalNew(false);
      toast.success("Tecnologia criado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const removeTecnology = async (tecnologyId) => {
    try {
      const response = await api.delete(`/users/techs/${tecnologyId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTecnology = user.techs.filter(
        (currentTecnology) => currentTecnology.id !== tecnologyId
      );
      setUser({ ...user, techs: newTecnology });
      setModalEdit(false);
      toast.success("Tecnologia deletada com sucesso!");

    } catch (error) {
      console.log(error);
    }
  };

  const updateTecnology = async (formData, techId) => {
    try {
      const response = await api.put(`/users/techs/${techId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedTecnology = user.techs.filter(
        (currentTecnology) => currentTecnology.id !== techId
      );
      setUser({ ...user, techs: [...updatedTecnology, response.data]});
      console.log(response)      
      setModalEdit(false);
      toast.success("Tecnologia editada com sucesso!");
      
    } catch (error) {
      console.log(error);
    }
  };

  console.log(updateTech);
  return (
    <TecnologyContext.Provider
      value={{
        addTecnology,
        removeTecnology,
        newTecnology,
        setNewTecnology,
        modalNew,
        setModalNew,
        modalEdit,
        setModalEdit,
        techEditId,
        setTechEditId,
        tecnologyList,
        updateTech,
        updateTecnology,
        setUpdateTech,
      }}
    >
      {children}
    </TecnologyContext.Provider>
  );
};
