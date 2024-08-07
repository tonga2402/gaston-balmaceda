import React from "react";
import { IoPencilSharp } from "react-icons/io5";

const PerfilSection = () => {
  return (
    <section>
      <div className="container_activity">
        <h2>Tus datos</h2>
        <div className="container_perfil">
          <div className="card_perfil">
            <label htmlFor="">Email</label>
            <div className="card_input">
              <input type="text" placeholder="gbalmaceda@live.com" />
            </div>
          </div>
        </div>
        <hr />{" "}
        <div className="container_perfil">
          <div className="card_perfil">
            <label htmlFor="">Nombre</label>
            <div className="card_input">
              <input type="text" placeholder="Gaston" />
              <IoPencilSharp />
            </div>
          </div>
        </div>
        <hr />{" "}
        <div className="container_perfil">
          <div className="card_perfil">
            <label htmlFor="">Apellido</label>
            <div className="card_input">
              <input type="text" placeholder="Balmaceda" />
              <IoPencilSharp />
            </div>
          </div>
        </div>
        <hr />
        <div className="container_perfil">
          <div className="card_perfil">
            <label htmlFor="">Telefono</label>
            <div className="card_input">
              <input type="text" placeholder="3412004535" />
              <IoPencilSharp />
            </div>
          </div>
        </div>
        <hr />{" "}
        <div className="container_perfil">
          <div className="card_perfil">
            <label htmlFor="">Contrasena</label>
            <div className="card_input">
              <input type="password" placeholder="*****" />
              <IoPencilSharp />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default PerfilSection;
