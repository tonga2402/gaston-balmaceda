import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const FilterSearchSection = () => {
  return (
    <div className="container_filter_search">
      <IoSearchOutline />
      <input type="text" placeholder="Buscar en tu actividad" />
    </div>
  );
};

export default FilterSearchSection;
