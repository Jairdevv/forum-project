import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./Contacto.css";

const Contacto = () => {
  const [userData, setUserData] = useState({ nombre: "", email: "" });
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/${userId}`
        );
        setUserData({
          nombre: response.data.nombre,
          email: response.data.correo_electronico,
        });
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    if (userId) {
      fetchUserData();
    } else {
      console.error("No se encontró el ID del usuario");
    }
  }, [userId]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="contact-card">
          <h2>Contacto del Usuario</h2>
          <div className="contact-info">
            <label htmlFor="nombre">Nombre:</label>
            <span id="nombre">{userData.nombre}</span>
          </div>
          <div className="contact-info">
            <label htmlFor="email">Email:</label>
            <span id="email">{userData.email}</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contacto;
