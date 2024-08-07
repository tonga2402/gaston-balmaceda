import React from "react";
import { IoCopyOutline } from "react-icons/io5";

const AliasSection = () => {
  return (
    <section>
      <div className="container_alias">
        <h4>
          Copia tu cvu o alias para ingresar o transferir dinero desde otra
          cuenta
        </h4>
        <div className="card_alias">
          <div>
            <h3>CVU</h3>
            <p>000000000123123123123123131</p>
          </div>
          <IoCopyOutline style={{fontSize:'25px', color: 'var(--primary-color)'}}/>
        </div>    <div className="card_alias">
          <div>
            <h3>Alias</h3>
            <p>gastonbalmaceda</p>
          </div>
          <IoCopyOutline style={{fontSize:'25px', color: 'var(--primary-color)'}}/>
        </div>
      </div>
    </section>
  );
};

export default AliasSection;
