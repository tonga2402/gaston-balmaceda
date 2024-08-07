import AliasSection from "@/app/components/dashboard/tuperfil/AliasSection";
import GestionSection from "@/app/components/dashboard/tuperfil/GestionSection";
import PerfilSection from "@/app/components/dashboard/tuperfil/PerfilSection";
import React from "react";

const tuPerfilPage = () => {
  return <div className='container_initialPage'>
    <PerfilSection />
    <GestionSection />
    <AliasSection />
  </div>;
};

export default tuPerfilPage;
