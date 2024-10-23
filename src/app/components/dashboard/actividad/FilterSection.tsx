"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoOptionsOutline, IoChevronDown } from "react-icons/io5";
import { useDebounce } from "use-debounce";

const FilterSection = () => {
  const router = useRouter();
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");


  const handleShow = () => {
    setShowFilter(!showFilter);
  };

  const handleDeleteFilter = () => {

      router.push(`/dashboard/actividad`)

    setShowFilter(false)
  }

  const handleFilter = () => {
   
      router.push(`/dashboard/actividad?filter=${inputValue}`);

    setShowFilter(false);
  };

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
              <button
                onClick={handleDeleteFilter}
                style={{ backgroundColor: "transparent" }}
              >
                Borrar filtros
              </button>
            </div>
          </div>
          <form action={handleFilter} className="form_filter">
            <label htmlFor="1">
              Hoy
              <input
                type="radio"
                id="1"
                name="filter"
                value="1"
                onChange={(e) => setInputValue(e.target.value)}
                checked={inputValue === '1'}
              />
            </label>
            <label htmlFor="2">
              Ayer
              <input
                type="radio"
                id="2"
                name="filter"
                value="2"
                onChange={(e) => setInputValue(e.target.value)}
                checked={inputValue === '2'}
              />
            </label>
            <label htmlFor="3">
              Ultima semana
              <input
                type="radio"
                id="3"
                name="filter"
                value="7"
                onChange={(e) => setInputValue(e.target.value)}
                checked={inputValue === '7'}
              />
            </label>
            <label htmlFor="4">
              Ultimos 15 dias
              <input
                type="radio"
                id="4"
                name="filter"
                value="15"
                onChange={(e) => setInputValue(e.target.value)}
                checked={inputValue === '15'}
              />
            </label>
            <label htmlFor="5">
              Ultimo mes
              <input
                type="radio"
                id="5"
                name="filter"
                value="31"
                onChange={(e) => setInputValue(e.target.value)}
                checked={inputValue === '31'}
              />
            </label>
            <label htmlFor="6">
              Ultimo ano
              <input
                type="radio"
                id="6"
                name="filter"
                value="365"
                onChange={(e) => setInputValue(e.target.value)}
                checked={inputValue === '365'}
              />
            </label>
            <button>Aplicar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
