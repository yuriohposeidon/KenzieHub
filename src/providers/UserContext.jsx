import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { TecnologyContext } from "./TecnologyContext";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const {modalEdit} = useContext(TecnologyContext)


  const registerUser = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);
      toast.success("Voce cadastrou com sucesso!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Email já cadastrado ou algum campo foi inserido incorretamente!");
    }
  };

  const loginUser = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      setUser(data.user)

      localStorage.setItem("@userId", data.user.id);
      toast.success("Usuario logado com sucesso!");
      localStorage.setItem("@token", data.token);

      navigate("/home");
    } catch (error) {
      console.error(error);
      toast.error("Email ou senha inseridos incorretamente");
    }
  };

  const getUser = async () => {
    const token = localStorage.getItem("@token");

    if(token){
      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }  
    }
  };

  useEffect(() => {
    getUser();
  }, [modalEdit]);

  const userLogout = () => {
    setUser(null)
    localStorage.removeItem("@userId")
    localStorage.removeItem("@token")
    navigate("/")
  }

  return (
    <UserContext.Provider value={{ user, setUser, registerUser, loginUser, getUser, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
