"use client";
import { useState } from "react";
import { IoOptionsOutline, IoChevronDown } from "react-icons/io5";

const FilterSection = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handleShow = () => {
    setShowFilter(!showFilter)
  }
  return (
    <div className="container_filter_section">
      <div className="container_filterButton" onClick={handleShow}>
        <h5>Filtrar</h5>
        <IoOptionsOutline />
      </div>
      {showFilter && (
        <div className="container_select">
          <div className="filter_header">
            <div className="filter_header_div">
              <h4>Periodo</h4>
              <IoChevronDown />
            </div>
            <div>
              <button style={{backgroundColor:'transparent'}}>Borrar filtros</button>
            </div>
          </div>
          <form action="" className="form_filter">
            <label htmlFor="1">
              Hoy
              <input type="radio" id="1" name="filter"/>
            </label >
            <label htmlFor="2">
              Ayer
              <input type="radio" id="2" name="filter"/>
            </label>
            <label htmlFor="3">
              Ultima semana
              <input type="radio" id="3" name="filter"/>
            </label>
            <label htmlFor="4">
              Ultimos 15 dias
              <input type="radio" id="4" name="filter"/>
            </label>
            <label htmlFor="5">
              Ultimo mes
              <input type="radio" id="5" name="filter" />
            </label>
            <label htmlFor="6">
              Ultimo ano
              <input type="radio" id="6"name="filter" />
            </label>
            <button>Aplicar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FilterSection;